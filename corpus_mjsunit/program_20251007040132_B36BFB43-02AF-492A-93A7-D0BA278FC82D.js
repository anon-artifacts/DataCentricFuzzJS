var global = {};
const v3 = { name: "foo" };
var fish = [v3,{ name: "bar" }];
for (let i9 = 0; i9 < fish?.length; i9++) {
    global[fish?.[i9]?.name] = 1;
}
function load() {
    var sum = 0;
    for (let i22 = 0; i22 < fish?.length; i22++) {
        var name = fish?.[i22]?.name;
        sum += global?.[name];
    }
    return sum;
}
try { load(); } catch (e) {}
try { load(); } catch (e) {}
try { load(); } catch (e) {}
try { load(); } catch (e) {}
function store() {
    for (let i38 = 0; i38 < fish?.length; i38++) {
        var name = fish?.[i38]?.name;
        global[name] = 1;
    }
}
try { store(); } catch (e) {}
try { store(); } catch (e) {}
try { store(); } catch (e) {}
try { store(); } catch (e) {}
function store_element(a53, a54) {
    a53[a54] = 0;
}
let v58;
try { v58 = new Array(3); } catch (e) {}
var o1 = v58;
let v61;
try { v61 = new Array(3); } catch (e) {}
var o2 = v61;
o2.o2 = "o2";
let v65;
try { v65 = new Array(3); } catch (e) {}
var o3 = v65;
o3.o3 = "o3";
let v69;
try { v69 = new Array(3); } catch (e) {}
var o4 = v69;
o4.o4 = "o4";
let v73;
try { v73 = new Array(3); } catch (e) {}
var o5 = v73;
o5.o5 = "o5";
try { store_element(o1, 0); } catch (e) {}
try { store_element(o1, 0); } catch (e) {}
try { store_element(o2, 0); } catch (e) {}
try { store_element(o3, 0); } catch (e) {}
try { store_element(o4, 0); } catch (e) {}
try { store_element(o5, 0); } catch (e) {}
function inferrable_store(a89) {
    try { store_element(o5, a89); } catch (e) {}
}
try { inferrable_store(0); } catch (e) {}
try { inferrable_store(0); } catch (e) {}
try { inferrable_store(0); } catch (e) {}
try { inferrable_store(); } catch (e) {}
try { inferrable_store("deopt"); } catch (e) {}
let v101;
try { v101 = isTurboFanned(inferrable_store); } catch (e) {}
if (!v101) {
    try { inferrable_store(); } catch (e) {}
}
