# This is a repro of Payload SDK not working on Cloduflare Workers with SvelteKit

## Step 1 - install dependencies

```
pnpm i
```

## Step 2 - generate worker-configuration.d.ts

```
pnpm generate
```

## Step 3 - Set variables in wrangler.jsonc

Connect to any existing Payload CMS that have a publicly available globals

```
{
	"vars": {
		"PUBLIC_PAYLOAD_ORIGIN": <YOUR_PAYLOAD_ORIGIN>,
		"PUBLIC_SLUG": <YOUR_PUBLIC_GLOBALS>
	}
}

```

## Step 4 - Test with local development

Go to home page and expect the fetched data form Payload SDK to show on home page http://localhost:5173

```
pnpm dev
```

## Step 5 - Test with local built files

Go to home page and expect the fetched data form Payload SDK to show on home page http://localhost:4173

```
pnpm build
pnpm preview
```

## Step 6 - Test with production

```
wrangler deploy
```

Since we enabled Observability in wrangler.jsonc so we can see the error in the Cloudflare dashboard. And there will be error message like this complaining about illegal invocation

```
" [1;31m[500] GET /[0m TypeError: Illegal invocation: function called with incorrect `this` reference. See https://developers.cloudflare.com/workers/observability/errors/#illegal-invocation-errors for details. at PayloadSDK.request (_worker.js:3858:37) at findGlobal (_worker.js:3143:30) at PayloadSDK.findGlobal (_worker.js:3810:16) at _worker.js:3905:92 at async fn (_worker.js:8385:23) at async load_server_data (_worker.js:8376:18) at async _worker.js:10147:31"
```
