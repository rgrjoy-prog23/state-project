"use client";

import { useState } from "react";
import { CardContent } from "./shadcnui/card";
import { Button } from "./shadcnui/button";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";

const AdvancedCounter = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};

	const plusTen = () => {
		setCount(count + 10);
	};

	const minusTen = () => {
		setCount(count - 10);
	};

	return (
		<CardContent className="space-y-4">
			<div className="text-center text-xl">
				Count: <span className="font-bold">{count}</span>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<Button
					variant={"destructive"}
					className="cursor-pointer"
					onClick={() => setCount(count - 1)}>
					<MinusCircleIcon /> Minus 1
				</Button>

				<Button
					className="cursor-pointer"
					onClick={() => setCount(count + 1)}>
					<PlusCircleIcon /> Plus 1
				</Button>

				<Button
					variant={"destructive"}
					className="cursor-pointer"
					onClick={() => setCount(count - 10)}>
					<MinusCircleIcon /> Minus 10
				</Button>

				<Button
					className="cursor-pointer"
					onClick={() => setCount(count + 10)}>
					<PlusCircleIcon /> Plus 10
				</Button>
			</div>
		</CardContent>
	);
};

export default AdvancedCounter;
