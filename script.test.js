const googleSearch = require("./script");
dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpicture.com"];
it("this is a test", () => {
  expect("hello").toBe("hello");
  googleSearch("testtest", dbMock);
});

it("is searching google ", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]);
  expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpicture.com"]);
});
