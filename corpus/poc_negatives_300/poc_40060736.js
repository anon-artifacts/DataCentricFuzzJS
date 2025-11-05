function f() {  
  try {  
    const buffer = new ArrayBuffer(42, {  
      "maxByteLength": 42  
    });  
    const view = new DataView(buffer, 0, 42);  
    // Resize the buffer to smaller than the view.  
    buffer.resize(1);  
    // Any access in the view should throw.  
    view.setInt8(11, 0xab);  
    console.log("Out-of-bound success?");  
    %DebugPrint(buffer);  
    %SystemBreak();  
  } catch(e) {  
    console.log(e);  
  }  
}  
  
while (true) {  
  f();  
}  