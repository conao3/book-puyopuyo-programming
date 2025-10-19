.PHONY: dev
dev:
	pnpm exec vite

.PHONY: build
build:
	pnpm exec vite build

.PHONY: preview
preview:
	pnpm exec vite preview

.PHONY: clean
clean:
	rm -rf dist node_modules
