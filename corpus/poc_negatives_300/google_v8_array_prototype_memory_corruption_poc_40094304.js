var r2 = 0;
var v = 0; 
var v1;
var v3;
var v4; 
var v5;
var tmp;


function main() {

	f2();
	v[1000000] = "a"; // grow Array.prototype to large size 
        Array.prototype.fill(0); //fill up Array.prototype
	v3 = new Array(2000); // note that prototype is different now
	v4 = {};   // next time f is called, v4 will be an empty object
	v3.sort(f1); // will call f1 2000 times, which in turn calls f2

}

function f2(arg1, arg2, arg3) { 
	print("f2 " + r2 + " " + Array.prototype.length);
	%DebugTrace();
try{	print(v3[v.length-1]);}catch(e){}
	r2++; if( r2>5) return;
	// initially , get the Array.prototype and change it
	v = Array.prototype.fill(100);
	// make length non zero
	v.splice(Infinity,"a",5,v4); // infinity is bigger than array length
//      v.push(5,v4); // same effect as above, but splice seems to trigger the bug more consistently
}

function f1(arg1, arg2, arg3) { 
print(v3.length);
//it can either crash when removing an item and shifting v or when printing it in f
v.shift();
print("before regex");


//causes both memory and cpu pressure, laaaarge string that keeps json parser busy for a while
try { v5 = JSON.parse(
	""+ Array(1025).join(String.fromCharCode(29, 72)) 
	+ Array(4097).join(String.fromCharCode(65, 41)) 
	+ Array(65537).join(String.fromCharCode(106, 59, 71)) 
	+ Array(4097).join(String.fromCharCode(123, 2, 39)) 
	+ Array(4097).join(String.fromCharCode(126, 36)) 
	+ Array(1025).join(String.fromCharCode(67)) 
	+ Array(1025).join(String.fromCharCode(21, 100)) 
	+ Array(257).join(String.fromCharCode(82, 56, 119)) 
	+ Array(1025).join(String.fromCharCode(14, 99, 106)) 
); } catch(e) { }

print("before f2");
f2();

print("after f2");
}



main();

