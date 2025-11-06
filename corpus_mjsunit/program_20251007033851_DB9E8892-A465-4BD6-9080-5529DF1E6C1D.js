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
f(5, 16);
for (i = 0; i < 15; i++) {
    const v99 = new Object();
    f(v99, 16);
}
function test() {
    var b = 1;
    for (i = 0; i < 1; i++) {
        switch (b++) {
            case 1:
                break;
            case 1:
                break;
            case 1:
                break;
            case 1:
                break;
            case 100:
                break;
            case 101:
                break;
            case 102:
                b = -2147483648;
                break;
        }
    }
}
test();
test();
