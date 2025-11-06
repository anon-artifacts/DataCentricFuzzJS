class C1 extends Promise {
    then(a3, a4) {
        a3();
        return super.then(a3);
    }
}
const v8 = C1.resolve(1);
const v9 = v8.constructor;
try { new v9(); } catch (e) {}
const v11 = (a12) => {
    return a12;
};
v8.finally(v11);
