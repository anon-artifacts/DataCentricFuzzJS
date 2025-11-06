function SingleLoop() {
    for (let i2 = 0; i2 < 2; i2++) {
        try {
            throw "The exception should have been caught.";
        } catch(e9) {
        }
        for (let i11 = 0; i11 < 1; i11++) {
        }
    }
}
function EmptyBody() {
    try {
    } catch(e18) {
    }
    var a = 0;
    while (1) {
        print("foo");
        if (a == 1) {
            break;
        }
        a++;
    }
}
function NestedLoops() {
    for (let i30 = 0; i30 < 2; i30++) {
        try {
        } catch(e36) {
        }
        var b = 0;
        while (1) {
            print("bar");
            if (b == 1) {
                break;
            }
            b++;
        }
    }
}
SingleLoop();
EmptyBody();
NestedLoops();
