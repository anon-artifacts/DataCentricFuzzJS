function f0() {
    for (let i2 = 0; i2 < 64; ++i2) {
        var name;
        switch (this) {
            case 0:
                name = "firstAttr";
                break;
            case 1:
                name = "secondAttr";
            case 2:
                name = "thirdAttr";
                break;
        }
        switch (name) {
            case "firstAttr":
                break;
        }
    }
}
f0();
