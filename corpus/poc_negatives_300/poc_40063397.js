function f0(a1, a2, a3, a4) {  
    try {  
        BigInt.asIntN(1, "aaa");  
    } catch (e0) {  
    }  
    function f1(a1, a2, a3, a4) {  
        try {  
            a2.f5();  
        } catch (e0) {  
        }  
    }  
    for (let v1 = 0; v1 < 100; v1++) {  
        f1(1, 1, 1,);  
    }  
}  
for (let v2 = 0; v2 < 100; v2++) {  
    f0(1, 1, 1, 1);  
}  
  
//d8 --turboshaft poc.js