function showNumber(n) {
    // if (n === 0) {
    //     return;
    // }
    if (n === 0) return; // Base Case (condition for end the loop)
    console.log(n)
    return showNumber(n-1);
}

showNumber(10);