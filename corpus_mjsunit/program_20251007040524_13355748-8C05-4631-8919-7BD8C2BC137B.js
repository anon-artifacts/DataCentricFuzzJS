var BUGNUMBER = 1135377;
var summary = "Implement RegExp unicode flag -- AdvanceStringIndex in global match and replace.";
print((BUGNUMBER + ": ") + summary);
("🐸🐹X🐺").match(/\uD83D|X|/gu);
["","","X","",""];
("🐸🐹X🐺").match(/\uDC38|X|/gu);
["","","X","",""];
("🐸🐹X🐺").match(/\uD83D\uDC38|X|/gu);
["🐸","","X","",""];
("🐸🐹X🐺").replace(/\uD83D|X|/gu, "");
("🐸🐹X🐺").replace(/\uDC38|X|/gu, "");
("🐸🐹X🐺").replace(/\uD83D\uDC38|X|/gu, "");
("🐸🐹X🐺").replace(/\uD83D|X|/gu, "x");
("🐸🐹X🐺").replace(/\uDC38|X|/gu, "x");
("🐸🐹X🐺").replace(/\uD83D\uDC38|X|/gu, "x");
("🐸🐹X🐺").split(/\uD83D|X|/u);
["🐸","🐹","🐺"];
("🐸🐹X🐺").split(/\uDC38|X|/u);
["🐸","🐹","🐺"];
("🐸🐹X🐺").split(/\uD83D\uDC38|X|/u);
["","🐹","🐺"];
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
