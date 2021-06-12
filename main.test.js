"use strict";
const check = require("./main");

/**
 * @param {string} string
 * @param {(number || string)} numberOrString
 * @param {bigint} [bigInteger] //optional
 * @return {boolean}
 */
const example = (string, numberOrString, bigInteger) => {
    try {
        let t_bigInt; // default typeof = "undefined"
        const t_string = check({types: "string", data: string});
        const t_numberOrString = check({types: ["number", "string"], data: numberOrString});
        if(typeof t_string === "object") throw t_string.error;
        if(typeof t_numberOrString === "object") throw t_numberOrString.error;
        if (bigInteger) { // = if (typeof bigInteger !== "undefined")
            t_bigInt = check({types: "bigint", data: bigInteger});
            if (typeof t_bigInt === "object") throw t_bigInt.error;
        }

        return true;
    } catch (err) {
        if(err) {
            return false;
        }
    }
};

test('correct types', () => {
    const result1 = example("test",1); // (correct, correct)
    const result2 = example("test","1"); // (correct, correct)
    const result3 = example("test","1", 1n); // (correct, correct, correct)
    expect(result1).toEqual(true);
    expect(result2).toEqual(true);
    expect(result3).toEqual(true);
});
test('incorrect types', () => {
    const result1 = example({},1); // (incorrect, correct)
    const result2 = example(1,"test", 1n); // (incorrect, correct, correct)
    const result3 = example("test","0", 1); // (correct, correct, incorrect)
    expect(result1).toEqual(false);
    expect(result2).toEqual(false);
    expect(result3).toEqual(false);
})