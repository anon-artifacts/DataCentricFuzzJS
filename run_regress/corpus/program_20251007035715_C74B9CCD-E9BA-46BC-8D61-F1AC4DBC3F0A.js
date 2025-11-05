function checkArray(a1) {
    const v2 = (a3, a4) => {
        return { value: a3, index: a4 };
    };
    a1 = a1.map(v2);
    const v7 = (a8, a9) => {
        return a9.value <= a8.value;
    };
    a1 = a1.sort(v7);
    for (let i15 = 1; i15 < a1.length; i15++) {
        if (a1[i15].value < a1[i15 - 1].value) {
        }
        if ((a1[i15].value == a1[i15 - 1].value) && (a1[i15].index <= a1[i15 - 1].index)) {
        }
    }
}
checkArray([7,4,2,0,5,5,4,3,9]);
checkArray([1,0,1]);
