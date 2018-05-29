# Newline after if condition (newline-after-if-condition)



## Rule Details

This rule enforces line breaks after if condition

Examples of **incorrect** code for this rule:

```js

if(true) console.log('if');
if(true) { console.log('if') }

if(true) console.log('if');
else console.log('else');

if(true)

	console.log('if');

```

Examples of **correct** code for this rule:

```js

if(true)
	console.log('if');

if(true) {
	console.log('if');
}

if(true) {

	console.log('if');
}

if(true)
	console.log('if');
else console.log('else');

if(true)
	console.log('if');
else 
	console.log('else');

```

## When Not To Use It

When you don't want to enforce newline after if condition
