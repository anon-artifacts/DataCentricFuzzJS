{
    const v0 = () => {
        return "example.com";
    };
    let one = v0;
    const v3 = () => {
        return one();
    };
    let two = v3;
    two();
}
