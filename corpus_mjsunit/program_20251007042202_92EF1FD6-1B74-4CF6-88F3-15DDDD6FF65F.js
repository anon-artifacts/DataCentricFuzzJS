typeof 0 == "zero";
typeof 0 != "zero";
(typeof 0 == "zero") && (typeof 0 == "zero");
(typeof 0 == "zero") && (typeof 0 != "zero");
(typeof 0 != "zero") && (typeof 0 == "zero");
(typeof 0 != "zero") && (typeof 0 != "zero");
(typeof 0 == "zero") || (typeof 0 == "zero");
(typeof 0 == "zero") || (typeof 0 != "zero");
(typeof 0 != "zero") || (typeof 0 == "zero");
(typeof 0 != "zero") || (typeof 0 != "zero");
function one() {
    return 1;
}
(typeof 0 == "zero") && (one() < 0);
(typeof 0 == "zero") && (one() > 0);
(typeof 0 != "zero") && (one() < 0);
(typeof 0 != "zero") && (one() > 0);
(typeof 0 == "zero") || (one() < 0);
(typeof 0 == "zero") || (one() > 0);
(typeof 0 != "zero") || (one() < 0);
(typeof 0 != "zero") || (one() > 0);
(one() < 0) && (typeof 0 == "zero");
(one() < 0) && (typeof 0 != "zero");
(one() > 0) && (typeof 0 == "zero");
(one() > 0) && (typeof 0 != "zero");
(one() < 0) || (typeof 0 == "zero");
(one() < 0) || (typeof 0 != "zero");
(one() > 0) || (typeof 0 == "zero");
(one() > 0) || (typeof 0 != "zero");
