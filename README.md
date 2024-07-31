# Question: How do you calculate the GCD (greatest common divisor) and LCM (least common multiple) of two integers? JavaScript Summary

The provided JavaScript code calculates the greatest common divisor (GCD) and least common multiple (LCM) of two integers. The GCD is calculated using a recursive function that implements the Euclidean algorithm. This function, named `gcd`, takes two arguments, `a` and `b`. If `b` is zero, it returns `a` as the GCD. Otherwise, it calls itself with `b` and the remainder of `a` divided by `b` as the new arguments. The LCM is calculated using a function named `lcm`, which takes two arguments, `a` and `b`, and returns the product of `a` and `b` divided by their GCD. The code uses the `readline` module to read two integers from the standard input. The integers are expected to be entered as a string separated by a space. The string is split into an array of strings, which is then mapped to an array of numbers. The GCD and LCM of the two numbers are then calculated and printed to the standard output.

---

# TypeScript Differences

The TypeScript version solves the problem in a similar way to the JavaScript version, but with a few key differences:

1. TypeScript uses static types: In the TypeScript version, the `gcd` and `lcm` methods are explicitly typed to take two numbers as arguments and return a number. This provides compile-time type checking, which can help catch errors before the code is run.

2. Use of classes: The TypeScript version uses a class `Calculator` to encapsulate the `gcd` and `lcm` methods. This provides a clear structure and organization to the code, and makes it easier to extend or reuse in the future.

3. Direct calculation: The TypeScript version directly calculates the GCD and LCM of two hardcoded numbers, whereas the JavaScript version takes user input from the console.

4. Use of `this`: In the TypeScript version, `this` keyword is used to call the `gcd` method inside the `lcm` method. This is because the methods are part of the `Calculator` class.

5. No use of external libraries: The TypeScript version does not use the `readline` library for console input/output, unlike the JavaScript version.

In terms of the actual calculation of the GCD and LCM, both versions use the same mathematical formulas and recursive approach. The differences are mainly in how the code is structured and how the input/output is handled.

---

# C++ Differences

Both the JavaScript and C++ versions solve the problem using the same mathematical approach. They both use the Euclidean algorithm to calculate the greatest common divisor (GCD) and then use the formula `lcm(a, b) = (a * b) / gcd(a, b)` to calculate the least common multiple (LCM).

The main differences between the two versions are due to the differences in the languages themselves:

1. Input/Output: In JavaScript, the readline module is used to handle input and output from the console. In C++, the iostream library is used for console input and output.

2. Type Checking: JavaScript is a dynamically typed language, so it automatically converts types as needed. In the JavaScript version, the input is initially a string, which is split into an array of strings, and then mapped to an array of numbers. In C++, which is statically typed, the input is directly read into integer variables.

3. Function Declaration: In JavaScript, functions are declared with the `function` keyword, while in C++, the return type of the function is declared before the function name.

4. LCM Calculation: In the JavaScript version, the LCM is calculated by first multiplying the two numbers and then dividing by the GCD. In the C++, the LCM is calculated by first dividing one of the numbers by the GCD and then multiplying by the other number. This is done to avoid potential integer overflow in C++.

5. Program Structure: The C++ version has a `main` function, which is the entry point of the program. JavaScript does not have a main function; instead, the code is executed from top to bottom.

---
