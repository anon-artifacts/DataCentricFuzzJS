function opt(opt_param){
const v3 = new Uint16Array(63644);
function v21(v25) {
    const v26 = v25.o();
}
function v39(v41) {
    Promise[1337] = v41;
}
for (let v69 = 0; v69 < 100; v69++) {
    const v73 = {"o":v39};
    const v74 = v21(v73);
}
for (let v78 = 0; v78 < 100; v78++) {
    const v82 = new Array(100);
    const v85 = v39(v82);
}
const v87 = v3["find"](v39,"find");
}
opt(false);
opt(true);
opt(false);
%PrepareFunctionForOptimization(opt);
opt(true);
%OptimizeFunctionOnNextCall(opt);
opt(false);