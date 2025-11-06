function f0(a1, a2) {
    function __() {
        this.constructor = a1;
    }
    __.prototype = a2.prototype;
    const v6 = new __();
    a1.prototype = v6;
}
var extend = f0;
function f9(a10) {
    function f11() {
        var self = this;
        a10.call(self);
        function f17() {
            return "Ford";
        }
        const v19 = { enumerable: true, configurable: true, get: f17 };
        Object.defineProperties(self, { make: v19 });
        function f22() {
            const v25 = new Error("Meant to be overriden");
            throw v25;
        }
        self.copy = f22;
        return self;
    }
    var Car = f11;
    extend(Car, a10);
    return Car;
}
var Car = f9(Object);
function f30(a31) {
    function f32(a33) {
        var self = this;
        a31.call(self);
        function f39() {
            return a33;
        }
        const v40 = { enumerable: true, configurable: true, get: f39 };
        Object.defineProperties(self, { make: v40 });
        function f43() {
        }
        self.copy = f43;
        return self;
    }
    var SuperCar = f32;
    extend(SuperCar, a31);
    return SuperCar;
}
var SuperCar = f30(Car);
const v49 = new Car();
v49.make;
const v53 = new SuperCar("Bugatti");
v53.make;
const v57 = new SuperCar("Lambo");
v57.make;
const v61 = new SuperCar("Shelby");
v61.make;
