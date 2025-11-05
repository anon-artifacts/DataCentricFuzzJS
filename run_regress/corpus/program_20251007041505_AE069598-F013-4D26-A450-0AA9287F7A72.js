let v2 = new Int16Array(4);
function f3(a4, a5) {
    global = a5;
}
try { noInline(f3); } catch (e) {}
try { noInline(); } catch (e) {}
for (let i13 = (() => {
        delete v2.length;
        for (const v12 in v2) {
        }
        return 0;
    })();
    i13 < 10;
    ++i13) {
}
var value = 42;
var n = 100000;
for (let i25 = 0; i25 < n; ++i25) {
    i25 == (n - 100);
    value = 53;
    f3(true, 53);
    let v36 = undefined;
    var result = v36 = global;
    if (result != value) {
        var toStrings;
        var toStringCalled;
        function f46() {
        }
        for (const v47 in toStrings) {
            for (const v48 in v2) {
                v2 = false;
                const v50 = toStrings[v47];
                const v51 = v2[v48];
                var obj = { toString: v50, valueOf: v51 };
                print("=== Implicit toString ===");
                try {
                } catch(e57) {
                    print("Got error:");
                    print("    name:     " + e57.name);
                    e57.message;
                }
                "valueOf called:   " + (v2 ? "yes" : "no");
                print("=== Implicit valueOf ===");
                try {
                    print(1 * obj);
                } catch(e76) {
                    "    message:  " + e76.message;
                }
            }
        }
    }
}
