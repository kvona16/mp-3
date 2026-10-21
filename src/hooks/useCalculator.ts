import { useState } from 'react';

export function power(base: number, exponent: number): number {
    if (exponent === 0) return 1;

    let result = 1;
    const absExponent = exponent < 0 ? -exponent : exponent;

    for (let i = 0; i < absExponent; i++) {
        result *= base;
    }

    return exponent < 0 ? 1 / result : result;
}

export function useCalculator() {
    const [firstNumber, setFirstNumber] = useState<string>('');
    const [secondNumber, setSecondNumber] = useState<string>('');
    const [output, setOutput] = useState<string>('');

    const calculate = (operator: string) => {
        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);

        const isNum1Invalid = num1 !== num1 || firstNumber.trim() === '';
        const isNum2Invalid = num2 !== num2 || secondNumber.trim() === '';

        if (isNum1Invalid || isNum2Invalid) {
            setOutput('NaN');
            return;
        }

        const operations: { [key: string]: (a: number, b: number) => string } = {
            '+': (a, b) => String(a + b),
            '-': (a, b) => String(a - b),
            '*': (a, b) => String(a * b),
            '/': (a, b) => (b !== 0 ? String(a / b) : 'Error'),
            '**': (a, b) => String(power(a, b)),
        };

        const executeOperation = operations[operator];
        if (executeOperation) {
            setOutput(executeOperation(num1, num2));
        }
    };

    const clearFields = () => {
        setFirstNumber('');
        setSecondNumber('');
        setOutput('');
    };

    return {
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        output,
        calculate,
        clearFields,
    };
}