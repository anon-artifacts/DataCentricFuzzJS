var onlySpace = String.fromCharCode(9, 10, 11, 12, 13, 32, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288, 65279);
onlySpace.trim();
(onlySpace + "aaaa").trim();
("aaaa" + onlySpace).trim();
((onlySpace + "aaaa") + onlySpace).trim();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
