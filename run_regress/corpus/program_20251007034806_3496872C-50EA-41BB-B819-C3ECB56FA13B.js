var re = /a(b)c/;
for (let i3 = 0; i3 < 10; i3++) {
    if (!re.exec("abc")) {
        print("huh?");
    }
    re.exec("abc");
}
const t7 = RegExp.prototype;
t7.test = 1;
for (let i21 = 0; i21 < 10; i21++) {
    if (!re.exec("abc")) {
        print("huh?");
    }
    re.exec("abc");
}
