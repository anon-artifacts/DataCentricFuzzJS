function f0(a1, a2, a3) {
    if (a1 !== a2) {
        throw ((((a3 + ". Expected '") + a2) + "', but was '") + a1) + "'";
    }
}
var testCase = f0;
function Dog(a15) {
    this.name = a15;
    const v17 = () => {
        return this?.name;
    };
    this.getName = v17;
    const v21 = () => {
        const v22 = () => {
            return this?.name;
        };
        return v22;
    };
    this.getNameNestingLevel1 = v21;
    const v26 = () => {
        const v27 = () => {
            const v28 = () => {
                return this?.name;
            };
            return v28;
        };
        return v27;
    };
    this.getNameNestingLevel2 = v26;
}
let v33;
try { v33 = new Dog("Max"); } catch (e) {}
var d = v33;
let v35;
try { v35 = d.getName(); } catch (e) {}
try { noInline(v35); } catch (e) {}
let v38;
try { v38 = d.getNameNestingLevel1(); } catch (e) {}
let v39;
try { v39 = v38(); } catch (e) {}
try { noInline(v39); } catch (e) {}
let v41;
try { v41 = d.getNameNestingLevel2(); } catch (e) {}
let v42;
try { v42 = v41(); } catch (e) {}
let v43;
try { v43 = v42(); } catch (e) {}
try { noInline(v43); } catch (e) {}
for (let i46 = 0; i46 < 10000; i46++) {
    let v52;
    try { v52 = d.getName(); } catch (e) {}
    const v53 = d?.name;
    try { testCase(v52, v53, "Error: this is not lexically binded inside of the arrow function #1"); } catch (e) {}
    let v56;
    try { v56 = d.getNameNestingLevel1(); } catch (e) {}
    let v57;
    try { v57 = v56(); } catch (e) {}
    const v58 = d?.name;
    try { testCase(v57, v58, "Error: this is not lexically binded inside of the arrow function #2"); } catch (e) {}
    let v61;
    try { v61 = d.getNameNestingLevel2(); } catch (e) {}
    let v62;
    try { v62 = v61(); } catch (e) {}
    let v63;
    try { v63 = v62(); } catch (e) {}
    const v64 = d?.name;
    try { testCase(v63, v64, "Error: this is not lexically binded inside of the arrow function #3"); } catch (e) {}
}
