const v0 = /(?:)/g;
function f1() {
    return "";
}
("foo").replace(v0, f1);
("foo").replace(/(?:)/g, "");
