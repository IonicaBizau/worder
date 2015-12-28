const tester = require("tester")
    , worder = require("../lib")
    ;

tester.describe("running the tests", test => {
    test.should("take the words from the text", () => {
        test.expect(worder("Hello World!")).toEqual(["Hello", "World"]);
        test.expect(worder("She doesn't like that!!")).toEqual(["She", "doesn", "t", "like", "that"]);
    });
});
