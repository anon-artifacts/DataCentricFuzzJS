function f0() {
    new Date();
}
const crossSiteDate = { x: f0 };
const v5 = (a6) => {
    console.log(a6);
    try {
        console.log(Date.prototype[a6].call(crossSiteDate));
    } catch(e14) {
    }
};
const v15 = (a16) => {
    return !a16.match(/^set/);
};
Object.getOwnPropertyNames(Date.prototype).filter(v15).forEach(v5);
