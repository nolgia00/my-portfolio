import { useState } from "react"
import { Link } from "react-router-dom"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
	Globe,
	Gamepad2,
	Music,
	Palette,
	LayoutGrid,
	ArrowRight,
	FolderOpen,
} from "lucide-react"

// 1. DATA - No more emoji string, now real Lucide icon
import { projects } from "../data/projects";

export default function ProjectsPage() {
	const [activeTab, setActiveTab] = useState("all")

	const filtered = projects.filter((p) => {
		if (activeTab === "all") return true
		return p.category === activeTab
	})

	return (
		<section className="px-4 sm:px-6 py-10 sm:py-16 max-w-6xl mx-auto w-full overflow-x-hidden">
			<h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
				My <span className="text-green-300">Projects</span>
			</h2>
			<p className="text-white/60 mt-2 text-base sm:text-lg">
				Everything I built — Web, Games, Music & Art. Filter it like a pro.
			</p>

			{/* BIG TABS - h-11, text-base, easy to tap */}
			<Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8 w-full">
				<TabsList className="bg-white/5 border border-white/10 w-full flex flex-wrap h-auto justify-start gap-1.5 p-1.5">
					<TabsTrigger value="all" className="whitespace-nowrap flex-1 sm:flex-none h-11 text-base px-4 gap-2">
						<LayoutGrid className="w-5 h-5" /> All
					</TabsTrigger>
					<TabsTrigger value="web" className="whitespace-nowrap flex-1 sm:flex-none h-11 text-base px-4 gap-2">
						<Globe className="w-5 h-5" /> Web
					</TabsTrigger>
					<TabsTrigger value="games" className="whitespace-nowrap flex-1 sm:flex-none h-11 text-base px-4 gap-2">
						<Gamepad2 className="w-5 h-5" /> Games
					</TabsTrigger>
					<TabsTrigger value="music" className="whitespace-nowrap flex-1 sm:flex-none h-11 text-base px-4 gap-2">
						<Music className="w-5 h-5" /> Music
					</TabsTrigger>
					<TabsTrigger value="art" className="whitespace-nowrap flex-1 sm:flex-none h-11 text-base px-4 gap-2">
						<Palette className="w-5 h-5" /> Art
					</TabsTrigger>
				</TabsList>
			</Tabs>

			{/* BIG CARDS - 1 col on phone, taller image, bigger text */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 w-full">
				{filtered.map((project) => {
					const Icon = project.icon
					return (
						<Card key={project.id} className="bg-white/5 border-white/10 text-white overflow-hidden hover:border-green-300/50 transition w-full min-w-0 flex flex-col">
							<div className="relative">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 sm:h-44 object-cover"
								/>
								{/* Icon badge on image */}
								<div className="absolute top-3 left-3 bg-[#0A2463]/90 backdrop-blur rounded-full p-2.5 border border-white/20">
									<Icon className="w-5 h-5 text-green-300" />
								</div>
							</div>

							<CardHeader className="min-w-0 pb-2">
								<CardTitle className="flex items-start gap-2.5 text-xl leading-snug">
									<Icon className="w-6 h-6 text-green-300 shrink-0 mt-0.5" />
									<span className="break-words">{project.title}</span>
								</CardTitle>
								<CardDescription className="text-white/60 text-base leading-relaxed pt-1">
									{project.description}
								</CardDescription>
							</CardHeader>

							<CardContent className="min-w-0 mt-auto">
								<div className="flex flex-wrap gap-2">
									{project.tools.map((tool) => (
										<Badge key={tool} variant="secondary" className="whitespace-nowrap text-sm px-2.5 py-1">
											{tool}
										</Badge>
									))}
								</div>

								<Link
									to={`/projects/${project.id}`}
									className="flex w-full h-12 items-center justify-center gap-2 rounded-md bg-green-300 text-[#0A2463] hover:bg-green-400 font-bold text-base mt-4"
								>
									View Project <ArrowRight className="w-5 h-5" />
								</Link>
							</CardContent>
						</Card>
					)
				})}
			</div>

			{filtered.length === 0 && (
				<div className="text-center mt-12 py-10">
					<FolderOpen className="w-12 h-12 text-white/30 mx-auto" />
					<p className="text-white/50 mt-3 text-base">No projects in this category yet</p>
				</div>
			)}
		</section>
	)
}
