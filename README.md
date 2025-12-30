# book-puyopuyo-programming

A modern reimplementation of the Puyo Puyo Programming book examples using React, TypeScript, and Vite.

## About

This project recreates the game development tutorials from the "Puyo Puyo Programming" educational materials, rebuilt with a contemporary web development stack. The original book teaches programming concepts through building a Puyo Puyo puzzle game, and this repository provides the same learning experience using modern tools and best practices.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Biome (linting and formatting)

## Prerequisites

- Node.js 22 or higher
- pnpm 10 or higher

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

## Project Structure

```
src/           - Modern React implementation
ref/           - Reference code from the original Monaca-based book (stages 01-15)
```

## License

This repository contains code under multiple licenses:

**Reference Directory (`ref/`)**

Licensed under the "Puyo Puyo Programming" Terms of Use (`LICENSE_SEGA`). This directory contains code from the original Monaca-based materials. While each stage includes an MIT license file, all content is distributed under the SEGA terms.

**Source Code (`src/` and other files)**

Dual-licensed under Apache-2.0 (`LICENSE_APACHE_2_0`) and the "Puyo Puyo Programming" Terms of Use (`LICENSE_SEGA`). Original code written for this reimplementation is available under Apache-2.0, while game assets in the `www` directory remain under the SEGA terms.
