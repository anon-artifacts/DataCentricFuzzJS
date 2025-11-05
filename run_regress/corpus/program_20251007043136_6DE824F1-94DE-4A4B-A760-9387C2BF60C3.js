var patterns = ["[_]","[a, b, _]","[[_]]","[[], [{}, [_]]]","{x:_}","{x:y, z:_}","{0:_}","{_}","[..._]"];
for (const v11 of patterns) {
    var stmt = v11 + " = obj";
    if (stmt[0] == "{") {
        stmt = ("(" + stmt) + ")";
    }
    stmt += ";";
    Function(stmt);
    for (const v28 of ["eval","arguments"]) {
        var s = stmt.replace("_", v28);
        Function(s);
        const v33 = () => {
            const v35 = "'use strict'; " + s;
            let v36;
            try { v36 = Function(v35); } catch (e) {}
            return v36;
        };
        v33();
    }
}
