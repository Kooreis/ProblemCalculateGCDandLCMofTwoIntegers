Here is a TypeScript console application that calculates the GCD and LCM of two integers:

```typescript
class Calculator {
    gcd(a: number, b: number): number {
        if (b === 0) {
            return a;
        }
        return this.gcd(b, a % b);
    }

    lcm(a: number, b: number): number {
        return (a * b) / this.gcd(a, b);
    }
}

let calculator = new Calculator();
let a = 15;
let b = 20;

console.log(`The GCD of ${a} and ${b} is ${calculator.gcd(a, b)}`);
console.log(`The LCM of ${a} and ${b} is ${calculator.lcm(a, b)}`);
```

This application defines a `Calculator` class with two methods: `gcd` and `lcm`. The `gcd` method calculates the greatest common divisor of two numbers using the Euclidean algorithm, and the `lcm` method calculates the least common multiple of two numbers using the formula `lcm(a, b) = |a * b| / gcd(a, b)`. The application then creates an instance of the `Calculator` class and uses it to calculate and print the GCD and LCM of two numbers.