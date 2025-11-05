function DateYear(a1) {
    var string = a1.getYear() + "";
    if (string.length < 4) {
        string = "" + ((string - 0) + 1900);
    }
    return string;
}
const v18 = new Date("Dec 25, 1995");
DateYear(v18);
const v22 = new Date("Dec 25, 2005");
DateYear(v22);
