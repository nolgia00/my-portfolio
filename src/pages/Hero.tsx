import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
	let navigate = useNavigate();

	return (
		<section className="p-5 lg:p-25 w-full lg:flex-1 flex
			flex-col-reverse lg:flex-row gap-10 lg:gap-50
			items-center">
			<div className="flex flex-col items-center lg:items-start gap-8 lg:gap-10">
				<div>
					<Badge variant="secondary" className="text-2xl h-10">
						<Dot className="bg-green-300 rounded-full"></Dot>Available for projects</Badge>
				</div>

				<div className="text-white flex flex-col items-center lg:items-start gap-25 lg:gap-10">
					<div className="flex flex-col items-center lg:items-start gap-10 lg:gap-5">
						<h1 className="text-8xl text-green-300">Hi, I'm Jomar</h1>
						<h2 className="text-5xl font-bold text-white/90">I build websites and games.</h2>
						<p className="text-base text-white/60 text-center leading-relaxed px-6 max-w-md">
							I help small businesses and indie creators turn ideas into playable, working products.
						</p>
					</div>

					<div className="flex flex-row gap-5">
						<Button variant="secondary" size="lg" className="text-4xl px-10 py-10 bg-green-300" onClick={() => navigate("/projects")}>View Projects</Button>

						<Button variant="ghost" size="lg" className="text-white text-4xl px-10 py-10 border border-white" onClick={() => navigate("/contacts")}>Contact Me</Button>
					</div>
				</div>
			</div>

			<div>
				<img src="jomar_me.jpg" className="w-80 lg:w-100 h-80 lg:h-100 rounded-full object-cover brightness-95 saturate-100 ring-2 ring-green-300" />
			</div>
		</section>
	)
}
