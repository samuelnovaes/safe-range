# Safe Range

Generate safe range of numbers in JavaScript

# Install

## Browser

```html
<script src="https://unpkg.com/safe-range"></script>
<script>
	console.log(range(5)) //[0, 1, 2, 3, 4, 5]
	console.log(range(2, 5)) //[2, 3, 4, 5]
	console.log(range(2, 8, 2)) //[2, 4, 6, 8]
</script>
```

## NodeJS

`npm install safe-range`

```javascript
const range = require('safe-range')

console.log(range(5)) //[0, 1, 2, 3, 4, 5]
console.log(range(2, 5)) //[2, 3, 4, 5]
console.log(range(2, 8, 2)) //[2, 4, 6, 8]
```

# Why is it safe?

Example: `range(0, 1, 0.1)`

safe-range	| Other libraries
---			| ---
0			| 0
0.1			| 0.1
0.2			| 0.2
0.3			| 0.30000000000000004
0.4			| 0.4
0.5			| 0.5
0.6			| 0.6
0.7			| 0.7
0.8			| 0.7999999999999999
0.9			| 0.8999999999999999
1			| 0.9999999999999999