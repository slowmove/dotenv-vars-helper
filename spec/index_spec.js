const envHelper = require("../index");

describe("Environment Helper", () => {
  describe("isSet", () => {
    beforeAll(() => {
      process.env.trueBoolTest = true;
      process.env.falseBoolTest = false;
      process.env.trueTest = "true";
      process.env.falseTest = "false";
      process.env.stringTest = "hello hi";
    });
    it("should return boolean true if true as boolean", () => {
      expect(envHelper.isSet("trueBoolTest")).toBe(true);
    });
    it("should return boolean true if true as string", () => {
      expect(envHelper.isSet("trueTest")).toBe(true);
    });
    it("should return boolean false if false as boolean", () => {
      expect(envHelper.isSet("falseBoolTest")).toBe(false);
    });
    it("should return boolean false if false as string", () => {
      expect(envHelper.isSet("falseTest")).toBe(false);
    });
    it("should return boolean false if any other string", () => {
      expect(envHelper.isSet("stringTest")).toBe(false);
    });
  });

  describe("enabled", () => {
    beforeAll(() => {
      process.env.trueBoolTest = true;
      process.env.falseBoolTest = false;
      process.env.trueTest = "true";
      process.env.falseTest = "false";
      process.env.stringTest = "hello hi";
    });
    it("should return true if value is set and not false", () => {
      expect(envHelper.enabled("trueBoolTest")).toBe(true)
    });
    it("should return true if string value, not false string", () => {
      expect(envHelper.enabled("stringTest")).toBe(true);
    });
    it("should return false if value false as bool", () => {
      expect(envHelper.enabled("falseBoolTest")).toBe(false);
    });
    it("should return false if value false as string", () => {
      expect(envHelper.enabled("falseTest")).toBe(false);
    });
    it("should return false if value is non existend", () => {
      expect(envHelper.enabled("nonExistend")).toBe(false);
    });
    it("should not break if featureToggles is not set", () => {
      expect(envHelper.enabled("nonExistend")).toBe(false);
    });
  });

  describe("correctedType", () => {
    beforeAll(() => {
      process.env.numberTest = "763281";
      process.env.booleanTest = "true";
      process.env.trueTest = true;
      process.env.booleanTestFalse = "false";
      process.env.falseTest = false;
      process.env.smallInt = "1";
      process.env.stringTest = "hello hi";
    });
    it("should convert to number if numeric", () => {
      expect(envHelper.correctedType("numberTest")).toBe(763281);
    });
    it("should convert to boolean if true", () => {
      expect(envHelper.correctedType("booleanTest")).toBe(true);
    });
    it("should understand boolean true", () => {
      expect(envHelper.correctedType("trueTest")).toBe(true);
    });
    it("should convert to boolean if false", () => {
      expect(envHelper.correctedType("booleanTestFalse")).toBe(false);
    });
    it("should understand boolean false", () => {
      expect(envHelper.correctedType("falseTest")).toBe(false);
    });
    it("should not convert to boolean if smallint", () => {
      expect(envHelper.correctedType("smallInt")).toBe(1);
    });
    it("should result in string if nothing else is applicable", () => {
      expect(envHelper.correctedType("stringTest")).toBe("hello hi");
    });
  });
});
