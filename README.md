<p align="center">
    <a href="https://github.com/standard-config/tsconfig">
        <img
            src="https://github.com/standard-config/.github/blob/main/.github/assets/standard-config-tsconfig@3x.png?raw=true"
            width="500"
            alt=""
        />
    </a>
</p>

<h1 align="center">@standard&#8209;config/tsconfig</h1>

<p align="center">Strict config for modern TypeScript&nbsp;runtimes.</p>

<p align="center">
    <a href="https://npmx.dev/package/@standard-config/tsconfig"
        ><img
            src="https://img.shields.io/npm/v/%40standard-config%2Ftsconfig?style=flat-square"
            alt=""
    /></a>
    <a href="tsconfig.json"
        ><img
            src="https://img.shields.io/badge/TypeScript_6.0-baseline-success?style=flat-square"
            alt=""
    /></a>
</p>

<div>&nbsp;</div>

## Overview

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

## Related

- [**@standard-config/oxlint**](https://github.com/standard-config/oxlint)
- [**@standard-config/prettier**](https://github.com/standard-config/prettier)

## License

MIT © [Dom Porada](https://dom.engineering)
