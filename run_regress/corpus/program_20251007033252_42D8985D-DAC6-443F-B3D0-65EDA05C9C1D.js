var BUGNUMBER = 514568;
var summary = "eval in all its myriad flavors";
print((BUGNUMBER + ": ") + summary);
var x = 17;
var ev = eval;
var xcode = (((((((((((((((((("'use strict';" + "var x = 4;") + "function actX(action)") + "{") + "  switch (action)") + "  {") + "    case 'get':") + "      return x;") + "    case 'set1':") + "      x = 9;") + "      return;") + "    case 'set2':") + "      x = 23;") + "      return;") + "    case 'delete':") + "      try { return eval('delete x'); }") + "      catch (e) { return e.name; }") + "  }") + "}") + "actX;";
var local0 = x;
var f = ev(xcode);
var inner1 = f("get");
var local1 = x;
x = 7;
var inner2 = f("get");
var local2 = x;
f("set1");
var inner3 = f("get");
var local3 = x;
var del = f("delete");
var inner4 = f("get");
var local4 = x;
f("set2");
var inner5 = f("get");
var local5 = x;
const v84 = {
    local0: local0,
    inner1: inner1,
    local1: local1,
    inner2: inner2,
    local2: local2,
    inner3: inner3,
    local3: local3,
    del: del,
    inner4: inner4,
    local4: local4,
    inner5: inner5,
    local5: local5,
};
var resultsX = v84;
resultsX.local0;
resultsX.inner1;
resultsX.local1;
resultsX.inner2;
resultsX.local2;
resultsX.inner3;
resultsX.local3;
resultsX.del;
resultsX.inner4;
resultsX.local4;
resultsX.inner5;
resultsX.local5;
var ycode = (((((((((((((((((("'use strict';" + "var y = 5;") + "function actY(action)") + "{") + "  switch (action)") + "  {") + "    case 'get':") + "      return y;") + "    case 'set1':") + "      y = 2;") + "      return;") + "    case 'set2':") + "      y = 71;") + "      return;") + "    case 'delete':") + "      try { return eval('delete y'); }") + "      catch (e) { return e.name; }") + "  }") + "}") + "actY;";
try {
    var local0 = y;
} catch(e152) {
    local0 = e152.name;
}
var f = ev(ycode);
var inner1 = f("get");
try {
    var local1 = y;
} catch(e161) {
    local1 = e161.name;
}
try {
    y = 8;
} catch(e165) {
    e165.name;
}
var inner2 = f("get");
try {
    var local2 = y;
} catch(e173) {
    local2 = e173.name;
}
f("set1");
var inner3 = f("get");
try {
    var local3 = y;
} catch(e182) {
    local3 = e182.name;
}
var del = f("delete");
try {
    var inner4 = f("get");
} catch(e190) {
    inner4 = e190.name;
}
try {
    var local4 = y;
} catch(e194) {
    local4 = e194.name;
}
f("set2");
try {
    var inner5 = f("get");
} catch(e201) {
    inner5 = e201.name;
}
try {
    var local5 = y;
} catch(e205) {
    local5 = e205.name;
}
const v207 = {
    local0: local0,
    inner1: inner1,
    local1: local1,
    inner2: inner2,
    local2: local2,
    inner3: inner3,
    local3: local3,
    del: del,
    inner4: inner4,
    local4: local4,
    inner5: inner5,
    local5: local5,
};
var resultsY = v207;
resultsY.local0;
resultsY.inner1;
resultsY.local1;
resultsY.inner2;
resultsY.local2;
resultsY.inner3;
resultsY.local3;
resultsY.del;
resultsY.inner4;
resultsY.local4;
resultsY.inner5;
resultsY.local5;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete!");
