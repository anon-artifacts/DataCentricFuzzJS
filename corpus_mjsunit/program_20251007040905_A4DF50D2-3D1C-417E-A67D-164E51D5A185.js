[["65535","symbol","65535",9n]];
/v0[\0]*/mgisu;
/\u003z*/mgdis;
/7/md;
function f() {
    return [];
}
f[0];
function f15(a16) {
    try {
        a16();
    } catch(e18) {
    }
}
function dump_args() {
    let v21 = "";
    for (let i23 = 0; i23 < arguments.length; i23++) {
        if (i23 > 0) {
            v21 += ", ";
        }
        v21 += arguments[i23];
    }
    ("Called with this: " + typeof this) + "[";
    ((this + "], args: [") + v21) + "]";
    print();
}
const v50 = {};
function f52() {
}
function f53() {
    v50.apply({});
}
const v59 = {};
function f60() {
    dump_args.apply(v59);
}
f15();
function f63() {
    dump_args.apply();
}
f15();
function f67() {
    dump_args.apply();
}
f15(f67);
print();
function f74() {
    const v76 = { length: null };
    dump_args.apply();
}
f15(f74);
function f79() {
    dump_args.apply(v59, { length: undefined });
}
f15(f79);
function f84() {
    const v85 = {};
    dump_args.apply();
}
f15(f84);
function f88() {
    dump_args.apply(v59, { length: "string" });
}
f15(f88);
function f93() {
    const v95 = {};
    dump_args.apply();
}
f15(f93);
var huge_array_length = [];
print();
[];
dump_args.apply();
dump_args.apply(v59, [1]);
dump_args.apply(v59, [2,3,NaN,null,,false,"hello",v59]);
var arr = [];
arr.length = 5;
dump_args.apply(v59, arr);
function f124() {
    dump_args.apply(v59, arguments);
}
f124();
f124();
f124(2, 3, NaN, null, undefined, false, "hello", v59);
print("\n--- f.apply(x, obj) ---");
function f139() {
    dump_args.apply(v59, {});
}
f15(f139);
function f144() {
    const v145 = {};
    dump_args.apply();
}
f15(f144);
function f148() {
    dump_args.apply(v59, { length: 8, 4: undefined, 5: false });
}
f15(f148);
function f1() {
    this.x1 = "hello";
}
f1.apply();
"global x1 : " + x1;
print();
"global x1 : " + (x1 = 0);
print();
var o = {};
f1.apply();
"global x1 : " + x1;
print();
o.x1;
function f177(a178, a179) {
    function f180(a181) {
        if (a179) {
        }
    }
    var print_if = f180;
    function f183() {
        a178.apply();
    }
    f15(f183);
    function f186() {
        a178.apply(null);
    }
    f15(f186);
    function f190() {
        a178.apply();
    }
    f15(f190);
    function f194() {
        a178.apply(123);
    }
    f15(f194);
    function f198() {
        a178.apply();
    }
    f15(f198);
    function f202() {
        a178.apply("string");
    }
    f15(f202);
}
print("\n--- f.apply(v), v is missing/null/undefined/123/true/'string' ---");
function f209(a210, a211) {
    function f212(a213) {
        if (a211) {
        }
    }
    var print_if = f212;
    function f215() {
        a210.call();
        print_if();
    }
    f15(f215);
    function f219() {
        a210.call();
    }
    f15(f219);
    function f222() {
        a210.call();
    }
    f15(f222);
    function f225() {
        a210.call();
    }
    f15(f225);
    function f229() {
        a210.call("string");
    }
    f15(f229);
}
f209(dump_args);
