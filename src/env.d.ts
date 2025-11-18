declare namespace App {
	interface Locals {
		variant: Promise<string> | string;
	}
}

interface ImportMetaEnv {
	readonly POSTHOG_KEY: string;
	readonly POSTHOG_HOST: string;
}

// biome-ignore lint/correctness/noUnusedVariables: import meta env typing
interface ImportMeta {
	readonly env: ImportMetaEnv;
}