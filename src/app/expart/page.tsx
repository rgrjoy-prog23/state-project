import ExpertCounter from "@/components/ExpartCounter";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expart | Counter State App",
	description: "Expart Counter State App",
};

const page = () => {
	return (
		<section className="grid h-[95dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Expart Counter State
					</CardTitle>
				</CardHeader>

				<ExpertCounter />
			</Card>
		</section>
	);
};

export default page;
