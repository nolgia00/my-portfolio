import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
	Globe,
	Gamepad2,
	Music,
	Palette,
	Sparkles,
	type LucideIcon,
} from "lucide-react"

type SkillGroup = {
	category: "web" | "games" | "music" | "art"
	title: string
	description: string
	icon: LucideIcon
	items: { name: string; level: number; note: string }[]
	tools: string[]
}

const skills: SkillGroup[] = [
	{
		category: "web",
		title: "Web Development",
		description: "Building clean, responsive websites",
		icon: Globe,
		items: [
			{ name: "HTML / CSS", level: 85, note: "I can build any layout" },
			{ name: "JavaScript", level: 70, note: "Filter, map, Router — I get it" },
			{ name: "React", level: 65, note: "Components, useState, Router" },
			{ name: "Tailwind CSS", level: 80, note: "My main styling tool" },
			{ name: "Node JS", level: 75, note: "I build APIs and handle server logic." },
			{ name: "Express", level: 77, note: "My go-to for building fast backends." },
			{ name: "PostgreSQL/Supabase", level: 74, note: "Where i store user data, auth, and projects." },
		],
		tools: ["React", "Tailwind", "shadcn/ui", "React Router", "Express", "NodeJS", "PostgreSQL", "Supabase"],
	},
	{
		category: "games",
		title: "Game Development",
		description: "Making playable games, not just demos",
		icon: Gamepad2,
		items: [
			{ name: "Godot", level: 70, note: "2D platformers, GDScript" },
			{ name: "Phaser", level: 60, note: "Arcade games with JS" },
			{ name: "Roblox Studio", level: 75, note: "Obby, Lua scripting" },
			{ name: "Lua / GDScript", level: 65, note: "Game logic & mechanics" },
		],
		tools: ["Godot", "Phaser", "Roblox", "Lua", "GDScript"],
	},
	{
		category: "music",
		title: "Music Production",
		description: "Singing & producing my own beats",
		icon: Music,
		items: [
			{ name: "FL Studio", level: 75, note: "Beats, drums, melody" },
			{ name: "Vocals / Singing", level: 80, note: "My main instrument" },
			{ name: "Mixing", level: 50, note: "Still learning, getting better" },
		],
		tools: ["FL Studio", "Vocals", "Beats", "Mixing"],
	},
	{
		category: "art",
		title: "Digital Art",
		description: "Characters & art for my projects",
		icon: Palette,
		items: [
			{ name: "Ibis Paint", level: 80, note: "Character art, coloring" },
			{ name: "Character Design", level: 70, note: "From sketch to final" },
			{ name: "UI Design", level: 65, note: "Designing my own portfolio" },
		],
		tools: ["Ibis Paint", "Character Design", "Coloring"],
	},
]

export default function Skills() {
	return (
		// SAME LAYOUT AS PROJECTS: px-4, max-w, w-full, overflow-hidden
		<section className="px-4 sm:px-6 py-10 sm:py-16 max-w-5xl mx-auto w-full overflow-x-hidden">
			<h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
				My <span className="text-green-300">Skills</span>
			</h2>
			<p className="text-white/60 mt-2 text-base sm:text-lg">
				Not fake percentages. Just what I use, and what I use it for.
			</p>

			{/* SAME AS PROJECTS: Tabs on top, content BELOW - flex-col forces it */}
			<Tabs defaultValue="web" className="mt-6 w-full flex flex-col">
				{/* SHRUNK TABS */}
				<TabsList className="bg-white/5 border border-white/10 w-full grid grid-cols-4 h-10 p-1 gap-1 shrink-0">
					<TabsTrigger value="web" className="whitespace-nowrap h-8 text-sm px-1 gap-1.5">
						<Globe className="w-4 h-4" /> Web
					</TabsTrigger>
					<TabsTrigger value="games" className="whitespace-nowrap h-8 text-sm px-1 gap-1.5">
						<Gamepad2 className="w-4 h-4" /> Games
					</TabsTrigger>
					<TabsTrigger value="music" className="whitespace-nowrap h-8 text-sm px-1 gap-1.5">
						<Music className="w-4 h-4" /> Music
					</TabsTrigger>
					<TabsTrigger value="art" className="whitespace-nowrap h-8 text-sm px-1 gap-1.5">
						<Palette className="w-4 h-4" /> Art
					</TabsTrigger>
				</TabsList>

				{/* CONTENT BELOW TABS - like Projects grid below tabs */}
				{skills.map((skill) => {
					const Icon = skill.icon
					return (
						<TabsContent key={skill.category} value={skill.category} className="mt-4 w-full block">
							<Card className="bg-white/5 border-white/10 text-white w-full">
								<CardHeader className="pb-2">
									<CardTitle className="text-green-300 text-2xl flex items-center gap-2.5">
										<span className="bg-green-300/15 p-2 rounded-full shrink-0">
											<Icon className="w-6 h-6 text-green-300" />
										</span>
										<span className="break-words">{skill.title}</span>
									</CardTitle>
									<CardDescription className="text-white/60 text-base pt-1">
										{skill.description}
									</CardDescription>
								</CardHeader>

								<CardContent className="space-y-6 pt-4">
									{skill.items.map((item) => (
										<div key={item.name}>
											<div className="flex justify-between items-center mb-2 gap-2">
												<p className="font-semibold text-base sm:text-lg">{item.name}</p>
												<span className="text-base text-green-300 font-bold shrink-0">{item.level}%</span>
											</div>
											<Progress dir="ltr" value={item.level} className="h-3 w-full [&_[data-slot=progress-track]]:bg-white/10 [&_[data-slot=progress-indicator]]:bg-green-300" />

											<p className="text-sm sm:text-base text-white/50 mt-1.5">{item.note}</p>
										</div>
									))}

									<div className="flex flex-wrap gap-2 pt-2">
										{skill.tools.map((tool) => (
											<Badge key={tool} variant="secondary" className="text-sm px-3 py-1.5">{tool}</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					)
				})}
			</Tabs>

			{/* GREEN CARD BELOW EVERYTHING - like Projects bottom */}
			<Card className="bg-green-300 text-[#0A2463] border-0 mt-6 w-full">
				<CardContent className="pt-6 pb-6">
					<p className="font-bold text-lg sm:text-xl flex items-center gap-2">
						<Sparkles className="w-6 h-6 shrink-0" /> Why this matters:
					</p>
					<p className="text-base mt-2 opacity-80 leading-relaxed">
						I don't need to hire someone for art, music, or code. I can make a full game by myself —
						Godot for the game, Ibis Paint for the art, FL Studio for the music.
						That's my superpower.
					</p>
				</CardContent>
			</Card>
		</section>
	)
}
