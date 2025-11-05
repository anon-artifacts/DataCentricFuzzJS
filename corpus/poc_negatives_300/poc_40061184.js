function sleep(miliseconds) {
  var currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {}
}

function a(f){
  let c = [1.1,2.2,,4.4];
  let aaa = Math.log(2);
  if(f) c[0] = {};
  return c;
}

for(let i=0;i<4516;i++) a(false);
a(false);

a(true);

sleep(1000);

let ccc = a(false);
console.log(ccc[3]);
