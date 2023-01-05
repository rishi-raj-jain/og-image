# Deploy OG Image Generator to Edgio

A serverless service that generates dynamic Open Graph images that you can use for generating awesome previews.

## Demo

https://layer0-docs-og-image-default.layer0-limelight.link/api?title=Routing

## Try It Now

[![Deploy with Edgio](https://docs.edg.io/button.svg)](https://app.layer0.co/deploy?repo=https://github.com/edgio-docs/og-image)

## Getting Started

### Clone This Repo

Use `git clone https://github.com/edgio-docs/og-image.git` to get the files within this repository onto your local machine.

### Install dependencies

On the command line, in the project root directory, run the following command:

```bash
npm install
```

### Run the Next.js app locally on Edgio

Run the Next.js app with the command:

```bash
npm run layer0:dev
```

Load the site: http://127.0.0.1:3000

### Testing production build locally with Edgio

You can do a production build of your app and test it locally using:

```bash
npm run layer0:build && npm run layer0:production
```

Setting --production runs your app exactly as it will be uploaded to the Edgio cloud using serverless-offline.

## Deploying to Edgio

Deploying requires an account on Edgio. [Sign up here for free](https://app.layer0.co/signup). Once you have an account, you can deploy to Edgio by running the following in the root folder of your project:

```bash
npm run layer0:deploy
```

See [deploying](https://docs.edg.io/guides/deploying) for more information.

## Author

- Rishi Raj Jain ([@rishi_raj_jain_](https://twitter.com/rishi_raj_jain_))

