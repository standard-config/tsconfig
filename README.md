# @standard-config/tsconfig

Strict TypeScript config for modern projects. Designed around `node`’s type stripping and tuned for `noEmit` checks.

## Install

```sh
npm install --save-dev @standard-config/tsconfig
```

```sh
pnpm add --save-dev @standard-config/tsconfig
```

## Usage

Reference [`@standard-config/tsconfig`](tsconfig.json) in your `tsconfig.json`.

```json
{
	"extends": "@standard-config/tsconfig",
	"include": ["**/*"],
	"exclude": ["node_modules"]
}
```

For projects with a compilation step, use [`@standard-config/tsconfig/bundler`](tsconfig.bundler.json) instead.

```json
{
	"extends": "@standard-config/tsconfig/bundler"
}
```
