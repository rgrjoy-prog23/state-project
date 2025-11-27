"use client";

import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./shadcnui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./shadcnui/card";
import { useState } from "react";

const ExpartCounter = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		if (count < 100) {
			setCount(count + 1);
		}
	};

	const minus = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const plusTen = () => {
		if (count < 100) {
			setCount(count + 10);
		}
	};

	const minusTen = () => {
		if (count > 10) {
			setCount(count - 10);
		}
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
					onClick={minus}>
					<MinusCircleIcon /> Minus 1
				</Button>

				<Button
					className="cursor-pointer"
					onClick={plus}>
					<PlusCircleIcon /> Plus 1
				</Button>

				<Button
					variant={"destructive"}
					className="cursor-pointer"
					onClick={minusTen}>
					<MinusCircleIcon /> Minus 10
				</Button>

				<Button
					className="cursor-pointer"
					onClick={plusTen}>
					<PlusCircleIcon /> Plus 10
				</Button>
			</div>
		</CardContent>
	);
};

export default ExpartCounter;
