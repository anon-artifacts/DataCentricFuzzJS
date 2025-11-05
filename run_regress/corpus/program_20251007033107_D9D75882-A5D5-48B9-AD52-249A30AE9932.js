function compareIAndSet(a1) {
    var res = 0;
    var c;
    var i = 0;
    c = a1 > 1;
    res |= c << i;
    i++;
    c = a1 >= 2;
    res |= c << i;
    i++;
    c = a1 < 3;
    res |= c << i;
    i++;
    c = a1 <= 4;
    res |= c << i;
    i++;
    c = a1 == 5;
    res |= c << i;
    i++;
    c = a1 != 6;
    res |= c << i;
    i++;
    c = a1 === 7;
    res |= c << i;
    i++;
    c = a1 !== 8;
    res |= c << i;
    i++;
    return res;
}
function compareIAndBranch(a41) {
    var res = 0;
    var c = 1;
    var i = 0;
    if (a41 > 1) {
        res |= c << i;
    }
    i++;
    if (a41 >= 2) {
        res |= c << i;
    }
    i++;
    if (a41 < 3) {
        res |= c << i;
    }
    i++;
    if (a41 <= 4) {
        res |= c << i;
    }
    i++;
    if (a41 == 5) {
        res |= c << i;
    }
    i++;
    if (a41 != 6) {
        res |= c << i;
    }
    i++;
    if (a41 === 7) {
        res |= c << i;
    }
    i++;
    if (a41 !== 8) {
        res |= c << i;
    }
    i++;
    if (a41) {
        res |= c << i;
    }
    i++;
    return res;
}
function compareDAndSet(a83) {
    var res = 0;
    var c;
    var i = 0;
    c = a83 > 1.5;
    res |= c << i;
    i++;
    c = a83 >= 2.5;
    res |= c << i;
    i++;
    c = a83 < 3.5;
    res |= c << i;
    i++;
    c = a83 <= 4.5;
    res |= c << i;
    i++;
    c = a83 == 5.5;
    res |= c << i;
    i++;
    c = a83 != 6.5;
    res |= c << i;
    i++;
    c = a83 === 7.5;
    res |= c << i;
    i++;
    c = a83 !== 8.5;
    res |= c << i;
    i++;
    c = a83 !== 0;
    res |= c << i;
    i++;
    return res;
}
function compareDAndBranch(a127) {
    var res = 0;
    var c = 1;
    var i = 0;
    if (a127 > 1.5) {
        res |= c << i;
    }
    i++;
    if (a127 >= 2.5) {
        res |= c << i;
    }
    i++;
    if (a127 < 3.5) {
        res |= c << i;
    }
    i++;
    if (a127 <= 4.5) {
        res |= c << i;
    }
    i++;
    if (a127 == 5.5) {
        res |= c << i;
    }
    i++;
    if (a127 != 6.5) {
        res |= c << i;
    }
    i++;
    if (a127 === 7.5) {
        res |= c << i;
    }
    i++;
    if (a127 !== 8.5) {
        res |= c << i;
    }
    i++;
    if (a127) {
        res |= c << i;
    }
    i++;
    return res;
}
function compareSAndSet(a169) {
    var res = 0;
    var c;
    var i = 0;
    c = a169 > "a";
    res |= c << i;
    i++;
    c = a169 >= "b";
    res |= c << i;
    i++;
    c = a169 < "c";
    res |= c << i;
    i++;
    c = a169 <= "d";
    res |= c << i;
    i++;
    c = a169 == "e";
    res |= c << i;
    i++;
    c = a169 != "f";
    res |= c << i;
    i++;
    c = a169 === "g";
    res |= c << i;
    i++;
    c = a169 !== "h";
    res |= c << i;
    i++;
    return res;
}
function compareSAndBranch(a209) {
    var res = 0;
    var c = 1;
    var i = 0;
    if (a209 > "a") {
        res |= c << i;
    }
    i++;
    if (a209 >= "b") {
        res |= c << i;
    }
    i++;
    if (a209 < "c") {
        res |= c << i;
    }
    i++;
    if (a209 <= "d") {
        res |= c << i;
    }
    i++;
    if (a209 == "e") {
        res |= c << i;
    }
    i++;
    if (a209 != "f") {
        res |= c << i;
    }
    i++;
    if (a209 === "g") {
        res |= c << i;
    }
    i++;
    if (a209 !== "h") {
        res |= c << i;
    }
    i++;
    if (a209) {
        res |= c << i;
    }
    i++;
    return res;
}
var expected = [172,175,171,171,179,131,227,35,428,431,427,427,435,387,483,291,428,428,431,427,427,435,387,483,291,416,428,428,431,427,427,435,387,483,291,160,172,172,175,171,171,179,131,227,35,172,428,431,427,427,435,387,483,291,172];
let v308;
try { v308 = compareIAndSet(1); } catch (e) {}
let v310;
try { v310 = compareIAndSet(2); } catch (e) {}
let v312;
try { v312 = compareIAndSet(3); } catch (e) {}
let v314;
try { v314 = compareIAndSet(4); } catch (e) {}
let v316;
try { v316 = compareIAndSet(5); } catch (e) {}
let v318;
try { v318 = compareIAndSet(6); } catch (e) {}
let v320;
try { v320 = compareIAndSet(7); } catch (e) {}
let v322;
try { v322 = compareIAndSet(8); } catch (e) {}
let v324;
try { v324 = compareIAndBranch(1); } catch (e) {}
let v326;
try { v326 = compareIAndBranch(2); } catch (e) {}
let v328;
try { v328 = compareIAndBranch(3); } catch (e) {}
let v330;
try { v330 = compareIAndBranch(4); } catch (e) {}
let v332;
try { v332 = compareIAndBranch(5); } catch (e) {}
let v334;
try { v334 = compareIAndBranch(6); } catch (e) {}
let v336;
try { v336 = compareIAndBranch(7); } catch (e) {}
let v338;
try { v338 = compareIAndBranch(8); } catch (e) {}
let v340;
try { v340 = compareDAndSet(0.5); } catch (e) {}
let v342;
try { v342 = compareDAndSet(1.5); } catch (e) {}
let v344;
try { v344 = compareDAndSet(2.5); } catch (e) {}
let v346;
try { v346 = compareDAndSet(3.5); } catch (e) {}
let v348;
try { v348 = compareDAndSet(4.5); } catch (e) {}
let v350;
try { v350 = compareDAndSet(5.5); } catch (e) {}
let v352;
try { v352 = compareDAndSet(6.5); } catch (e) {}
let v354;
try { v354 = compareDAndSet(7.5); } catch (e) {}
let v356;
try { v356 = compareDAndSet(8.5); } catch (e) {}
let v358;
try { v358 = compareDAndSet(NaN); } catch (e) {}
let v360;
try { v360 = compareDAndBranch(0.5); } catch (e) {}
let v362;
try { v362 = compareDAndBranch(1.5); } catch (e) {}
let v364;
try { v364 = compareDAndBranch(2.5); } catch (e) {}
let v366;
try { v366 = compareDAndBranch(3.5); } catch (e) {}
let v368;
try { v368 = compareDAndBranch(4.5); } catch (e) {}
let v370;
try { v370 = compareDAndBranch(5.5); } catch (e) {}
let v372;
try { v372 = compareDAndBranch(6.5); } catch (e) {}
let v374;
try { v374 = compareDAndBranch(7.5); } catch (e) {}
let v376;
try { v376 = compareDAndBranch(8.5); } catch (e) {}
let v377;
try { v377 = compareDAndBranch(NaN); } catch (e) {}
let v379;
try { v379 = compareDAndBranch(0); } catch (e) {}
let v381;
try { v381 = compareSAndSet("a"); } catch (e) {}
let v383;
try { v383 = compareSAndSet("b"); } catch (e) {}
let v385;
try { v385 = compareSAndSet("c"); } catch (e) {}
let v387;
try { v387 = compareSAndSet("d"); } catch (e) {}
let v389;
try { v389 = compareSAndSet("e"); } catch (e) {}
let v391;
try { v391 = compareSAndSet("f"); } catch (e) {}
let v393;
try { v393 = compareSAndSet("g"); } catch (e) {}
let v395;
try { v395 = compareSAndSet("h"); } catch (e) {}
let v397;
try { v397 = compareSAndSet(""); } catch (e) {}
let v399;
try { v399 = compareSAndBranch("a"); } catch (e) {}
let v401;
try { v401 = compareSAndBranch("b"); } catch (e) {}
let v403;
try { v403 = compareSAndBranch("c"); } catch (e) {}
let v405;
try { v405 = compareSAndBranch("d"); } catch (e) {}
let v407;
try { v407 = compareSAndBranch("e"); } catch (e) {}
let v409;
try { v409 = compareSAndBranch("f"); } catch (e) {}
let v411;
try { v411 = compareSAndBranch("g"); } catch (e) {}
let v413;
try { v413 = compareSAndBranch("h"); } catch (e) {}
let v415;
try { v415 = compareSAndBranch(""); } catch (e) {}
var result = [v308,v310,v312,v314,v316,v318,v320,v322,v324,v326,v328,v330,v332,v334,v336,v338,v340,v342,v344,v346,v348,v350,v352,v354,v356,v358,v360,v362,v364,v366,v368,v370,v372,v374,v376,v377,v379,v381,v383,v385,v387,v389,v391,v393,v395,v397,v399,v401,v403,v405,v407,v409,v411,v413,v415];
try { arraysEqual(result, expected); } catch (e) {}
