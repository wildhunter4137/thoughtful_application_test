# Package Sorting Solution

## Objective
This project implements a function to sort packages based on their volume and mass for Thoughtful’s robotic automation factory. The function determines the correct stack for each package according to specific criteria regarding its dimensions and weight.

## Problem Statement
A package is categorized based on the following rules:
- **Bulky**: A package is considered bulky if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³ or if any of its dimensions (width, height, length) is greater than or equal to 150 cm.
- **Heavy**: A package is considered heavy if its mass is greater than or equal to 20 kg.

### Stacks
Packages are dispatched to the following stacks:
- **STANDARD**: Packages that are neither bulky nor heavy.
- **SPECIAL**: Packages that are either heavy or bulky.
- **REJECTED**: Packages that are both heavy and bulky.

## Implementation
The core function `sort(width: number, height: number, length: number, mass: number): string` takes the dimensions and mass of a package and returns the appropriate stack name.

### Example Usage
```typescript
console.log(sort(100, 100, 100, 10)); // STANDARD
console.log(sort(150, 150, 150, 15)); // SPECIAL
console.log(sort(100, 100, 100, 25)); // SPECIAL
console.log(sort(200, 200, 200, 30)); // REJECTED
console.log(sort(50, 50, 50, 5)); // STANDARD
```

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/wildhunter4137/thoughtful_application_test.git
   ```
2. Navigate to the project directory:
   ```bash
   cd thoughtful_application_test
   ```

## Running the Code
To execute the TypeScript code, use the following command:
```bash
node main.ts
```

## Testing
You can add additional test cases to verify the functionality of the `sort` function. Ensure that all edge cases are covered.

## Contribution
Feel free to fork the repository and submit pull requests for any improvements or additional features.

## License
This project is licensed under the MIT License.