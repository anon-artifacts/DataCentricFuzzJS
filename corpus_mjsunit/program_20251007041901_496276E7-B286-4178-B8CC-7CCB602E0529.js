const t0 = Array.prototype;
t0[1] = "p1";
Array.prototype.fill();
Array[1] = Array();
Array[1].pop();
