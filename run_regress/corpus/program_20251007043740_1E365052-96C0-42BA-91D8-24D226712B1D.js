try {
    var longString = "A";
    for (let i3 = 0; i3 < 31; i3++) {
        longString += longString;
    }
    print(longString.toString());
} catch(e12) {
    print(e12.name);
    print(e12.message);
    print(e12.description);
    print(e12.number);
}
