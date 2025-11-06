var o;
const v4 = new Error("custom message");
var error1 = v4;
o = {};
o.__proto__ = error1;
Object.getOwnPropertyDescriptor(error1, "message").value;
o.message = "another message";
o.message;
error1.message;
var error2;
try {
    x.x;
} catch(e21) {
    error2 = e21;
}
o = {};
o.__proto__ = error2;
Object.getOwnPropertyDescriptor(error2, "message").value;
o.message = "another message";
o.message;
error2.message;
