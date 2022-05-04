const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("TDD a clase FizzbuzzService", () => {
    test("1) trick == score", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const trick1 = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(trick1.trick).toBe(1);
    });

    test("2) trick == FIZZ", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const trick3 = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(trick3.trick).toBe("FIZZ");
    });

    test("3) trick == BUZZ", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const trick5 = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(trick5.trick).toBe("BUZZ");
    });

    test("4) trick == FIZZBUZZ", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const trick35 = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(trick35.trick).toBe("FIZZBUZZ");
    });

    test("5) FIZZBUZZ by number", () => {
        const score1 = FizzbuzzService.applyValidationInNumber(15);
        const score2 = FizzbuzzService.applyValidationInNumber(3);
        const score3 = FizzbuzzService.applyValidationInNumber(5);
        const score4 = FizzbuzzService.applyValidationInNumber(1);

        expect(score1).toBe("FIZZBUZZ");
        expect(score2).toBe("FIZZ");
        expect(score3).toBe("BUZZ");
        expect(score4).toBe(1);
    });
});