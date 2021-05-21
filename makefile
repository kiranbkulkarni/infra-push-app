all: build-infra-push-app push-dev-test-website deploy-dev-test-website

# Build related
build-infra-push-app:
	docker build -f ./infra-push-app/dockerfile -t ghcr.io/infra-push/infra-push-app:latest ./infra-push-app

# Push related
push-dev-test-website:
	docker push ghcr.io/infra-push/infra-push-app:latest
	
# Deploy related
deploy-dev-test-website:
	helm install infra-push-app ./deploy/ -n infra-push-app --create-namespace

# Restart related
restart-dev-test-website:
	kubectl rollout restart deployment/infra-push-app --namespace infra-push-app