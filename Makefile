.PHONY: dev
dev:
	pnpm exec vite

.PHONY: build
build:
	pnpm exec vite build

.PHONY: preview
preview:
	pnpm exec vite preview

.PHONY: format
format:
	pnpm exec biome format --write .

.PHONY: lint
lint:
	pnpm exec biome lint --write .

.PHONY: check
check:
	pnpm exec biome check .

.PHONY: clean
clean:
	rm -rf dist node_modules
