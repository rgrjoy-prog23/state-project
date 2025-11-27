import AdvancedCounter from "@/components/AdvancedCounter";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advanced | Counter State App",
	description: "Advanced Counter State App",
};

const page = () => {
	return (
		<section className="grid h-[95dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Advanced Counter State
					</CardTitle>
				</CardHeader>

				<AdvancedCounter />
			</Card>
		</section>
	);
};

export default page;
