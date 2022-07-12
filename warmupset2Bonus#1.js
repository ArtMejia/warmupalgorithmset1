// Create a function that takes an integer n and reverses it.

// Examples
// rev(5121) ➞ "1215"

// rev(69) ➞ "96"

// rev(-122157) ➞ "751221"

function rev(num) {
	return Math.abs(num).toString().split('').reverse('').join('');
}

console.log(rev(12345));