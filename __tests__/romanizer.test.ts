import romanizer from '../src/helpers/romanizer'

describe("Romanizer conversion tests", () => {
  test("should be return XXIII for the number 23", () => {
    expect(romanizer(23)).toBe("XXIII");
  });
  test("should be return CDXLIX for the number 449", () => {
    expect(romanizer(449)).toBe("CDXLIX");
  });
  test("should be return MMXXIII for the number 2023", () => {
    expect(romanizer(2023)).toBe("MMXXIII");
  });
});