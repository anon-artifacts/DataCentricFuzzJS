function NPList() {
}
const v2 = new Array();
NPList.prototype = v2;
const v3 = new NPList();
var list = v3;
list.push("a");
var cut = list.splice(0, 1);
cut[0];
cut.length;
list.length;
var desc = Object.getOwnPropertyDescriptor(list, "0");
"0" in list;
