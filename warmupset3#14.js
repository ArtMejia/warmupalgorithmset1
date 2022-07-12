// Create a method that takes a string as its argument and returns the string in reversed order.

// Examples
// reverse("Hello World") ➞ "dlroW olleH"

// reverse("The quick brown fox.") ➞ ".xof nworb kciuq ehT"

// reverse("Edabit is really helpful!") ➞ "!lufpleh yllaer si tibadE"

function reverse(str) {
    let reversedString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
        }
    console.log(reversedString)
}

reverse("hello");