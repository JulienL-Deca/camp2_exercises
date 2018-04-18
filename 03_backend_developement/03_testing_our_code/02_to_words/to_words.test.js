const transformToWord = require("./to_words");

/*
what we would like to test
> toWords("azertyui.zer")
[ 'azertyui', 'zer' ]
> toWords("azerty?uiop")
[ 'azerty', 'uiop' ]
> toWords("azerty!uiop")
[ 'azerty', 'uiop' ]
> toWords("azerty,uiop")
[ 'azerty', 'uiop' ]
> toWords("azerty uiop")
[ 'azerty', 'uiop' ]
> toWords("azerty:uiop")
[ 'azerty', 'uiop' ]

.?!, :
*/
describe("test that '.?!, :' punctuations are filtered if used 1x", () => {
  test("split . ", function() {
    const result = transformToWord("azertyui.zer");
    expect(result).toEqual(["azertyui", "zer"]);
  });
  test("split ? ", function() {
    const result = transformToWord("azertyui?zer");
    expect(result).toEqual(["azertyui", "zer"]);
  });
  test("split ! ", function() {
    const result = transformToWord("azertyui!zer");
    expect(result).toEqual(["azertyui", "zer"]);
  });
  test("split , ", function() {
    const result = transformToWord("azertyui,zer");
    expect(result).toEqual(["azertyui", "zer"]);
  });
  test("split space ", function() {
    const result = transformToWord("azertyui zer");
    expect(result).toEqual(["azertyui", "zer"]);
  });
  test("split : ", function() {
    const result = transformToWord("azertyui:zer");
    expect(result).toEqual(["azertyui", "zer"]);
  });
})

describe("test that '.?!, :' punctuations are filtered if used 2x in a sentence", () => {
  test("split .+space ", function() {
    const result = transformToWord("azertyui. zer");
    expect(result).toEqual(["azertyui", "zer"]);
  });
  test("split ?+space ", function() {
    const result = transformToWord("azertyui? zer");
    expect(result).toEqual(["azertyui", "zer"]);
  });
  test("split !+space ", function() {
    const result = transformToWord("azertyui! zer");
    expect(result).toEqual(["azertyui", "zer"]);
  });
  test("split ,+space ", function() {
    const result = transformToWord("azertyui, zer");
    expect(result).toEqual(["azertyui", "zer"]);
  });
  test("split :+space ", function() {
    const result = transformToWord("azertyui: zer");
    expect(result).toEqual(["azertyui", "zer"]);
  });
})
describe("test other punctuations are filtered if used (ex: ; ( ) )", () => {
  test("split ; ", function() {
    const result = transformToWord("this test; works!");
    expect(result).toEqual(["this", "test", "works"]);
  });
  test("split ( or ) ", function() {
    const result = transformToWord("this test is (not) working!");
    expect(result).toEqual(["this", "test", "is", "not", "working"]);
  });
})
