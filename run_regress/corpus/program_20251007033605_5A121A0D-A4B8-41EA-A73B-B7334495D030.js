const t0 = Object.prototype;
t0.prop0 = 100;
function f3() {
    return 100;
}
const t5 = Object.prototype;
t5.method0 = f3;
function SimpleObject() {
}
function test1a(a8) {
    return a8.prop0;
}
const v10 = new SimpleObject();
print(test1a(v10));
const v14 = new SimpleObject();
print(test1a(v14));
const v17 = new SimpleObject();
print(test1a(v17));
print(test1a(1));
function test1b(a24) {
    return a24.method0();
}
const v26 = new SimpleObject();
print(test1b(v26));
const v29 = new SimpleObject();
print(test1b(v29));
const v32 = new SimpleObject();
print(test1b(v32));
print(test1b(1));
function test2a(a39) {
    return a39.prop0;
}
const v41 = new SimpleObject();
print(test2a(v41));
const v44 = new SimpleObject();
print(test2a(v44));
const v47 = new SimpleObject();
print(test2a(v47));
print(test2a(0.5));
function test2b(a54) {
    return a54.method0();
}
const v56 = new SimpleObject();
print(test2b(v56));
const v59 = new SimpleObject();
print(test2b(v59));
const v62 = new SimpleObject();
print(test2b(v62));
print(test2b(0.5));
function test3a(a69) {
    return a69.prop0;
}
const v71 = new SimpleObject();
print(test3a(v71));
const v74 = new SimpleObject();
print(test3a(v74));
const v77 = new SimpleObject();
print(test3a(v77));
print(test3a(Math.max(1518500249, -262144)));
function test3b(a88) {
    return a88.method0();
}
const v90 = new SimpleObject();
print(test3b(v90));
const v93 = new SimpleObject();
print(test3b(v93));
const v96 = new SimpleObject();
print(test3b(v96));
print(test3b(Math.max(1518500249, -262144)));
function test4a(a106) {
    return a106.prop0;
}
const v108 = new SimpleObject();
print(test4a(v108));
const v111 = new SimpleObject();
print(test4a(v111));
const v114 = new SimpleObject();
print(test4a(v114));
print(test4a(Math.max(0.5, -262144)));
function test4b(a124) {
    return a124.method0();
}
const v126 = new SimpleObject();
print(test4b(v126));
const v129 = new SimpleObject();
print(test4b(v129));
const v132 = new SimpleObject();
print(test4b(v132));
print(test4b(Math.max(0.5, -262144)));
