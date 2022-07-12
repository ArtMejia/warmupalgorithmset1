// Create a function that reverses a boolean value.

// Examples
// reverse(true) ➞ false

// reverse(false) ➞ true

function reverse(bool) {
    if (typeof bool === 'boolean') {
		return !bool
	} else {
		return 'boolean expected'
	}
}