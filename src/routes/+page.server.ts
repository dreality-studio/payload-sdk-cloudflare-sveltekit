import { error } from '@sveltejs/kit';

export const load = ({ platform }) => {
	if (!platform) {
		error(500);
	}

	return import('@payloadcms/sdk').then((m) =>
		new m.PayloadSDK({ baseURL: `${platform.env.PUBLIC_PAYLOAD_ORIGIN}/api` })
			.findGlobal({ slug: platform.env.PUBLIC_SLUG })
			.then((result) => ({ result }))
			.catch((e) => ({ result: e }))
	);
};
