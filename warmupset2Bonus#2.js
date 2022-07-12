// You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

// Examples
// minutesToSeconds("01:00") ➞ 60

// minutesToSeconds("13:56") ➞ 836

// minutesToSeconds("10:60") ➞ -1

function minutesToSeconds(time) {
	let [minutes, seconds] = time.split(":").map(Number);
	return seconds < 60 ? (minutes * 60) + seconds : false;
}

console.log(minutesToSeconds("5:42")); 