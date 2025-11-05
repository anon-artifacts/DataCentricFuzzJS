function opt() {  
    function aux(a, b, c) {  
        if (a == 4) {  
            c += b;  
        }  
        b << c;  
    }  
    for (let i = 0; i < 10; i++) {  
        aux(i, aux, i);  
    }  
    eval(["".concat()].join());  
}  
  
for (let i = 0; i < 1e4; i++) {  
    opt();  
}  