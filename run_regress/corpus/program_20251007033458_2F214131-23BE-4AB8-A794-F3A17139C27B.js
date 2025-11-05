let singleton = { x: 1 };
let holder = { sing_prop: singleton };
function makeChain(a6, a7) {
    var curr = a7;
    for (let i10 = 0; i10 < a6; i10++) {
        curr = Object.create(curr);
    }
    return curr;
}
let chain = makeChain(1000, holder);
var x = 0;
for (let i23 = 0; i23 < 1111; i23++) {
    x += chain.sing_prop.x;
    singleton.x = -singleton.x;
}
