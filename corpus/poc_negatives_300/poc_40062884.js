var arr = [];
var obj0 = {a : 1};
obj0.a1 = 2;
obj0.c = {};

var obj = {a : 1};
obj.a1 = 2;
obj.c = arr;

var f1 = {a : 1};
f1.a1 = 1.1;
arr.push(f1);

for (i = 0; i < 1024 + 512; i++) {
  var tmp = {a : 1};
  tmp.a1 = 1;
  tmp['b' + i] = 2;
  arr.push(tmp);
}


function workerCode() {
  onmessage = function(data) {
    console.log("onmessage");
  }
}

worker = new Worker(workerCode, {type: 'function', arguments: []});
worker.postMessage([obj0, obj]);

worker.getMessage();
