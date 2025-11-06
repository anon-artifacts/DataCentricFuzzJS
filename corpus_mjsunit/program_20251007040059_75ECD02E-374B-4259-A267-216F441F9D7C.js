var props = Object.getOwnPropertyNames(RegExp);
props.sort();
for (let i7 = 0, i8 = props.length; i7 < i8; i7++) {
    var prop = props[i7];
    if (prop === "prototype") {
        continue;
    }
    try {
        print(("Testing: delete RegExp[" + prop) + "]");
        var result = delete RegExp[prop];
        if (result === false) {
            print("Error: strict delete returned false");
        }
    } catch(e31) {
        if (!e31 instanceof TypeError) {
            print("Error: strict delete threw a non-TypeError: " + e31);
        }
    }
}
