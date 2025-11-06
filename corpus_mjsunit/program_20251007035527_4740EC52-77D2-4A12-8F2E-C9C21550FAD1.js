var obj = {};
function strictNestedAssignShadowVar(a3) {
    'use strict';
    function inner() {
        var p = 12;
        function innermost() {
            p = 1776;
            return 12;
        }
        let v10;
        try { v10 = innermost(); } catch (e) {}
        return v10;
    }
    return arguments;
}
let v12;
try { v12 = strictNestedAssignShadowVar(); } catch (e) {}
const v13 = [];
try { arraysEqual(v12, v13); } catch (e) {}
let v18;
try { v18 = strictNestedAssignShadowVar(99); } catch (e) {}
const v20 = [99];
try { arraysEqual(v18, v20); } catch (e) {}
let v24;
try { v24 = strictNestedAssignShadowVar(""); } catch (e) {}
const v26 = [""];
try { arraysEqual(v24, v26); } catch (e) {}
let v29;
try { v29 = strictNestedAssignShadowVar(obj); } catch (e) {}
const v30 = [obj];
try { arraysEqual(v29, v30); } catch (e) {}
