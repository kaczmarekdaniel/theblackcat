declare module "react-google-recaptcha" {
	import * as React from "react";

	interface ReCAPTCHAProps {
		sitekey: string;
		onChange?: (token: string | null) => void;
		onExpired?: () => void;
		onErrored?: () => void;
		theme?: "light" | "dark";
		type?: "image" | "audio";
		tabindex?: number;
		size?: "compact" | "normal" | "invisible";
		badge?: "bottomright" | "bottomleft" | "inline";
		className?: string;
	}

	class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {}

	export default ReCAPTCHA;
}
