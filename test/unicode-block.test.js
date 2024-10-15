import { describe, it, expect } from "vitest";
import {
  unicodeBlock,
  unicodeBlocks,
  unicodeBlockInfo,
  listUnicodeBlocks,
} from "../src/index.js";

describe("unicodeBlocks(string)", () => {
  it("will always return a Set", () => {
    expect(unicodeBlocks("")).toEqual(new Set());
    expect(unicodeBlocks("A")).toContain("Basic Latin");
  });

  it("will return all blocks that characters in the string belong to", () => {
    expect(unicodeBlocks("СC")).toEqual(new Set(["Basic Latin", "Cyrillic"]));
  });
});

describe("unicodeBlock(char)", () => {
  it("will return block for that character", () => {
    expect(unicodeBlock("�")).toEqual("Specials");
  });

  it("can be given an integer representing a codepoint", () => {
    expect(unicodeBlock(3891)).toEqual("Tibetan");
  });

  it("will return No_Block for characters not in any block", () => {
    expect(unicodeBlock("𐱐")).toEqual("No_Block");
  });

  it("will return undefined for strings that are not string length 1", () => {
    expect(unicodeBlock("")).toBe(undefined);
    expect(unicodeBlock("ab")).toBe(undefined);
  });
});

describe("listUnicodeBlocks()", () => {
  it("will return all block names, including No_Block", () => {
    expect(listUnicodeBlocks()).toContain("Khitan Small Script");
    expect(listUnicodeBlocks()).toContain("No_Block");
  });
});

describe("unicodeBlockInfo(blockName)", () => {
  it("will return codepoint range info of given block", () => {
    expect(unicodeBlockInfo("Latin-1 Supplement")).toEqual({
      block: "Latin-1 Supplement",
      first: 128,
      last: 255,
    });
  });

  it("will not work with No_Block or unknown block names", () => {
    expect(unicodeBlockInfo("Complicated Latin")).toBe(undefined);
    expect(unicodeBlockInfo("No_Block")).toBe(undefined);
  });
});
