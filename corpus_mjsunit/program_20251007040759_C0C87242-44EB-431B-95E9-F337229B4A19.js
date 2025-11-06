function assertStackLengthEq(a1, a2) {
    let actual = 0;
    while (a1) {
        actual++;
        a1 = a1?.parent;
    }
}
const v10 = {
    get s() {
        let v9;
        try { v9 = saveStack(); } catch (e) {}
        return v9;
    },
};
const get = v10?.s;
let set;
try {
    const v21 = {
        set s(a18) {
            let v20;
            try { v20 = saveStack(); } catch (e) {}
            throw v20;
        },
    };
    v21.s = 1;
} catch(e22) {
    set = e22;
}
