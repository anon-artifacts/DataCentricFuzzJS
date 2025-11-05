function func0(v5) {  
	function func1(v6) {  
		v6.pop();  
	}  
  
	v5(func1, () => { });  
}  
  
func0.resolve = function (v7) {  
	return v7;  
};  
  
var v4 = {  
	then(v8, v9) {  
		v3 = v8;  
		v9('1');  
	}  
};  
  
Promise.allSettled.call(func0, [v4]);  
  
v3('1');  
