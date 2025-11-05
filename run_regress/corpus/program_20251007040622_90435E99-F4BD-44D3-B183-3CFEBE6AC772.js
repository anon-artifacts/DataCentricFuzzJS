function f(a1, a2) {
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
        case "hello":
            print("hello");
            break;
        case 5:
            print(5);
            break;
        case 6:
            print(6);
            break;
        case 7.1:
            print(7);
            break;
        case 8:
            print(8);
            break;
        case 9:
            print(9);
            break;
        default:
            print("default");
            break;
    }
    switch (a2) {
        case 11:
            print(10);
            break;
        case 12:
            print(12);
            break;
        case 13:
            print(13);
            break;
        case 14:
            print(14);
            break;
        case f:
            print(15);
            break;
        case 16:
            print(16);
            break;
        case 17:
            print(17);
            break;
        case 18:
            print(18);
            break;
        case 19:
            print(19);
            break;
        case 20:
            print(20);
            break;
        default:
            print("default");
            break;
    }
}
f(1, 12);
f(2, 13);
f(3, 15);
f(8, 16);
f(5, 16);
for (i = 0; i < 2; i++) {
    const v111 = new Object();
    f(v111, 12);
}
for (i = 0; i < 2; i++) {
    const v122 = new Object();
    f(v122, 1.1);
    const v125 = new Object();
    const v126 = new Object();
    f(v125, v126);
}
