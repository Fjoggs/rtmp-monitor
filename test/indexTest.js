import { addRandomShit } from "../src";
import expectExport from "expect";

describe("indexTest.js", () => {
  it("adds random numbers correctly", () => {
    expectExport(addRandomShit(1, 2)).toEqual(3);
  });
});
