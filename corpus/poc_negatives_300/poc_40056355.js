function main() {
function test(v9,v10) {

  const v14 = async (v15,v16,v17) => {  
      function v19() {  
          JSON.stringify(this);  
          v17(test);  
      }  
      Object.defineProperty(v17,v16,v10);  
      new Promise(v19);  
  }  

  function v29() {  
      v9.__proto__.__proto__ = new Proxy(test,{get: v14})  
  }  
  v29()  

}
test(isFinite,{});
undefined_function();
}
main();