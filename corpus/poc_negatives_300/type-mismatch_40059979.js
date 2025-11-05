let o = new Array(1.1,2.2,3.3,4.4);
function bar(flag){
    if(flag) return;
    o.length = 67108864;
}

function foo(a1, a2){
    for (let i = 0; i < 100000000; i++) var bbbb
    let c = {a:0};
    let x = c.a * 0;

    let y = BigInt(1);
    if(!a2)
        y = 67108863;
    let z = (o.length < y) | 0;
    bar(a1);
    let res = (z==x) | 0; // Typer: Range(0,0), Real: 1
    return res;
}

res = foo(true, false);
console.log(res);
res = foo(true, false);
res = foo(false, false);
console.log(res);
