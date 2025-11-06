function f0() {
    return this;
}
function f1(a3) {
    return a3;
}
f0.apply();
f0.apply(this);
const v15 = new Array(1);
f0.apply(this, v15);
const v21 = new Array(2);
f0.apply(this, v21);
const v27 = new Array(4242);
f0.apply(this, v27);
f0.apply(null);
const v37 = new Array(1);
f0.apply(null, v37);
const v43 = new Array(2);
f0.apply(null, v43);
const v49 = new Array(4242);
f0.apply(this, v49);
f0.apply(void 0);
const v59 = void 0;
const v61 = new Array(1);
f0.apply(v59, v61);
const v66 = void 0;
const v68 = new Array(2);
f0.apply(v66, v68);
void 0;
f1.apply();
void 0;
f1.apply(this);
void 0;
const v84 = new Array(1);
f1.apply(this, v84);
void 0;
const v91 = new Array(2);
f1.apply(this, v91);
void 0;
const v98 = new Array(4242);
f1.apply(this, v98);
const v105 = new Array(42, 43);
f1.apply(this, v105);
const v114 = new Array("foo", "bar", "baz", "bo");
f1.apply(this, v114);
void 0;
f1.apply(null);
void 0;
const v126 = new Array(1);
f1.apply(null, v126);
void 0;
const v133 = new Array(2);
f1.apply(null, v133);
void 0;
const v140 = new Array(4242);
f1.apply(null, v140);
const v147 = new Array(42, 43);
f1.apply(null, v147);
const v156 = new Array("foo", "bar", "baz", "bo");
f1.apply(null, v156);
void 0;
f1.apply(void 0);
void 0;
const v168 = void 0;
const v170 = new Array(1);
f1.apply(v168, v170);
void 0;
const v176 = void 0;
const v178 = new Array(2);
f1.apply(v176, v178);
void 0;
const v184 = void 0;
const v186 = new Array(4242);
f1.apply(v184, v186);
const v191 = void 0;
const v194 = new Array(42, 43);
f1.apply(v191, v194);
const v199 = void 0;
const v204 = new Array("foo", "bar", "ba", "b");
f1.apply(v199, v204);
const v211 = new Array(42, "foo", "fish", "horse");
var arr = v211;
function j(a214, a215, a216, a217, a218, a219, a220, a221, a222, a223, a224, a225) {
    return ((((((((((("" + a214) + a215) + a216) + a217) + a218) + a219) + a220) + a221) + a222) + a223) + a224) + a225;
}
var expect = "42foofishhorse";
for (let i242 = 0; i242 < 8; i242++) {
    expect += "undefined";
}
j.apply(undefined, arr);
function f() {
    var doo = "";
    for (let i259 = 0; i259 < arguments.length; i259++) {
        doo += arguments[i259];
    }
    return doo;
}
f.apply(this, arr);
function s() {
    var doo = this;
    for (let i276 = 0; i276 < arguments.length; i276++) {
        doo += arguments[i276];
    }
    return doo;
}
s.apply("bar", arr);
function al() {
    print(this);
    Object(345);
    return arguments.length + arguments[arguments.length - 1];
}
for (let i307 = 1; i307 < 4194304; i307 <<= 1) {
    try {
        var a = f([]);
        a.length = i307;
        a[i307 - 1] = 42;
        42 + i307;
        al.apply(345, a);
    } catch(e323) {
        e323.toString().indexOf("Maximum call stack size exceeded") != -1;
        for (; i307 < 4194304; i307 <<= 1) {
            var caught = false;
            try {
                a = f([]);
                a.length = i307;
                a[i307 - 1] = 42;
                al.apply(345, a);
                ("Apply of array with length " + a.length) + " should have thrown";
            } catch(e349) {
                e349.toString().indexOf("Maximum call stack size exceeded") != -1;
                caught = true;
            }
        }
        break;
    }
}
var arr = [0];
for (let i362 = 1; i362 < 4; i362++) {
    arr.push(i362 * 0.1);
}
Math.min.apply(Math, arr);
Math.max.apply(Math, arr);
var arr = Array(4);
for (let i382 = 0; i382 < 4; i382++) {
    arr[i382] = i382 * 0.1;
}
Math.min.apply(Math, arr);
Math.max.apply(Math, arr);
arr[5] = 0.5;
Math.min.apply(Math, arr);
Math.max.apply(Math, arr);
const v403 = new Array(0);
var primes = v403;
function isPrime(a406) {
    for (let i408 = 0; i408 < primes.length; i408++) {
        var p = primes[i408];
        if ((a406 % p) == 0) {
            return false;
        }
        if ((p * p) > a406) {
            return true;
        }
    }
    return true;
}
for (let i425 = 2; i425 < 10000; i425++) {
    if (isPrime(i425)) {
        primes.push(i425);
    }
}
primes.length;
var same_primes = Array.prototype.constructor.apply(Array, primes);
for (let i440 = 0; i440 < primes.length; i440++) {
    primes[i440];
    same_primes[i440];
    "prime" + primes[i440];
}
primes.length;
same_primes.length;
const t177 = Array.prototype;
t177["1"] = "sep";
const v458 = new Array(3);
var holey = v458;
holey[0] = "mor";
holey[2] = "er";
String.prototype.concat.apply("", holey);
String.prototype.concat.apply("", holey, 1);
String.prototype.concat.apply("", holey, 1, 2);
String.prototype.concat.apply("", holey, 1, 2, 3);
String.prototype.concat.apply("", holey, 1, 2, 3, 4);
primes[0] = "";
primes[1] = holey;
const v507 = String.prototype.concat;
String.prototype.concat.apply.apply(v507, primes);
const t193 = Array.prototype;
delete t193["1"];
f0.apply(this, {});
f0.apply(this, { length: 1 });
void 0;
f1.apply(this, { length: 1 });
void 0;
f1.apply(this, { 0: "foo" });
f1.apply(this, { length: 1, 0: "foo" });
