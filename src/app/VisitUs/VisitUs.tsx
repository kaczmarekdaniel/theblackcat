import { useState } from "react";
import {
	GoogleReCaptchaProvider,
	useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { DatePicker } from "@/components/ui/datepicker";

const RecaptchaForm: React.FC = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
	const { executeRecaptcha } = useGoogleReCaptcha();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!executeRecaptcha) {
			return;
		}
		const recaptchaToken = await executeRecaptcha("submitForm");
		if (recaptchaToken) {
			// Submit the form data along with the recaptchaToken
			console.log("Form data:", { name, email, recaptchaToken });
			setFormSubmitted(true);
		} else {
			alert("Please complete the reCAPTCHA");
		}
	};

	return (
		<div className="flex flex-col items-center gap-12 pt-20">
			<h1 className="text-white text-4xl font-regular font-sans">
				Book a visit
			</h1>
			{formSubmitted ? (
				<p>Form submitted successfully!</p>
			) : (
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Name:</label>
						<Input
							type="text"
							className="w-full"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<Input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="">
						<DatePicker />
					</div>
					<button type="submit">Submit</button>
				</form>
			)}
		</div>
	);
};

const VisitUs = () => {
	return (
		<GoogleReCaptchaProvider
			useRecaptchaNet={true}
			reCaptchaKey="6LcRZPcpAAAAAHhLMm_0lVkfvJav4q-fEc6uM-FA"
		>
			<RecaptchaForm />
		</GoogleReCaptchaProvider>
	);
};

export default VisitUs;
