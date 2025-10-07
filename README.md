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

Go to http://localhost:5173 to see the fetched data from Payload SDK

```
pnpm dev
```

## Step 5 - Test with local built files

Go to http://localhost:4173 to see the fetched data from Payload SDK

```
pnpm build
pnpm preview
```

## Step 6 - Test with Wrangler

```
wrangler dev
```

Go to http://localhost:8787 to see the fetched data from Payload SDK or the illegal invocation error message

```
"Illegal invocation: function called with incorrect `this` reference. See https://developers.cloudflare.com/workers/observability/errors/#illegal-invocation-errors for details."
```
