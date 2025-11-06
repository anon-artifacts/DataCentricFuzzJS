function constructor() {
    this.x = 0;
}
var deopt = { deopt: false };
function boogeyman(a7, a8) {
    const v9 = new constructor();
    var object = v9;
    if (a7) {
        object.x = 1;
    } else {
        object.x = 2;
    }
    deopt.deopt;
    object.x;
}
boogeyman(true, 1);
boogeyman(true, 1);
boogeyman(false, 2);
boogeyman(false, 2);
boogeyman(false, 2);
delete deopt.deopt;
boogeyman(false, 2);
