```javascript
function gcd(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter two integers (separated by space): ', (input) => {
    const numbers = input.split(' ').map(Number);
    console.log(`GCD of ${numbers[0]} and ${numbers[1]} is: ${gcd(numbers[0], numbers[1])}`);
    console.log(`LCM of ${numbers[0]} and ${numbers[1]} is: ${lcm(numbers[0], numbers[1])}`);
    readline.close();
});
```