function AndBB(a1, a2) {
    return (a1 == 0) && (a2 == 0);
}
function AndBN(a9, a10) {
    return (a9 == 0) && a10;
}
function AndNB(a15, a16) {
    return a15 && (a16 == 0);
}
function AndNN(a21, a22) {
    return a21 && a22;
}
AndBB(0, 0);
AndBB(1, 0);
AndBB(0, 1);
AndBB(1, 1);
AndBN(0, 0);
AndBN(0, 1);
AndBN(1, 0);
AndBN(0, 1);
AndBN(0, 2);
AndBN(1, 1);
AndBN(1, 2);
AndNB(0, 0);
AndNB(1, 0);
AndNB(0, 1);
AndNB("", 1);
AndNB(1, 1);
AndNB(2, 0);
AndNN(0, 0);
AndNN(1, 0);
AndNN(2, 0);
AndNN(0, 1);
AndNN(0, 2);
AndNN(1, 1);
AndNN(3, 2);
