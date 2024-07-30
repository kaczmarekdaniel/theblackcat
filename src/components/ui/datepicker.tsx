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

type DatePickerProps = {
	value: Date;
	onChange: (date: Date) => void;
};
 
export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
	const [date, setDate] = React.useState(value);

	React.useEffect(() => {
		setDate(value);
	}, [value]);

	const handleDateChange = (newDate: Date) => {
		setDate(newDate);
		onChange(newDate);
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-full max-w-full justify-start text-left font-normal hover:bg-transparent font-text",
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
					//@ts-expect-error test
					onSelect={handleDateChange}
					initialFocus
					className=" text-white font-text  italic"
				/>
			</PopoverContent>
		</Popover>
	);
};
