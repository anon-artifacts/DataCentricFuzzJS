var array = [];
function f2() {
    array.length = 1;
    return "funky";
}
var funky = { toJSON: f2 };
for (let i8 = 0; i8 < 10; i8++) {
    array[i8] = i8;
}
array[0] = funky;
JSON.stringify(array);
array = [];
const v21 = {
    get value() {
        array.length = 1;
        return "funky";
    },
};
funky = v21;
for (let i23 = 0; i23 < 10; i23++) {
    array[i23] = i23;
}
array[3] = funky;
JSON.stringify(array);
array = [];
const v35 = {
    get value() {
        array.pop();
        return "funky";
    },
};
funky = v35;
for (let i37 = 0; i37 < 10; i37++) {
    array[i37] = i37;
}
array[3] = funky;
JSON.stringify(array);
array = [];
const v50 = {
    get value() {
        delete array[9];
        return "funky";
    },
};
funky = v50;
for (let i52 = 0; i52 < 10; i52++) {
    array[i52] = i52;
}
array[3] = funky;
JSON.stringify(array);
array = [];
const v65 = {
    get value() {
        delete array[6];
        return "funky";
    },
};
funky = v65;
for (let i67 = 0; i67 < 10; i67++) {
    array[i67] = i67;
}
array[3] = funky;
JSON.stringify(array);
array = [];
const v79 = {
    get value() {
        array[12] = 12;
        return "funky";
    },
};
funky = v79;
for (let i81 = 0; i81 < 10; i81++) {
    array[i81] = i81;
}
array[3] = funky;
JSON.stringify(array);
array = [];
const v93 = {
    get value() {
        array[10000000] = 12;
        return "funky";
    },
};
funky = v93;
for (let i95 = 0; i95 < 10; i95++) {
    array[i95] = i95;
}
array[3] = funky;
JSON.stringify(array);
