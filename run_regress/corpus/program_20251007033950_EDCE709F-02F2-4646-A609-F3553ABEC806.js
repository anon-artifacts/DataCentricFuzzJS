let size = 200;
let testError = Symbol();
const v6 = new Array(size);
let src = v6;
for (let i9 = 0; i9 < size; ++i9) {
    src[i9] = i9;
}
function crashBug1(a15, a16) {
    for (let i18 = 0; i18 < size; ++i18) {
        let c = [a16[i18]];
        c[i18] = 9;
    }
    try {
        for (let i28 = 0; i28 < size; ++i28) {
            let c = a16[i28] && undefined;
            c[i28] = 9;
        }
        return testError;
    } catch(e38) {
    }
}
function test2(a40) {
    const v41 = new Array(size);
    let c = v41;
    for (let i44 = 0; i44 < size; ++i44) {
        a40[i44] = src[i44];
        c[i44] = a40[i44];
    }
}
function invalidMemset(a52, a53) {
    for (let i55 = 0; i55 < size; ++i55) {
        a53[i55] = i55;
        a52[i55] = 0;
    }
}
function memopOrder(a62, a63) {
    for (let i65 = 0; i65 < size; ++i65) {
        a63[i65] = 4;
        a62[i65] = 5;
    }
}
function memsetUnroll(a73, a74) {
    for (let i76 = 0; i76 < size; ++i76) {
        a74[i76] = 4;
        a73[i76] = 5;
        ++i76;
        a73[i76] = 5;
        a74[i76] = 4;
    }
}
function invalidMemcopy(a87, a88) {
    for (let i90 = 0; i90 < size; ++i90) {
        a88[i90] = i90;
        a87[i90] = a88[i90];
    }
}
function copySetMix1(a97, a98) {
    for (let i100 = 0; i100 < size; ++i100) {
        a98[i100] = 5;
        a97[i100] = a98[i100];
    }
}
function copySetMix2(a108, a109) {
    for (let i111 = 0; i111 < size; ++i111) {
        a108[i111] = a109[i111];
        a109[i111] = 5;
    }
}
function copySetMix3(a119, a120) {
    for (let i122 = 0; i122 < size; ++i122) {
        a120[i122] = a119[i122];
        a120[i122] = 5;
    }
}
function copySetMix4(a130, a131) {
    for (let i133 = 0; i133 < size; ++i133) {
        a130[i133] = 5;
        a130[i133] = a131[i133];
    }
}
function test(a141) {
    let name = a141.name;
    const v144 = new Array(size);
    let interpretArray = v144;
    interpretArray.fill(1);
    a141(interpretArray, interpretArray);
    const v149 = new Array(size);
    let jitArray = v149;
    jitArray.fill(1);
    let r = a141(jitArray, jitArray);
    if (r === testError) {
        print(`Error: ${name} had an internal error`);
        return false;
    }
    return compare(interpretArray, jitArray, name);
}
function compare(a163, a164, a165) {
    for (let i167 = 0; i167 < size; ++i167) {
        if (a163[i167] !== a164[i167]) {
            print(`Error: ${a165} interpret[${i167}] (${a163[i167]}) !== jit[${i167}] (${a164[i167]})`);
            return false;
        }
    }
    return true;
}
let tests = [crashBug1,test2,memsetUnroll,memopOrder,invalidMemset,invalidMemcopy,copySetMix1,copySetMix2,copySetMix3,copySetMix4];
let passed = true;
for (const v186 of tests) {
    passed &= test(v186);
}
if (passed) {
    print("PASSED");
} else {
    print("FAILED");
}
