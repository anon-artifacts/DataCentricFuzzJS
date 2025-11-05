const splice = Array.prototype.splice;
const unshift = Array.prototype.unshift;
{
    const v11 = (2 ** 53) - 1;
    let a = { length: v11 };
    const v14 = () => {
        let v16;
        try { v16 = unshift.call(a, 42); } catch (e) {}
        return v16;
    };
    v14();
    unshift.call(a);
    (2 ** 53) - 1;
}
{
    const v29 = (2 ** 53) - 1;
    let a = { length: v29 };
    const v32 = () => {
        let v36;
        try { v36 = splice.call(a, 0, 0, 42); } catch (e) {}
        return v36;
    };
    v32();
    splice.call(a, 0, 1, 42).length;
    a[0];
}
{
    const v51 = (2 ** 53) - 1;
    const v54 = Symbol.isConcatSpreadable;
    let a = { length: v51, [v54]: true };
    const v57 = () => {
        const v59 = [42];
        let v60;
        try { v60 = v59.concat(a); } catch (e) {}
        return v60;
    };
    v57();
    const v63 = () => {
        const v65 = [,];
        let v66;
        try { v66 = v65.concat(a); } catch (e) {}
        return v66;
    };
    v63();
    const v68 = () => {
        const v70 = [];
        let v71;
        try { v71 = v70.concat(42, a); } catch (e) {}
        return v71;
    };
    v68();
}
