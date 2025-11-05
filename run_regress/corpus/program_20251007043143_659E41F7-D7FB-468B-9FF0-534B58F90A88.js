const v1 = new Error();
var noMessage = v1;
var withMessage = Error("I have a message for you...");
print("Error.prototype.name: " + Error.prototype.name);
print("Error.prototype.message: " + Error.prototype.message);
print("Error.prototype.toString(): " + Error.prototype.toString());
print("noMessage.name: " + noMessage.name);
print("noMessage.message: " + noMessage.message);
print("noMessage.toString(): " + noMessage.toString());
print("withMessage.name: " + withMessage.name);
print("withMessage.message: " + withMessage.message);
print("withMessage.toString(): " + withMessage.toString());
const t3 = Error.prototype;
t3.name = "TryNewName";
print("Changing Error.prototype.name to TryNewName...");
print("Error.prototype.name: " + Error.prototype.name);
print("withMessage.name: " + withMessage.name);
try {
    const t18 = RangeError.prototype;
    t18.message = "Range Error's prototype";
    throw RangeError.prototype;
} catch(e63) {
    print("Message: " + e63.message);
}
