const v1 = new Array();
array1 = v1;
size = 10;
for (i = 0;
    i < size;
    (() => {
        let v11 = array1.length;
        v11++;
    })()) {
    array1.push(array1.shift());
    ++i;
}
