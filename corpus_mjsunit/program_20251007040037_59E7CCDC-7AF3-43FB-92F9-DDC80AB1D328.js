function test() {
    this.init();
    for (let i4 = 0; i4 < 10; i4++) {
        const t3 = this.blocks[10];
        delete t3[9];
        this.collapse_blocks();
    }
    this.look_for_holes();
}
function f19() {
    const v22 = new Array(20);
    this.blocks = v22;
    for (let i25 = 0; i25 < this.blocks.length; i25++) {
        const v34 = new Array(10);
        const t14 = this.blocks;
        t14[i25] = v34;
        for (let i38 = 0; i38 < this.blocks[i25].length; i38++) {
            const v47 = {};
            const t18 = this.blocks[i25];
            t18[i38] = v47;
        }
    }
}
const t23 = test.prototype;
t23.init = f19;
function f52(a53, a54, a55, a56) {
    const v60 = this.blocks[a55][a56];
    const t27 = this.blocks[a53];
    t27[a54] = v60;
    if (this.blocks[a53][a54]) {
        const t30 = this.blocks[a55];
        delete t30[a56];
    }
}
const t34 = test.prototype;
t34.move_block = f52;
function f73() {
    var didSomething = 0;
    do {
        didSomething = 0;
        for (let i78 = 0; i78 < this.blocks.length; i78++) {
            for (let i87 = 1; i87 < this.blocks[i78].length; i87++) {
                if (!this.blocks[i78][i87] && this.blocks[i78][i87 - 1]) {
                    this.move_block(i78, i87, i78, i87 - 1);
                    didSomething = 1;
                }
            }
        }
    } while (didSomething)
    do {
        didSomething = 0;
        for (let i115 = 0; i115 < (this.blocks.length - 1); i115++) {
            if (!this.blocks[i115][9] && this.blocks[i115 + 1][9]) {
                for (let i138 = 0; i138 < this.blocks[i115].length; i138++) {
                    this.move_block(i115, i138, i115 + 1, i138);
                }
                didSomething = 1;
            }
        }
    } while (didSomething)
}
const t61 = test.prototype;
t61.collapse_blocks = f73;
function f153() {
    var was_empty = false;
    var n_empty = 0;
    for (let i159 = 0; i159 < this.blocks.length; i159++) {
        var empty = true;
        for (let i170 = 0; i170 < this.blocks[i159].length; i170++) {
            if (this.blocks[i159][i170]) {
                empty = false;
                n_empty++;
            }
        }
        if (was_empty) {
        }
        was_empty = empty;
    }
}
const t79 = test.prototype;
t79.look_for_holes = f153;
new test();
