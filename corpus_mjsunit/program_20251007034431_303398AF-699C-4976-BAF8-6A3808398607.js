let regexp = /x/g;
regexp.lastIndex = -1;
regexp.test("axb");
regexp.lastIndex;
regexp.lastIndex = -1;
regexp.exec("axb")[0];
regexp.lastIndex;
