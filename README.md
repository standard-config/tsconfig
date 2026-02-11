[![](https://img.shields.io/npm/v/%40standard-config%2Ftsconfig)](https://www.npmjs.com/package/@standard-config/tsconfig)
[![](https://img.shields.io/badge/TypeScript_6-baseline-success)](tsconfig.json)

# @standard-config/tsconfig

Strict config for modern TypeScript runtimes. Designed around `node`’s type stripping and tuned for `noEmit` checks.

## Install

```sh
npm install --save-dev @standard-config/tsconfig
```

```sh
pnpm add --save-dev @standard-config/tsconfig
```

## Usage

Create your `tsconfig.json`:

```json
{
    "extends": "@standard-config/tsconfig",
    "include": [
        "**/*"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

### Bundlers

For projects that require a compilation step, use `@standard-config/tsconfig/bundler` instead. Being slightly more permissive, it’s the recommended base config for Next.js, Vite-based projects, and other React apps.

```json
{
    "extends": "@standard-config/tsconfig/bundler"
}
```

## License

MIT © [Dom Porada](https://dom.engineering)
