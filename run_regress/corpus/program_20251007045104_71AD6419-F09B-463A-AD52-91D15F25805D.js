function equalInt() {
    var i1 = 55;
    var one = 1;
    var zero = 0;
    var undef;
    var o1 = {};
    var o2 = {};
    var s = "5";
    var hits = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (let i36 = 0; i36 < 5000; i36++) {
        if (i1 == 55) {
            let v44 = hits[0];
            v44++;
        }
        if (i1 != 56) {
            let v48 = hits[1];
            v48++;
        }
        if (i1 < 56) {
            let v52 = hits[2];
            v52++;
        }
        if (i1 > 50) {
            let v56 = hits[3];
            v56++;
        }
        if (i1 <= 60) {
            let v60 = hits[4];
            v60++;
        }
        if (i1 >= 30) {
            let v64 = hits[5];
            v64++;
        }
        if (i1 == 7) {
            let v68 = hits[6];
            v68++;
        }
        if (i1 != 55) {
            let v72 = hits[7];
            v72++;
        }
        if (i1 < 30) {
            let v76 = hits[8];
            v76++;
        }
        if (i1 > 90) {
            let v80 = hits[9];
            v80++;
        }
        if (i1 <= 40) {
            let v84 = hits[10];
            v84++;
        }
        if (i1 >= 70) {
            let v88 = hits[11];
            v88++;
        }
        if (o1 == o2) {
            let v91 = hits[12];
            v91++;
        }
        if (o2 != null) {
            let v95 = hits[13];
            v95++;
        }
        if (s < 10) {
            let v99 = hits[14];
            v99++;
        }
        if (true < zero) {
            let v103 = hits[15];
            v103++;
        }
        if (undef > one) {
            let v106 = hits[16];
            v106++;
        }
        if (undef < zero) {
            let v109 = hits[17];
            v109++;
        }
    }
    return hits.toString();
}
equalInt();
