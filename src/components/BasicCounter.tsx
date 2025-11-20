"use client";

import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";
import { useState } from "react";
import { count } from "console";

const BasicCounter = () => {
	const [count, setCount] = useState(0);

	// const plus = () => {
	// 	setCount(count + 1);
	// };

	// const minus = () => {
	// 	setCount(count - 1);
	// };

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
			</div>
		</CardContent>
	);
};

export default BasicCounter;
