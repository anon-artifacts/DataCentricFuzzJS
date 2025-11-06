function testsort(a1) {
    const v3 = new Array(a1);
    var numbers = v3;
    for (let i6 = 0; i6 < a1; i6++) {
        numbers[i6] = i6;
    }
    delete numbers[50];
    delete numbers[150];
    delete numbers[25000];
    delete numbers[a1 - 1];
    delete numbers[a1 - 2];
    delete numbers[30];
    delete numbers[2];
    delete numbers[1];
    delete numbers[0];
    numbers.sort();
}
testsort(100000);
