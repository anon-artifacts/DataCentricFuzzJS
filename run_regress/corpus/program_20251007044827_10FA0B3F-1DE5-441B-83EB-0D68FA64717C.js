function cmp_string_string(a1, a2) {
    return a1 === a2;
}
cmp_string_string("a", "a");
cmp_string_string("a", "b");
cmp_string_string("a", 1);
function cmp_string_string2(a17, a18) {
    return a17 === a18;
}
cmp_string_string2("a", 1.1);
cmp_string_string2("a", 2);
cmp_string_string2("a", {});
function cmp_string_string3(a33, a34) {
    return a33 !== a34;
}
cmp_string_string3("a", "a");
cmp_string_string3("a", "b");
cmp_string_string3("a", 1);
function cmp_string_string4(a49, a50) {
    return a49 !== a50;
}
cmp_string_string4("a", 1.1);
cmp_string_string4("a", 2);
cmp_string_string4("a", {});
