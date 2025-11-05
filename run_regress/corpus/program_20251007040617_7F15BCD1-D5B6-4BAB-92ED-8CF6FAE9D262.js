console.log("This tests that op_get_by_pname is compiled correctly for non-final objects.");
function foo(a4) {
    var result = 0;
    for (const v7 in a4) {
        result += a4[v7];
    }
    return result;
}
const v10 = new Date();
var o = v10;
const v12 = new Date();
var p = v12;
const v14 = new Date();
var q = v14;
const v16 = new Date();
var r = v16;
const v18 = new Date();
var s = v18;
o.a = 1;
o.b = 3;
o.c = 7;
p.a = 1;
p.b = 2;
p.c = 3;
p.d = 4;
q.a = 1;
q.b = 2;
q.c = 3;
q.d = 4;
q.e = 3457;
r.a = 1;
r.b = 2;
r.c = 3;
r.d = 4;
r.e = 91;
r.f = 12;
s.a = 1;
s.b = 2;
s.c = 3;
s.d = 4;
s.e = 91;
s.f = 12;
s.g = 69;
for (let i46 = 0; i46 < 100; ++i46) {
    foo(o);
    foo(p);
    foo(q);
    foo(r);
    foo(s);
}
