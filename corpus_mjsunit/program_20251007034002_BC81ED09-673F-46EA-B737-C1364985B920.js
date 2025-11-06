try { gczeal(4); } catch (e) {}
var i = 29;
var status = "";
let v8;
try { v8 = new Array(); } catch (e) {}
var statusmessages = v8;
try { addThis(); } catch (e) {}
try { addThis(); } catch (e) {}
function addThis() {
    statusmessages[i] = status;
    return status;
}
