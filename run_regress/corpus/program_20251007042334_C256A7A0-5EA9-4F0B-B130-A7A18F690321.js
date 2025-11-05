var cons_string = "aaaaaaaaaaaaaa";
new RegExp(cons_string);
function make_cons_string(a5) {
    return a5 + "aaaaaaaaaaaaaa";
}
make_cons_string("");
var cons_str = make_cons_string("");
new RegExp(cons_str);
