function write(a1) {
    print(a1 + "");
}
var _myEval = eval;
var scenario = [["Assign to Eval","eval = 1;"],["Post ++   Eval","eval++;"],["Post --   Eval","eval--;"],["Pre  ++   Eval","++eval;"],["Pre  --   Eval","--eval;"]];
var count = 0;
function test1() {
    write("Changing eval...");
    for (let i31 = 0; i31 < scenario.length; ++i31) {
        try {
            _myEval(scenario[i31][1]);
        } catch(e40) {
            write("Exception: " + scenario[i31][0]);
            continue;
        }
        write("Return: " + scenario[i31][0]);
    }
}
test1();
