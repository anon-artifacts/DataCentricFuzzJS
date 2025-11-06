function test(a1) {
    var result = null;
    let prefs = 0;
    let bundle = 1;
    if (!bundle) {
        let autodownload = false;
        try {
            autodownload = !(!autodownload);
        } catch(e13) {
        }
        if (autodownload) {
            let dnldMgr = 2;
            let defaultFolder = 3;
            try {
                result = 42;
            } catch(e19) {
                if (result == 12) {
                    let prompter = 4;
                    return;
                }
            }
            if (result) {
                return result;
            }
        }
    }
    var picker = 0;
    if (picker) {
        picker = 1;
    } else {
        try {
            picker = a1.MIMEInfo.primaryExtension;
        } catch(e29) {
        }
    }
    return result;
}
test({});
