function main() {
function V0(v2,v3,v4,v5) {
    if (!new.target) { throw 'must be called with new'; }
    function v6() {
        const v8 = Symbol.match;
        return v8;
    }
    const v9 = [v6,v6,v6];
    v9.set = v6;
    const v10 = v9;
    function v11() {
        return v10;
    }
    function v12(v13) {
        return v6;
    }
    Object.defineProperty(v10, "get", { get: v11, set: v12 })
    const v15 = new Proxy(v10,v10);
    v15.get = v6;
    for (let v16 = 0; v16 < 4004; v16++) {
        const v18 = new BigUint64Array(v16);
    }
}
function v20(v21,v22) {
    const v26 = JSON.stringify("Rebellious subjects, enemies to peace,\nProfaners of this neighbour-stained steel,--\nWill they not hear? What, ho! you men, you beasts,\nThat quench the fire of your pernicious rage\nWith purple fountains issuing from your veins,\nOn pain of torture, from those bloody hands\nThrow your mistemper'd weapons to the ground,\nAnd hear the sentence of your moved prince.\nThree civil brawls, bred of an airy word,\nBy thee, old Capulet, and Montague,\nHave thrice disturb'd the quiet of our streets,\nAnd made Verona's ancient citizens\nCast by their grave beseeming ornaments,\nTo wield old partisans, in hands as old,\nCanker'd with peace, to part your canker'd hate:\nIf ever you disturb our streets again,\nYour lives shall pay the forfeit of the peace.\nFor this time, all the rest depart away:\nYou Capulet; shall go along with me:\nAnd, Montague, come you this afternoon,\nTo know our further pleasure in this case,\nTo old Free-town, our common judgment-place.\nOnce more, on pain of death, all men depart.\n");
    const v28 = new ArrayBuffer(10854816);
    const v29 = v20();
    return v21;
}
const v30 = "function" || "function";
const v31 = [v20];
v31.type = v30;
const v33 = new Worker(v20,v31);
const v34 = new V0("function",v20,v31,v31);
}
main(); 
//when repro it, only need "--harmony-struct" in loop. 