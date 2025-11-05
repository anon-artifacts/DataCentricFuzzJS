function testCaseTypeMismatchBadness() {
    for (let i2 = 0; i2 < 3; ++i2) {
        const v10 = {};
        switch ("") {
            default:
            case 9:
                break;
            case "":
            case v10:
                break;
        }
    }
    return "no crash";
}
testCaseTypeMismatchBadness();
