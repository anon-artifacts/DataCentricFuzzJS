var obj = { firstAttr: "value", secondAttr: "another value" };
function f4() {
    for (let i6 = 0; i6 < 12; ++i6) {
        var name;
        if (i6 < 4) {
            name = "firstAttr";
        } else {
            if (i6 < 8) {
                name = "secondAttr";
            } else {
                name = "firstAttr";
            }
        }
        var result = obj[name];
        switch (name) {
            case "firstAttr":
                break;
            case "secondAttr":
                break;
        }
    }
}
f4();
