function guarded_call(a1) {
    try {
        a1();
    } catch(e3) {
        print((("Exception: " + e3.name) + " : ") + e3.message);
    }
}
function dump_args() {
    var args = "";
    for (let i17 = 0; i17 < arguments.length; i17++) {
        if (i17 > 0) {
            args += ", ";
        }
        args += arguments[i17];
    }
    print(((((("Called with this: " + typeof this) + "[") + this) + "], args: [") + args) + "]");
}
const v46 = Function.prototype.apply;
var noncallable = { apply: v46 };
print("--- f is not callable ---");
function f52() {
    noncallable.apply();
}
guarded_call(f52);
function f55() {
    noncallable.apply({}, [1,2,3]);
}
guarded_call(f55);
var o = {};
print("\n--- f.apply(x) ---");
function f67() {
    dump_args.apply(o);
}
guarded_call(f67);
print("\n--- f.apply(x, null), f.apply(x, undefined) ---");
function f72() {
    dump_args.apply(o, null);
}
guarded_call(f72);
function f76() {
    dump_args.apply(o, undefined);
}
guarded_call(f76);
print("\n--- f.apply(x, 123), f.apply(x, 'string'), f.apply(x, true) ---");
function f82() {
    dump_args.apply(o, 123);
}
guarded_call(f82);
function f86() {
    dump_args.apply(o, "string");
}
guarded_call(f86);
function f90() {
    dump_args.apply(o, true);
}
guarded_call(f90);
print("\n--- f.apply(x, obj), obj.length is null/undefined/NaN/string/OutOfRange ---");
function f96() {
    dump_args.apply(o, { length: null });
}
guarded_call(f96);
function f101() {
    dump_args.apply(o, { length: undefined });
}
guarded_call(f101);
function f106() {
    dump_args.apply(o, { length: NaN });
}
guarded_call(f106);
function f111() {
    dump_args.apply(o, { length: "string" });
}
guarded_call(f111);
function f116() {
    const v119 = 4294967295 + 1;
    dump_args.apply(o, { length: v119 });
}
guarded_call(f116);
function f123() {
    const v125 = -1;
    dump_args.apply(o, { length: v125 });
}
guarded_call(f123);
print("\n--- f.apply(x, arr), arr.length is huge ---");
var huge_array_length = [];
huge_array_length.length = 2147483647;
function f134() {
    dump_args.apply(o, huge_array_length);
}
guarded_call(f134);
print("\n--- f.apply(x, obj), obj.length is huge ---");
function f139() {
    dump_args.apply(o, { length: 4294967295 });
}
guarded_call(f139);
print("\n--- f.apply(x, arr) ---");
dump_args.apply(o, []);
dump_args.apply(o, [1]);
dump_args.apply(o, [2,3,NaN,null,,false,"hello",o]);
print("\n--- f.apply(x, arr) arr.length increased ---");
var arr = [1,2];
arr.length = 5;
dump_args.apply(o, arr);
print("\n--- f.apply(x, arguments) ---");
function apply_arguments() {
    dump_args.apply(o, arguments);
}
apply_arguments();
apply_arguments(1);
apply_arguments(2, 3, NaN, null, undefined, false, "hello", o);
print("\n--- f.apply(x, obj) ---");
function f185() {
    dump_args.apply(o, { length: 0 });
}
guarded_call(f185);
function f190() {
    dump_args.apply(o, { length: 1, 0: 1 });
}
guarded_call(f190);
function f196() {
    const v204 = {
        length: 8,
        0: 2,
        1: 3,
        2: NaN,
        3: null,
        4: undefined,
        5: false,
        6: "hello",
        7: o,
    };
    dump_args.apply(o, v204);
}
guarded_call(f196);
function f1() {
    this.x1 = "hello";
}
print("\n--- f.apply(), f.apply(null), f.apply(undefined), global x1 should be changed ---");
f1.apply();
print("global x1 : " + x1);
x1 = 0;
f1.apply(null);
print("global x1 : " + x1);
x1 = 0;
f1.apply(undefined);
print("global x1 : " + x1);
print("\n--- f.apply(x), global x1 should NOT be changed ---");
var o = {};
x1 = 0;
f1.apply(o);
print("global x1 : " + x1);
print("o.x1 : " + o.x1);
function apply_non_object(a243, a244) {
    function f245(a246) {
        if (a244) {
            print(a246);
        }
    }
    var print_if = f245;
    function f249() {
        print_if(a243.apply());
    }
    guarded_call(f249);
    function f253() {
        print_if(a243.apply(null));
    }
    guarded_call(f253);
    function f258() {
        print_if(a243.apply(undefined));
    }
    guarded_call(f258);
    function f263() {
        print_if(a243.apply(123));
    }
    guarded_call(f263);
    function f268() {
        print_if(a243.apply(true));
    }
    guarded_call(f268);
    function f273() {
        print_if(a243.apply("string"));
    }
    guarded_call(f273);
}
print("\n--- f.apply(v), v is missing/null/undefined/123/true/'string' ---");
apply_non_object(dump_args);
print("\n--- f.apply(v), v is missing/null/undefined/123/true/'string', f: string.charCodeAt ---");
apply_non_object(String.prototype.charCodeAt, true);
print("\n--- f.apply(v), v is missing/null/undefined/123/true/'string', f: string.charAt ---");
apply_non_object(String.prototype.charAt, true);
function call_non_object(a295, a296) {
    function f297(a298) {
        if (a296) {
            print(a298);
        }
    }
    var print_if = f297;
    function f301() {
        print_if(a295.call());
    }
    guarded_call(f301);
    function f305() {
        print_if(a295.call(null));
    }
    guarded_call(f305);
    function f310() {
        print_if(a295.call(undefined));
    }
    guarded_call(f310);
    function f315() {
        print_if(a295.call(123));
    }
    guarded_call(f315);
    function f320() {
        print_if(a295.call(true));
    }
    guarded_call(f320);
    function f325() {
        print_if(a295.call("string"));
    }
    guarded_call(f325);
}
print("\n--- f.call(v), v is missing/null/undefined/123/true/'string' ---");
call_non_object(dump_args);
print("\n--- f.call(v), v is missing/null/undefined/123/true/'string', f: string.charCodeAt ---");
call_non_object(String.prototype.charCodeAt, true);
print("\n--- f.call(v), v is missing/null/undefined/123/true/'string', f: string.charAt ---");
call_non_object(String.prototype.charAt, true);
