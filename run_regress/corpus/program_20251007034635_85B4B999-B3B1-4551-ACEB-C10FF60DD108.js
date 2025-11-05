function f0() {
}
function* buffer_options() {
    for (const v7 of ["SameProcessSameThread","SameProcessDifferentThread","DifferentProcess","DifferentProcessForIndexedDB"]) {
        for (const v17 of [0,8,16,200,1000,4096,8192,65536]) {
            yield { scope: v7, size: v17 };
        }
    }
}
function test() {
    for (const v22 of buffer_options()) {
        let v25;
        try { v25 = new ArrayBuffer(size); } catch (e) {}
        var old = v25;
        const v27 = [old,old];
        const v28 = [old];
        const v30 = { scope: scope };
        let v32;
        try { v32 = serialize(v27, v28, v30); } catch (e) {}
        const v33 = { scope: scope };
        let v35;
        try { v35 = deserialize(v32, v33); } catch (e) {}
        var copy = v35;
        old?.byteLength;
        copy?.[0] === copy?.[1];
        (copy = copy?.[0])?.byteLength;
        var constructors = [Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray,DataView];
        for (const v57 of constructors) {
            var dataview = v57 === DataView;
            let v60;
            try { v60 = new ArrayBuffer(size); } catch (e) {}
            var buf = v60;
            let v62;
            try { v62 = new v57(buf); } catch (e) {}
            var old_arr = v62;
            buf?.byteLength;
            old_arr?.buffer;
            if (!dataview) {
                old_arr?.length;
                size / old_arr?.BYTES_PER_ELEMENT;
            }
            const v70 = [buf];
            const v71 = { scope: scope };
            let v72;
            try { v72 = serialize(old_arr, v70, v71); } catch (e) {}
            const v73 = { scope: scope };
            let v74;
            try { v74 = deserialize(v72, v73); } catch (e) {}
            var copy_arr = v74;
            buf?.byteLength;
            if (!dataview) {
                old_arr?.length;
            }
            copy_arr?.buffer?.byteLength == size;
            if (!dataview) {
                copy_arr?.length;
                size / old_arr?.BYTES_PER_ELEMENT;
            }
            buf = null;
            old_arr = null;
            try { gc(); } catch (e) {}
        }
        for (const v95 of constructors) {
            var dataview = v95 === DataView;
            let v98;
            try { v98 = new ArrayBuffer(size); } catch (e) {}
            var buf = v98;
            let v100;
            try { v100 = new v95(buf); } catch (e) {}
            var old_arr = v100;
            let v102;
            try { v102 = new DataView(buf); } catch (e) {}
            var dv = v102;
            const v104 = [buf];
            const v105 = { scope: scope };
            let v106;
            try { v106 = serialize(old_arr, v104, v105); } catch (e) {}
            const v107 = { scope: scope };
            let v108;
            try { v108 = deserialize(v106, v107); } catch (e) {}
            var copy_arr = v108;
            buf?.byteLength;
            if (!dataview) {
                old_arr?.byteLength;
                old_arr?.length;
            }
            buf = null;
            old_arr = null;
            try { gc(); } catch (e) {}
        }
        if (size >= 4) {
            let v126;
            try { v126 = new ArrayBuffer(size); } catch (e) {}
            old = v126;
            let v127;
            try { v127 = new Int32Array(old); } catch (e) {}
            var view = v127;
            view[0] = 1;
            const v132 = {
                get foo() {
                    view[0] = 2;
                },
            };
            var mutator = v132;
            const v134 = [old,mutator];
            const v135 = [old];
            const v136 = { scope: scope };
            let v137;
            try { v137 = serialize(v134, v135, v136); } catch (e) {}
            const v138 = { scope: scope };
            let v139;
            try { v139 = deserialize(v137, v138); } catch (e) {}
            var copy = v139;
            const v141 = copy?.[0];
            let v142;
            try { v142 = new Int32Array(v141); } catch (e) {}
            var viewCopy = v142;
            view?.length;
            viewCopy?.[0];
        }
        if (size >= 4) {
            let v150;
            try { v150 = new ArrayBuffer(size); } catch (e) {}
            const b1 = v150;
            const v156 = {
                get foo() {
                    const v153 = [b1];
                    const v154 = { scope: scope };
                    try { serialize(b1, v153, v154); } catch (e) {}
                },
            };
            let mutator = v156;
            const v158 = () => {
                const v159 = [b1,mutator];
                const v160 = [b1];
                let v161;
                try { v161 = serialize(v159, v160); } catch (e) {}
                return v161;
            };
            try { v158(); } catch (e) {}
            let v165;
            try { v165 = new ArrayBuffer(size); } catch (e) {}
            const b2 = v165;
            const v170 = {
                get foo() {
                    try { detachArrayBuffer(b2); } catch (e) {}
                },
            };
            mutator = v170;
            const v171 = () => {
                const v172 = [b2,mutator];
                const v173 = [b2];
                let v174;
                try { v174 = serialize(v172, v173); } catch (e) {}
                return v174;
            };
            try { v171(); } catch (e) {}
        }
    }
}
try { test(); } catch (e) {}
f0(0, 0, "ok");
