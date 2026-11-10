import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
	let navigate = useNavigate();

	return (
		<section className="p-5 lg:p-10 w-full lg:flex-1 flex
			flex-col-reverse lg:flex-row gap-6 lg:gap-12
			items-center">
			<div className="flex flex-col items-center lg:items-start gap-8 lg:gap-10">
				<div>
					<Badge variant="secondary" className="text-xs sm:text-sm h-7">
						<Dot className="bg-green-300 rounded-full"></Dot>Available for projects</Badge>
				</div>

				<div className="text-white flex flex-col items-center lg:items-start gap-4 lg:gap-6">
					<div className="flex flex-col items-center lg:items-start gap-10 lg:gap-5">
						<h1 className="text-8xl text-green-300">Hi, I'm Jomar</h1>
						<h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white/90">I build websites and games.</h2>
						<p className="text-base text-white/60 text-center leading-relaxed px-6 max-w-md">
							I help small businesses and indie creators turn ideas into playable, working products.
						</p>
					</div>

					<div className="flex flex-row gap-5">
						<Button variant="secondary" size="lg" className="text-base px-5 py-3 bg-green-300" onClick={() => navigate("/projects")}>View Projects</Button>

						<Button variant="ghost" size="lg" className="text-white text-base px-5 py-3 border border-white" onClick={() => navigate("/contacts")}>Contact Me</Button>
					</div>
				</div>
			</div>

			<div>
				<img src="jomar_me.jpg" className="w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover brightness-95 saturate-100 ring-2 ring-green-300" />
			</div>
		</section>
	)
}
