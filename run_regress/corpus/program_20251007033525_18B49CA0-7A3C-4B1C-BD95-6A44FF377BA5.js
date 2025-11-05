function f0() {
    return f0;
}
function f1() {
    return { 536870889: f0 };
}
f1();
f1();
f1();
