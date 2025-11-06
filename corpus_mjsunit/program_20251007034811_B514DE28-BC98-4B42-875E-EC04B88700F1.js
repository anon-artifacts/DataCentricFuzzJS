function f(a1, a2, a3) {
    switch (a1) {
        case 1:
            print(1);
            break;
        case 2:
            print(2);
            break;
        case 3:
            print(3);
            break;
        case 4:
            print(4);
            break;
        default:
            print("default-x");
            break;
    }
    switch (a2) {
        case 1:
            print(1);
            break;
        case 2:
            print(2);
            break;
        case 3:
            print(3);
            break;
        case 4:
            print(4);
            break;
        default:
            print("default-y");
            break;
    }
    switch (a3) {
        case 1:
            print(1);
            break;
        default:
            print("default-z");
            break;
    }
}
const v52 = new Object();
f(1, 2, v52);
f(1, 2, 3);
f(1, 2, 3);
f(1, 2, 3);
f(1, 2, 3);
for (i = 0; i < 30; i++) {
    const v78 = new Object();
    f(1, v78, 3);
    const v81 = new Object();
    const v82 = new Object();
    f(v81, v82, 3);
}
