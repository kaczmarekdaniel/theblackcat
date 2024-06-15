import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
	const [date, setDate] = React.useState<Date>();

	React.useEffect(() => {
		const dateConverted = new Date(date);

		// Options for the locale string

		// Convert to Polish format
		const formattedDate = dateConverted.toLocaleDateString("pl-PL", {
			day: "2-digit",
			month: "long",
			year: "numeric",
		});

        console.log(formattedDate);
	}, [date]);
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[280px] justify-start text-left font-normal hover:bg-transparent font-text",
						!date && "text-muted-foreground"
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, "PPP") : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0 bg-black font-text italic border-none shadow-inner">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
					className=" text-white font-text  italic"
				/>
			</PopoverContent>
		</Popover>
	);
}
