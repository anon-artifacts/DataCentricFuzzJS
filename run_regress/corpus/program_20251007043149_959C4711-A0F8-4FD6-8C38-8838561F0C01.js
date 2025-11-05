console.log("This will test string.replace with function replacer.");
("ABC").replace("B", "$$");
function f8() {
    return "$$";
}
("ABC").replace("B", f8);
function f13() {
    return "$$$";
}
("ABC").replace("B", f13);
function f18() {
    return "$$$$";
}
("ABC").replace("B", f18);
function f23() {
    return "$1";
}
("ABC").replace("B", f23);
function f28() {
    return "$2";
}
("ABC").replace("B", f28);
("John Doe").replace(/(\w+)\s(\w+)/, "$2 $1");
const v36 = /(\w+)\s(\w+)/;
function f37() {
    return "$2 $1";
}
("John Doe").replace(v36, f37);
