import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
	Hand,
	MapPin,
	GraduationCap,
	Sparkles,
	Globe,
	Gamepad2,
	Music,
	Palette,
	ArrowRight,
	Mail,
} from "lucide-react"

export default function About() {
	return (
		<section id="about" className="px-4 sm:px-6 py-10 sm:py-16 max-w-5xl mx-auto w-full overflow-x-hidden">
			{/* Header */}
			<h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
				About <span className="text-green-300">Me</span>
			</h2>
			<p className="text-white/60 mt-2 text-base sm:text-lg">The story behind the projects</p>

			<Separator className="my-6 bg-white/10" />

			{/* Top: Photo + Intro - Stacked on mobile, centered */}
			<div className="flex flex-col items-center text-center sm:text-left sm:items-start md:flex-row gap-6 md:gap-8 md:items-start">
				<Avatar className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 shrink-0 ring-2 ring-green-300 ring-offset-2 ring-offset-[#0A2463]">
					<AvatarImage
						src="/jomar_me.jpg"
						alt="Jomar"
						className="object-cover brightness-95 saturate-100"
					/>
					<AvatarFallback className="bg-green-300 text-[#0A2463] text-4xl font-bold">J</AvatarFallback>
				</Avatar>

				<div className="flex-1 min-w-0">
					<h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
						Hi, I'm Jomar <Hand className="w-7 h-7 text-green-300 shrink-0" />
					</h3>
					<p className="mt-4 text-white/70 leading-relaxed text-base sm:text-lg">
						I'm a self taught learner from Quezon City who likes building things from scratch.
						I started with websites and games, but I didn't stop there — I also sing,
						produce music, and make digital art. So when I make a project, I can do
						the code, the design, the sound, and the art myself.
					</p>

					<p className="mt-3 text-white/70 leading-relaxed text-base sm:text-lg">
						My goal is simple: <span className="text-green-300 font-semibold">create everything from start to finish.</span>
					</p>

					<div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-5">
						<Badge className="bg-green-300 text-[#0A2463] hover:bg-green-300 text-sm px-3 py-1.5 flex items-center gap-1.5">
							<Sparkles className="w-4 h-4" /> One-Man Studio
						</Badge>
						<Badge variant="outline" className="text-white/70 border-white/20 text-sm px-3 py-1.5 flex items-center gap-1.5">
							<MapPin className="w-4 h-4" /> Quezon City, PH
						</Badge>
						<Badge variant="outline" className="text-white/70 border-white/20 text-sm px-3 py-1.5 flex items-center gap-1.5">
							<GraduationCap className="w-4 h-4" /> Student Creator
						</Badge>
					</div>
				</div>
			</div>

			{/* 4 Cards - Bigger, 2 cols on phone now - easier to tap */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
				<Card className="bg-white/5 border-white/10 text-white w-full min-w-0">
					<CardHeader className="pb-2">
						<CardTitle className="text-green-300 flex items-center gap-2 text-xl">
							<Globe className="w-6 h-6 shrink-0" /> Web
						</CardTitle>
						<CardDescription className="text-white/60 text-base">
							Clean, responsive websites
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-wrap gap-2">
						<Badge variant="secondary" className="text-sm px-2.5 py-1">HTML</Badge>
						<Badge variant="secondary" className="text-sm px-2.5 py-1">CSS</Badge>
						<Badge variant="secondary" className="text-sm px-2.5 py-1">JavaScript</Badge>
						<Badge variant="secondary" className="text-sm px-2.5 py-1">Tailwind</Badge>
					</CardContent>
				</Card>

				<Card className="bg-white/5 border-white/10 text-white w-full min-w-0">
					<CardHeader className="pb-2">
						<CardTitle className="text-green-300 flex items-center gap-2 text-xl">
							<Gamepad2 className="w-6 h-6 shrink-0" /> Games
						</CardTitle>
						<CardDescription className="text-white/60 text-base">
							Playable games, not just demos
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-wrap gap-2">
						<Badge variant="secondary" className="text-sm px-2.5 py-1">Godot</Badge>
						<Badge variant="secondary" className="text-sm px-2.5 py-1">Phaser</Badge>
						<Badge variant="secondary" className="text-sm px-2.5 py-1">Roblox</Badge>
					</CardContent>
				</Card>

				<Card className="bg-white/5 border-white/10 text-white w-full min-w-0">
					<CardHeader className="pb-2">
						<CardTitle className="text-green-300 flex items-center gap-2 text-xl">
							<Music className="w-6 h-6 shrink-0" /> Music
						</CardTitle>
						<CardDescription className="text-white/60 text-base">
							Singing & producing beats
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-wrap gap-2">
						<Badge variant="secondary" className="text-sm px-2.5 py-1">FL Studio</Badge>
						<Badge variant="secondary" className="text-sm px-2.5 py-1">Vocals</Badge>
						<Badge variant="secondary" className="text-sm px-2.5 py-1">Beats</Badge>
					</CardContent>
				</Card>

				<Card className="bg-white/5 border-white/10 text-white w-full min-w-0">
					<CardHeader className="pb-2">
						<CardTitle className="text-green-300 flex items-center gap-2 text-xl">
							<Palette className="w-6 h-6 shrink-0" /> Art
						</CardTitle>
						<CardDescription className="text-white/60 text-base">
							Characters & digital art
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-wrap gap-2">
						<Badge variant="secondary" className="text-sm px-2.5 py-1">Ibis Paint</Badge>
						<Badge variant="secondary" className="text-sm px-2.5 py-1">Character Design</Badge>
					</CardContent>
				</Card>
			</div>

			{/* Bottom CTA - Full width on mobile, big tap targets */}
			<div className="flex flex-col sm:flex-row gap-3 mt-10">
				<Button className="bg-green-300 text-[#0A2463] hover:bg-green-400 font-bold h-12 text-base w-full sm:w-auto">
					<Link to="/projects" className="flex items-center gap-2 justify-center">
						View My Projects <ArrowRight className="w-5 h-5" />
					</Link>
				</Button>
				<Button variant="ghost" className="border-white/20 text-white hover:bg-white/10 h-12 text-base w-full sm:w-auto">
					<Link to="/contacts" className="flex items-center gap-2 justify-center">
						<Mail className="w-5 h-5" /> Contact Me
					</Link>
				</Button>
			</div>
		</section>
	)
}
