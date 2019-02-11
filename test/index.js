const tester = require("tester")
    , worder = require("../lib")
    ;

tester.describe("running the tests", test => {
    test.should("take the words from the text", () => {
        test.expect(worder("Hello World!")).toEqual(["Hello", "World"]);
        test.expect(worder("She doesn't like that!!")).toEqual(["She", "doesn", "t", "like", "that"]);
        test.expect(worder("Tôi là Duyệt")).toEqual(["Tôi", "là", "Duyệt"]);
        test.expect(worder("Grumpy wizards make toxic brew for the evil Queen and Jack.")).toEqual(["Grumpy", "wizards", "make", "toxic", "brew", "for", "the", "evil", "Queen", "and", "Jack"]);
        test.expect(worder("Mătușa lui Ioniță i-a dăruit lui Ștefan un câine.")).toEqual(["Mătușa", "lui", "Ioniță", "i", "a", "dăruit", "lui", "Ștefan", "un", "câine"]);
        test.expect(worder("Meu coração dança!")).toEqual(["Meu", "coração", "dança"]);
        test.expect(worder("Mi niños.")).toEqual(["Mi", "niños"]);
    });
});
