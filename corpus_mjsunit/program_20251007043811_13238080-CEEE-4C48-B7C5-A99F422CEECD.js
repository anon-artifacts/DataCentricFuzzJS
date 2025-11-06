var result;
const v2 = /x/;
function f3() {
    result = this;
}
("x").replace(v2, f3);
print(result === this);
