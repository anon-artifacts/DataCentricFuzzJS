function bug673705() {
    var x;
    try {
        try {
        } catch(e3) {
        }
    } finally {
    }
    print(x);
    return x;
}
bug673705();
