function main() {
for (let v5 = 0; v5 < 100; v5++) {
    for (let v7 = v5; v7 < 100; v7 = v7 + 3.0) {
        let v8 = 3664010540;
        const v10 = String.fromCharCode(v5,v8,v8,v7);
        function v12(v13,v14) {
            const v16 = Function(v10);
        }
        const v17 = new Promise(v12);
    }
}
}
%NeverOptimizeFunction(main);
main();