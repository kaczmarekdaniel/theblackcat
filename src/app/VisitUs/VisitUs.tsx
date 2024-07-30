import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button.tsx";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { DatePicker } from "@/components/ui/datepicker.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";

const errorMessages = {
	tooShort: "Name must be at least 2 characters.",
};

const formSchema = z.object({
	name: z.string().min(2, {
		message: errorMessages.tooShort,
	}),
	mail: z.string().email(
		{
			message: "It's not an email",
		},
	).min(2, {
		message: errorMessages.tooShort,
	}),
	guests: z.coerce.number().positive(),
	date: z.date(),
	additionalInfo: z.string().optional(),
	time: z.string(),
});

const RecaptchaForm: React.FC = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			mail: "",
			guests: 0,
			additionalInfo: "",
		},
	});
	const { executeRecaptcha } = useGoogleReCaptcha();

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		if (!executeRecaptcha) {
			return;
		}
		const recaptchaToken = await executeRecaptcha("submitForm");
		if (recaptchaToken) {
			// Submit the form data along with the recaptchaToken
			alert(JSON.stringify(values));
		} else {
			alert("Please complete the reCAPTCHA");
		}
	};

	const labelStyles = "text-white opacity-80 text-xs";

	return (
		<div className="flex flex-col items-center gap-6 pt-20">
			<h1 className="text-white text-4xl font-regular font-sans">
				Book a visit
			</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}
							className=" w-3/4 md:w-96 flex flex-col md:grid md:grid-cols-6 gap-4 font-text">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="h-min col-span-3">
								<FormLabel className={labelStyles}>Name</FormLabel>
								<FormControl>
									<Input placeholder="" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>

						)}
					/>

					<FormField
						control={form.control}
						name="mail"
						render={({ field }) => (
							<FormItem className="h-min col-span-3">
								<FormLabel className={labelStyles}>Mail</FormLabel>
								<FormControl>
									<Input  {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>

						)}
					/>

					<FormField
						control={form.control}
						name="guests"
						render={({ field }) => (
							<FormItem className="h-min col-span-1">
								<FormLabel className={labelStyles}>Guests</FormLabel>
								<FormControl>
									<Input type="number" placeholder="shadcn" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>

						)}
					/>

					<FormField
						control={form.control}
						name="time"
						render={({ field }) => (
							<FormItem className="h-min col-span-2">
								<FormLabel className={labelStyles}>Time</FormLabel>
								<FormControl>
									<Input type="time" className="form-time-input" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>

						)}
					/>

					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem className="col-span-3 h-min">
								<FormLabel className={labelStyles}>Date</FormLabel>
								<FormControl>
									<DatePicker value={field.value} onChange={field.onChange} />
								</FormControl>

								<FormMessage />
							</FormItem>

						)}
					/>

					<FormField
						control={form.control}
						name="additionalInfo"
						render={({ field }) => (
							<FormItem className="col-span-6 w-full">
								<FormLabel className={labelStyles}>Additional info</FormLabel>
								<FormControl>
									<Textarea {...field} />
								</FormControl>
								<FormDescription>
									Do you need specific bottle, cocktail or anything else? Let us know here
								</FormDescription>
								<FormMessage />
							</FormItem>

						)}
					/>

					<div className="col-span-6 w-full flex justify-end">
						<Button type="submit">Submit</Button>
					</div>

				</form>
			</Form>

		</div>);
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


