function palindrome(message) {
    // wirte your code here
    let reverseString = message.split('').reverse().join('')
    return message === reverseString
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true