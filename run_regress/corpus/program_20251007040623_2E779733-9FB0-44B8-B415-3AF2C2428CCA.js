function write(a1) {
    print("" + a1);
}
function f6() {
    write("Inside toString");
    return "abc";
}
function f10() {
    write("Inside valueOf");
    return 10;
}
var o = { toString: f6, valueOf: f10 };
write("Scenario 1");
write(o == 10);
write(o == "abc");
write(10 == o);
write("abc" == o);
write("Scenario 2");
function f32() {
    write("Inside valueOf");
    return 1;
}
write((o = { valueOf: f32 }) == true);
write(o == false);
write(true == o);
write(false == o);
write("Scenario 3");
function f51() {
    write("Inside valueOf");
    return 0;
}
var o = { valueOf: f51 };
write(o == true);
write(o == false);
write(true == o);
write(false == o);
write("Scenario 4");
function f71() {
    write("Inside toString");
    return "1";
}
o = { toString: f71 };
write(o == true);
write(o == false);
write(true == o);
write(false == o);
write("Scenario 5");
function f90() {
    write("Inside toString");
    return "0";
}
o = { toString: f90 };
write(o == true);
write(o == false);
write(true == o);
write(false == o);
write("Scenario 6");
const v111 = new Date("Thu Aug 5 05:30:00 PDT 2010");
var dtBegin = v111;
var dtCurrentBegin = dtBegin.getTime();
write(dtCurrentBegin == dtBegin);
write(dtBegin == dtCurrentBegin);
