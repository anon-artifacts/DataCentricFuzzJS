function f0() {
}
{
    let array = [];
    array.push(0, 1, 2);
    function f7(a8) {
        array.push(3, 4, 5);
        Object.defineProperty(array, "length", { writable: false });
        const v19 = new Array(a8);
        return v19;
    }
    const v21 = Symbol.species;
    array.constructor = { [v21]: f7 };
    const v23 = () => {
        const v28 = Array.prototype.splice;
        let v29;
        try { v29 = v28.call(array, 0, 1); } catch (e) {}
        return v29;
    };
    v23();
    array.length;
    [1,2,,3,4,5];
}
{
    let array = [];
    array.push(0, 1, 2);
    function f47(a48) {
        array.push(3, 4, 5);
        Object.defineProperty(array, "length", { writable: false });
        const v59 = new Array(a48);
        return v59;
    }
    const v61 = Symbol.species;
    array.constructor = { [v61]: f47 };
    const v63 = () => {
        const v69 = Array.prototype.splice;
        let v70;
        try { v70 = v69.call(array, 0, 0, 123); } catch (e) {}
        return v70;
    };
    v63();
    array.length;
    [123,0,1,2,4,5];
}
if (typeof f0 === "function") {
    f0(true, true);
}
