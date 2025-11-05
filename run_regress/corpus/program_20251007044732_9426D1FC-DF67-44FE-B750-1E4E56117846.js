function DaysInYear(a1) {
    if ((a1 % 4) != 0) {
        return 365;
    }
    if (((a1 % 4) == 0) && ((a1 % 100) != 0)) {
        return 366;
    }
    if (((a1 % 100) == 0) && ((a1 % 400) != 0)) {
        return 365;
    }
    if ((a1 % 400) == 0) {
        return 366;
    }
}
DaysInYear(1999);
DaysInYear(2000);
