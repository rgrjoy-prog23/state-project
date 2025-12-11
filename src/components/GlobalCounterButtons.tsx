"use client";

import { countAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./shadcnui/button";

const GlobalCounterButtons = () => {
	const [count, setCount] = useAtom(countAtom);

	const plus = () => {
		if (count < 99) {
			setCount(count + 1);
		}
	};

	const minus = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const plusTen = () => {
		if (count < 91) {
			setCount(count + 10);
		}
	};

	const minusTen = () => {
		if (count > 10) {
			setCount(count - 10);
		}
	};

	return (
		<div className="grid grid-cols-2 gap-4">
			<Button
				variant={"destructive"}
				disabled={count < 1}
				className="cursor-pointer"
				onClick={minus}>
				<MinusCircleIcon /> Minus 1
			</Button>

			<Button
				className="cursor-pointer"
				disabled={count > 99}
				onClick={plus}>
				<PlusCircleIcon /> Plus 1
			</Button>

			<Button
				variant={"destructive"}
				disabled={count < 10}
				className="cursor-pointer"
				onClick={minusTen}>
				<MinusCircleIcon /> Minus 10
			</Button>

			<Button
				className="cursor-pointer"
				disabled={count > 91}
				onClick={plusTen}>
				<PlusCircleIcon /> Plus 10
			</Button>
		</div>
	);
};

export default GlobalCounterButtons;
