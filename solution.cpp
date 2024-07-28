```C++
#include <iostream>

int gcd(int a, int b) {
    if (b == 0)
        return a;
    return gcd(b, a % b);
}

int lcm(int a, int b) {
    return (a / gcd(a, b)) * b;
}

int main() {
    int num1, num2;
    std::cout << "Enter two integers: ";
    std::cin >> num1 >> num2;
    std::cout << "GCD: " << gcd(num1, num2) << std::endl;
    std::cout << "LCM: " << lcm(num1, num2) << std::endl;
    return 0;
}
```