import UNICODE_DATA_BLOCKS from "./blocks.js";

const { BLOCKS } = UNICODE_DATA_BLOCKS;
const NO_BLOCK = "No_Block";

/**
 * Use codepoints instead of characters if preferred
 * @private
 */
function codepointToChar(codepoinOrNot) {
  if (Number.isInteger(codepoinOrNot)) {
    return String.fromCodePoint(codepoinOrNot);
  } else {
    return codepoinOrNot;
  }
}

/**
 * Find proper stuff quickly in ordered array
 * @private
 */
function bsearch(codepoint) {
  let start = 0;
  let end = BLOCKS.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (codepoint >= BLOCKS[middle][0] && codepoint <= BLOCKS[middle][1]) {
      return BLOCKS[middle][2];
    }

    if (codepoint < BLOCKS[middle][0]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return NO_BLOCK;
}

/**
 * Returns the Unicode block of a single character
 *
 * @param {string|number} char Single character string or codepoint
 * @returns {string|undefined} Block name
 */
export function unicodeBlock(char) {
  char = codepointToChar(char);

  if ((typeof char !== "string" && !(char instanceof String)) || char === "") {
    return undefined;
  } else if ([...char][1]) {
    return undefined;
  }

  return bsearch(char.codePointAt(0));
}

/**
 * Returns a Set of all blocks used in the string
 *
 * @param {string} string Input string
 * @returns {Set} Set of block names
 */
export function unicodeBlocks(string) {
  const res = new Set();

  [...string].forEach((char) => {
    const blockName = unicodeBlock(char);
    res.add(blockName);
  });

  return new Set([...res].sort());
}

/**
 * Lists all Unicode blocks
 *
 * @returns {Set} All block names, including "No_Block"
 */
export function listUnicodeBlocks() {
  return new Set([...BLOCKS.map((blockInfo) => blockInfo[2]), NO_BLOCK]);
}

/**
 * Get block info (range start and end) of a Unicode block
 *
 * @param {string} string Block name
 * @returns {{block: string, first: number, last: number}} Object containing first and last codepoint of that block
 */

export function unicodeBlockInfo(blockName) {
  const block = BLOCKS.find((blockInfo) => {
    return blockInfo[2] === blockName;
  });

  return !block
    ? undefined
    : {
        block: block[2],
        first: block[0],
        last: block[1],
      };
}
