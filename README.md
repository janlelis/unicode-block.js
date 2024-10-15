# unicode-block.js [![[ci]](https://github.com/janlelis/unicode-block.js/workflows/Test/badge.svg)](https://github.com/janlelis/unicode-block.js/actions?query=workflow%3ATest)

Each Unicode character belongs to a [block](https://en.wikipedia.org/wiki/Unicode_block). This JavaScript module returns all blocks associated with the given string.

Unicode version: **16.0.0** (September 2024)

## Install

Use npm or your favorite package manager to install this module:

```sh
npm install unicode-block
```

Or use ESM module directly from the browser.

## Usage

### `unicodeBlocks(string)` / `unicodeBlock(char)`

```js
import { unicodeBlocks } from "unicode-blocks";

// All blocks used in the given string
unicodeBlocks("Abc")   // Set(1) { 'Basic Latin' }
unicodeBlocks("СC")    // Set(2) { 'Cyrillic', 'Basic Latin' }
unicodeBlocks("⧉⪥⟤") // Set(3) { 'Miscellaneous Mathematical Symbols-A',
                       //          'Miscellaneous Mathematical Symbols-B',
                       //          'Supplemental Mathematical Operators' }
unicodeBlocks("🃉🂹")   // Set(1) { 'Playing Cards' }
unicodeBlocks("𐱐")     // Set(1) { 'No_Block' }

// Single character
import { unicodeBlock } from "unicode-blocks";
unicodeBlock("☼") // "Miscellaneous Symbols"
```

## Additional Utils

### List Names of All Blocks

```js
import { listUnicodeBlocks } from "unicode-blocks";
listUnicodeBlocks()
// Set(339) {
//   'Basic Latin',
//   'Latin-1 Supplement',
//   'Latin Extended-A',
//   'Latin Extended-B',
//   'IPA Extensions',
//   'Spacing Modifier Letters',
//   ...
```

### Get Range Data of a Specific Block

```js
import { unicodeBlockInfo } from "unicode-blocks";
unicodeBlockInfo("Symbols for Legacy Computing Supplement")
// {
//   block: 'Symbols for Legacy Computing Supplement',
//   first: 117760, // First codepoint of block
//   last: 118463 // Last codepoint of block
// }

```

## Also See

- Get the script of a character: [unicode-scripts.js](https://github.com/janlelis/unicode-scripts.js)
- Get the name of a character: [unicode-name.js](https://github.com/janlelis/unicode-name.js)

## MIT License

- Copyright (C) 2024 Jan Lelis <https://janlelis.com>. Released under the MIT license.
- Unicode data: https://www.unicode.org/copyright.html#Exhibit1
