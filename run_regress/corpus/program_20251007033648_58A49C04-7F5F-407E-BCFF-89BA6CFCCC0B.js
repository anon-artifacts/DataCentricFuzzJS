try {
    throw "0";
} catch(e1) {
    e1 === "0" ? print("Pass") : print("Fail");
}
