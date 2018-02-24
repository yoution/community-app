#!/bin/bash

# This script creates Amazon CloudFront distributions (CDN) for development and
# production environments.

# Creates distribution.
create() {
  aws configure set aws_access_key_id $1
  aws configure set aws_secret_access_key $2
  aws configure set preview.cloudfront true
  aws cloudfront create-distribution --distribution-config file://$PWD/config/aws/$3
}

echo "Development public CDN distribution"
create $DEV_AWS_ACCESS_KEY_ID $DEV_AWS_SECRET_ACCESS_KEY cloudfront-public-distribution-dev.json

echo "Producton public CDN distribution"
create $PROD_AWS_ACCESS_KEY_ID $PROD_AWS_SECRET_ACCESS_KEY cloudfront-public-distribution-prod.json

