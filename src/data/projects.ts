import { Globe, Gamepad2, Music, Palette, type LucideIcon } from "lucide-react"

export type Project = {
	id: string
	title: string
	category: "web" | "games" | "music" | "art"
	icon: LucideIcon
	description: string
	longDescription: string
	tools: string[]
	image: string
	features: string[]
	liveLink?: string
}

export const projects: Project[] = [
	{
		id: "my-portfolio",
		title: "My Portfolio Website",
		category: "web",
		icon: Globe,
		description: "My personal portfolio built with React, Tailwind & shadcn.",
		longDescription: "This is the website you're looking at right now. I built it to show all my work in one place — web, games, music, and art.",
		tools: ["React", "Tailwind", "shadcn"],
		image: "https://via.placeholder.com/800x400",
		features: ["Mobile friendly", "Tabs filter", "Dark blue + green theme"],
		liveLink: "",
	},
	{
		id: "roblox-obby",
		title: "Roblox Obby Game",
		category: "games",
		icon: Gamepad2,
		description: "A fun obby I made in Roblox Studio with checkpoints & traps.",
		longDescription: "An obby with checkpoints, lava traps, and tricky jumps. I scripted it in Lua — checkpoints save your progress, traps reset you.",
		tools: ["Roblox", "Lua"],
		image: "https://via.placeholder.com/800x400",
		features: ["Checkpoints", "Traps & lava", "Lua scripting"],
		liveLink: "",
	},
	{
		id: "godot-platformer",
		title: "Godot Platformer",
		category: "games",
		icon: Gamepad2,
		description: "A 2D platformer with jumping, coins and enemies in Godot.",
		longDescription: "My first Godot game. You jump, collect coins, avoid enemies. I learned GDScript, gravity, and player movement here.",
		tools: ["Godot", "GDScript"],
		image: "https://via.placeholder.com/800x400",
		features: ["Jumping + gravity", "Coins", "Enemies"],
		liveLink: "",
	},
	{
		id: "phaser-game",
		title: "Phaser Arcade Game",
		category: "games",
		icon: Gamepad2,
		description: "A fast arcade game made with Phaser and JavaScript.",
		longDescription: "An arcade game in the browser. No download needed. Built with Phaser + JavaScript, with score and game over screen.",
		tools: ["Phaser", "JavaScript"],
		image: "https://via.placeholder.com/800x400",
		features: ["Runs in browser", "Score system", "Game over screen"],
		liveLink: "",
	},
	{
		id: "fl-beat-1",
		title: "My First FL Beat",
		category: "music",
		icon: Music,
		description: "A chill beat I produced in FL Studio. Drums + melody by me.",
		longDescription: "My first full beat in FL Studio. I made the drums, bass, and melody myself. Chill vibe, good for studying / gaming.",
		tools: ["FL Studio", "Beats"],
		image: "https://via.placeholder.com/800x400",
		features: ["Drums by me", "Melody by me", "Mixed in FL Studio"],
		liveLink: "",
	},
	{
		id: "ibis-character",
		title: "Anime Character Art",
		category: "art",
		icon: Palette,
		description: "Original character I drew in Ibis Paint from sketch to coloring.",
		longDescription: "My original character. I sketched it, lined it, colored it, and shaded it all in Ibis Paint on my phone.",
		tools: ["Ibis Paint", "Digital Art"],
		image: "https://via.placeholder.com/800x400",
		features: ["Original character", "Sketch to color", "Done on phone"],
		liveLink: "",
	},
]
