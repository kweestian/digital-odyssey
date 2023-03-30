.PHONY: build-production
build-production: ## Build the production docker image.
	docker compose build


.PHONY: push-production
push-production: ## push the image to gitlab registry.
	docker compose push
