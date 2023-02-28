import { concatenate } from "../index";

describe("Test concatenate", () => {
  it("Should return string1 + space + string2", () => {
    const string1 = "foo";
    const string2 = "bar";
    const result = concatenate(string1, string2);
    expect(result).toBe(`${string1} ${string2}`);
  });

  it("Should return string1 + space + string2 with trim", () => {
    const string1 = " foo";
    const string2 = "bar ";
    const result = concatenate(string1, string2);
    expect(result).toBe("foo bar");
  });

  it("Should return string1 + space + string2 with trim", () => {
    const string1 = "foo ";
    const string2 = " bar";
    const result = concatenate(string1, string2);
    expect(result).toBe("foo bar");
  });

  it("Should return string1 if string2 is empty", () => {
    const string1 = "foo";
    const string2 = "";
    const result = concatenate(string1, string2);
    expect(result).toBe("foo");
  });

  it("Should return string1 if string2 is empty", () => {
    const string1 = "";
    const string2 = "bar";
    const result = concatenate(string1, string2);
    expect(result).toBe("bar");
  });
});
