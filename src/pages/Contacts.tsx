import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
	Mail,
	MapPin,
	Clock,
	Send,
	CheckCircle2,
	Globe,
	Gamepad2,
	Music,
	Palette,
	Sparkles,
	MessageSquare,
	User,
	ChevronDown,
} from "lucide-react"

export default function Contacts() {
	const [sent, setSent] = useState(false)
	const [name, setName] = useState("")

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		setSent(true)
	}

	return (
		<section className="px-4 sm:px-6 py-10 sm:py-16 max-w-5xl mx-auto w-full overflow-x-hidden">
			<h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
				Let's <span className="text-green-300">Work Together</span>
			</h2>
			<p className="text-white/60 mt-3 text-base sm:text-lg">
				Got a project? Need a website, a game, a beat, or art? Message me.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 items-start">
				{/* LEFT: Your Info */}
				<div className="space-y-4 w-full min-w-0 order-2 lg:order-1">
					<Card className="bg-white/5 border-white/10 text-white w-full">
						<CardHeader>
							<CardTitle className="text-green-300 flex items-center gap-2 text-xl">
								<MapPin className="w-6 h-6 shrink-0" /> Find Me
							</CardTitle>
							<CardDescription className="text-white/60 text-base">
								I'm based in Quezon City, but I work online.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4 text-base">
							<div className="flex items-start gap-3">
								<Mail className="w-5 h-5 text-green-300 shrink-0 mt-0.5" />
								<span className="text-white/80 break-all">jomarescalera05@email.com</span>
							</div>
							<div className="flex items-center gap-3">
								<MapPin className="w-5 h-5 text-green-300 shrink-0" />
								<span className="text-white/80">Quezon City, Philippines</span>
							</div>
							<div className="flex items-center gap-3">
								<Clock className="w-5 h-5 text-green-300 shrink-0" />
								<span className="text-white/80">Usually replies within 1 day</span>
							</div>
						</CardContent>
					</Card>

					<Card className="bg-white/5 border-white/10 text-white w-full">
						<CardHeader>
							<CardTitle className="text-green-300 flex items-center gap-2 text-xl">
								<Sparkles className="w-6 h-6 shrink-0" /> What I Can Do For You
							</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-wrap gap-2">
							<Badge variant="secondary" className="text-sm px-3 py-1.5 flex items-center gap-1.5">
								<Globe className="w-4 h-4" /> Website
							</Badge>
							<Badge variant="secondary" className="text-sm px-3 py-1.5 flex items-center gap-1.5">
								<Gamepad2 className="w-4 h-4" /> Roblox / Godot Game
							</Badge>
							<Badge variant="secondary" className="text-sm px-3 py-1.5 flex items-center gap-1.5">
								<Music className="w-4 h-4" /> FL Studio Beat
							</Badge>
							<Badge variant="secondary" className="text-sm px-3 py-1.5 flex items-center gap-1.5">
								<Palette className="w-4 h-4" /> Ibis Paint Art
							</Badge>
							<Badge variant="secondary" className="text-sm px-3 py-1.5">Full Project - All 4</Badge>
						</CardContent>
					</Card>

					<Card className="bg-green-300 text-[#0A2463] border-0 w-full">
						<CardContent className="pt-6 pb-6">
							<p className="font-bold text-lg flex items-center gap-2">
								<Sparkles className="w-5 h-5" /> One-Man Studio = One Price
							</p>
							<p className="text-[15px] mt-1.5 opacity-80 leading-relaxed">
								You don't need to hire 4 people. I do code + art + music myself.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* RIGHT: Form - Shows FIRST on mobile */}
				<Card className="bg-white/5 border-white/10 text-white w-full min-w-0 order-1 lg:order-2">
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-xl">
							<MessageSquare className="w-6 h-6 text-green-300" /> Send a Message
						</CardTitle>
						<CardDescription className="text-white/60 text-base">
							Fill this out and I'll get back to you.
						</CardDescription>
					</CardHeader>
					<CardContent>
						{sent ? (
							<div className="text-center py-8">
								<CheckCircle2 className="w-16 h-16 text-green-300 mx-auto" />
								<p className="text-2xl font-bold mt-4 text-green-300">Message Sent!</p>
								<p className="text-white/60 text-base mt-2">
									Thanks {name || "bro"}, I'll reply soon!
								</p>
								<Button onClick={() => setSent(false)} variant="ghost" className="mt-6 h-12 px-6 text-base border-white/20 text-white w-full sm:w-auto">
									Send Another
								</Button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-5">
								<div className="space-y-2">
									<Label htmlFor="name" className="text-base flex items-center gap-2">
										<User className="w-4 h-4 text-green-300" /> Your Name
									</Label>
									<Input
										id="name"
										required
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder="Juan Dela Cruz"
										className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 text-base"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="email" className="text-base flex items-center gap-2">
										<Mail className="w-4 h-4 text-green-300" /> Your Email
									</Label>
									<Input
										id="email"
										type="email"
										required
										placeholder="you@email.com"
										className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 text-base"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="type" className="text-base">What do you need?</Label>
									<div className="relative">
										<select id="type" className="w-full h-12 rounded-md bg-white/5 border border-white/10 px-3 text-base text-white appearance-none [&>option]:text-black">
											<option>Website</option>
											<option>Game - Godot / Phaser / Roblox</option>
											<option>Music - FL Studio Beat</option>
											<option>Art - Ibis Paint</option>
											<option>Full Project - All of it</option>
										</select>
										<ChevronDown className="w-5 h-5 text-white/50 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="message" className="text-base flex items-center gap-2">
										<MessageSquare className="w-4 h-4 text-green-300" /> Message
									</Label>
									<Textarea
										id="message"
										required
										placeholder="Hi Jomar, I want a..."
										rows={5}
										className="bg-white/5 border-white/10 text-white placeholder:text-white/30 text-base min-h-[120px]"
									/>
								</div>

								<Button type="submit" className="w-full bg-green-300 text-[#0A2463] hover:bg-green-400 font-bold h-12 text-base gap-2">
									Send Message <Send className="w-5 h-5" />
								</Button>
							</form>
						)}
					</CardContent>
				</Card>
			</div>
		</section>
	)
}
