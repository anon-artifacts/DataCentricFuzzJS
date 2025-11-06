var base = "azertyuiopqsdfghjklmwxcvbn";
function createRopedString() {
    var test = "";
    for (let i6 = 0; i6 < 2; i6++) {
        test += base;
    }
    return test;
}
createRopedString().substr(0, 10);
base.substr(0, 10);
createRopedString().substr(0, 26);
base.substr(0, 26);
createRopedString().substr(26, 10);
base.substr(0, 10);
createRopedString().substr(24, 10);
base.substr(24, 2) + base.substr(0, 8);
