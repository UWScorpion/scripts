

const isValid = (s) => {
    const dict = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    };
    const stk = [];
    for (let ch of s) {
        if (dict[ch] === undefined) {
            stk.push(ch);
        } else {
            if (dict[ch] === stk[stk.length - 1]){
                stk.pop();
            } else {
                return false;
            }
        }
    }
    return stk.length === 0;
}

// test case #1
const testcase1 = isValid("()") //  true;
const testcase2 = isValid("()[]{}") // true;
const testcase3 = isValid("(]") // false
const testcase4 = isValid("([])")// true
const testcase5 = isValid("([)]")// fasle

console.log(testcase1, testcase2, testcase3, testcase4, testcase5);