var kLegalPairs = [[0,"%00"],[1,"%01"],[127,"%7F"],[128,"%C2%80"],[129,"%C2%81"],[2047,"%DF%BF"],[2048,"%E0%A0%80"],[2049,"%E0%A0%81"],[55295,"%ED%9F%BF"],[65535,"%EF%BF%BF"]];
var kIllegalEncoded = ["%80","%BF","%80%BF","%80%BF%80","%C0%22","%DF","%EF%BF","%F7BFBF","%FE","%FF","%FE%FE%FF%FF","%C0%AF","%E0%9F%BF","%F0%8F%BF%BF","%C0%80","%E0%80%80"];
function run() {
    for (let i52 = 0; i52 < kLegalPairs.length; i52++) {
        var decoded = String.fromCharCode(kLegalPairs[i52][0]);
        var encoded = kLegalPairs[i52][1];
        decodeURI(encoded);
        encodeURI(decoded);
    }
    for (let i71 = 0; i71 < kIllegalEncoded.length; i71++) {
        var value = kIllegalEncoded[i71];
        var exception = false;
        try {
            decodeURI(value);
        } catch(e83) {
            exception = true;
        }
    }
}
run();
