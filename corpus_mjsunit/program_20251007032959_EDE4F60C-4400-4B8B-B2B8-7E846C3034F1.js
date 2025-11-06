function filter(a1) {
    return /^[a-z]$/.test(a1) || /^shadow_(let|const)$/.test(a1);
}
print("\n==== Basic let and const variables at global scope ====\n");
var a = "global var a";
b = "global undecl b";
let c = "global let c";
const d = "global const d";
function e() {
}
print("\nNaked references\n");
print(a);
print(b);
print(c);
print(d);
print(e);
print("\nthis. references\n");
print(this.a);
print(this.b);
print(this.c);
print(this.d);
print(this.e);
print("\nfor-in enumeration of this\n");
for (const v47 in this) {
    if (filter(v47)) {
        print((v47 + ": ") + this[v47]);
    }
}
