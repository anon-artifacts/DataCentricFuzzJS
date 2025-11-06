function fun() {
    const v4 = ("function pf" + fun) + "() {}";
    const v7 = new Function("function ff () { actual = '' + ff. caller; } function f () { ff (); } f ();");
    v7(v4);
}
fun();
