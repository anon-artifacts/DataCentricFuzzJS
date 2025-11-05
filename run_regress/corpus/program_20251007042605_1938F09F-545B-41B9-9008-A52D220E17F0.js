var globalEval = eval;
globalEval("this; eval('42')");
globalEval("eval('42'); this");
