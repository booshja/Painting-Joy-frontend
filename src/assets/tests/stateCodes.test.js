import stateCodes from "../stateCodes";

describe("stateCodes", () => {
    it("gives the right number of codes in the array", () => {
        expect(stateCodes.length).toEqual(51);
    });
});
