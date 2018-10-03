const printHelloWorld = require("../dist/teronis-js-webpack-templates").printHelloWorld;

describe("printHelloWorld", function () {
    it("function should print hello world", (done) => {
        printHelloWorld();
        done();
    });
});