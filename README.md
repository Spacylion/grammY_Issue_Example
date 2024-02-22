# Grammy Framework TypeScript Compilation Issue

## Description

This repository serves as a demonstration of an issue encountered when compiling TypeScript (TS) code to JavaScript (JS) using the Telegram Grammy framework. The problem arises with the incorrect behavior of imports in the generated JS files, despite following the documentation provided by the library.

## Problem

After compiling TS to JS, the imports in the generated JS files do not behave as expected, leading to errors related to module resolution or missing imports.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies (`npm install`).
3. Compile TypeScript to JavaScript (`npm run build`).
4. Start the application (`npm start`).

## Expected Behavior

The imports in the generated JS files should be correctly resolved and functional according to the specifications provided by the Telegram Grammy framework.

## Actual Behavior

The imports in the generated JS files do not behave as expected, leading to errors during runtime.

## Solution

To resolve the issue, modify the TypeScript compiler options in `tsconfig.json` and update npm scripts in `package.json` as follows:

```json
{
    "compilerOptions": {
        "forceConsistentCasingInFileNames": true,
        "newLine": "lf",
        "noFallthroughCasesInSwitch": true,
        "noImplicitReturns": true,
        "noUncheckedIndexedAccess": true,
        "noUnusedParameters": true,
        "strict": true,
        "module": "CommonJS", // instead of  "module": "ESNext", as described on https://grammy.dev/hosting/heroku#prerequisites
        "target": "ESNEXT",
        "moduleResolution": "node",
        "outDir": "./dist",
        "skipLibCheck": true
    }
}
```

## Steps to Apply the Solution
1. Modify the TypeScript compiler options in tsconfig.json as described above.
2. Update the npm scripts in package.json.
3. Run npm install to install any necessary dependencies.
4. Recompile the TypeScript code using npm run build.
5. Start the application using npm start.


## Contact

For further assistance or inquiries, feel free to reach out:
- Telegram: [@drdev](https://t.me/drdev)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
