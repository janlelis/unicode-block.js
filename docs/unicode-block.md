## Functions

<dl>
<dt><a href="#unicodeBlock">unicodeBlock(char)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Returns the Unicode block of a single character</p>
</dd>
<dt><a href="#unicodeBlocks">unicodeBlocks(string)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns a Set of all blocks used in the string</p>
</dd>
<dt><a href="#listUnicodeBlocks">listUnicodeBlocks()</a> ⇒ <code>Set</code></dt>
<dd><p>Lists all Unicode blocks</p>
</dd>
<dt><a href="#unicodeBlockInfo">unicodeBlockInfo(string)</a> ⇒ <code>Object</code></dt>
<dd><p>Get block info (range start and end) of a Unicode block</p>
</dd>
</dl>

<a name="unicodeBlock"></a>

## unicodeBlock(char) ⇒ <code>string</code> \| <code>undefined</code>
Returns the Unicode block of a single character

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - Block name  

| Param | Type | Description |
| --- | --- | --- |
| char | <code>string</code> \| <code>number</code> | Single character string or codepoint |

<a name="unicodeBlocks"></a>

## unicodeBlocks(string) ⇒ <code>Set</code>
Returns a Set of all blocks used in the string

**Kind**: global function  
**Returns**: <code>Set</code> - Set of block names  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string |

<a name="listUnicodeBlocks"></a>

## listUnicodeBlocks() ⇒ <code>Set</code>
Lists all Unicode blocks

**Kind**: global function  
**Returns**: <code>Set</code> - All block names, including "No_Block"  
<a name="unicodeBlockInfo"></a>

## unicodeBlockInfo(string) ⇒ <code>Object</code>
Get block info (range start and end) of a Unicode block

**Kind**: global function  
**Returns**: <code>Object</code> - Object containing first and last codepoint of that block  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Block name |

