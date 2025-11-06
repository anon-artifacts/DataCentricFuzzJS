const v11 = {
    _y: "x.y",
    get y() {
        print("getting x.y");
        return this._y;
    },
    set y(a7) {
        print("setting x.y");
        this._y = a7;
    },
};
var x = v11;
print(x.y);
x.y = "new x.y";
function f() {
    const v27 = {
        _y: "local x.y",
        get y() {
            print("getting local x.y");
            return this._y;
        },
        set y(a24) {
            print("setting local x.y");
            this._y = a24;
        },
    };
    var x = v27;
    print(x.y);
    x.y = "new local x.y";
    const v48 = {
        _y: "nested x.y",
        get y() {
            function fget(a35) {
                print("getting nested x.y");
                return a35._y;
            }
            return fget(this);
        },
        set y(a41) {
            function fset(a43, a44) {
                print("setting nested x.y");
                a43._y = a44;
            }
            fset(this, a41);
        },
    };
    var nested_x = v48;
    print(nested_x.y);
    nested_x.y = "new nested x.y";
    print(nested_x.y);
    print(x.y);
}
f();
print(x.y);
