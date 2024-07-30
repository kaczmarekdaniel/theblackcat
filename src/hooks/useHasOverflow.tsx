import { useEffect, useState } from "react";

const useHasOverflow = (ref: React.RefObject<HTMLElement>) => {
	const [hasOverflow, setHasOverflow] = useState(false);
	const [overflowOpen, setOverflowOpen]  = useState(false)
	useEffect(() => {
		const checkOverflow = () => {
			if (ref.current) {
				const hasOverflow =
					ref.current.scrollHeight > ref.current.clientHeight ||
					ref.current.scrollWidth > ref.current.clientWidth;
				setHasOverflow(hasOverflow);
			}
		};

		checkOverflow();

	}, [ref]);

	return {hasOverflow, setOverflowOpen, overflowOpen};
};

export default useHasOverflow;
