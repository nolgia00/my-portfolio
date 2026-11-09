import { Link, useParams } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { projects } from "../data/projects"

export default function ProjectDetail() {
	const { id } = useParams()
	const project = projects.find((p) => p.id === id)

	if (!project) {
		return (
			<div className="px-4 py-20 text-center text-white">
				<p className="text-2xl font-bold">Project not found</p>
				<Link to="/projects">
					<Button className="mt-4 bg-green-300 text-[#0A2463] font-bold">Back to Projects</Button>
				</Link>
			</div>
		)
	}

	const Icon = project.icon

	return (
		<section className="px-4 sm:px-6 py-8 max-w-3xl mx-auto w-full">
			<Link to="/projects" className="flex items-center gap-2 text-white/60 hover:text-white mb-5">
				<ArrowLeft className="w-5 h-5" /> Back to Projects
			</Link>

			<img src={project.image} alt={project.title} className="w-full h-60 sm:h-72 object-cover rounded-xl border border-white/10" />

			<div className="flex items-center gap-2.5 mt-6">
				<span className="bg-green-300 p-2 rounded-lg">
					<Icon className="w-6 h-6 text-[#0A2463]" />
				</span>
				<h1 className="text-3xl font-bold text-white">{project.title}</h1>
			</div>

			<p className="text-white/60 text-lg mt-3 leading-relaxed">{project.longDescription}</p>

			<p className="font-bold text-white mt-6 mb-2">What I did:</p>
			<ul className="space-y-2 text-white/70">
				{project.features.map((f) => (
					<li key={f}>• {f}</li>
				))}
			</ul>

			<div className="flex flex-wrap gap-2 mt-6">
				{project.tools.map((t) => (
					<Badge key={t} variant="secondary">{t}</Badge>
				))}
			</div>

			{project.liveLink ? (
				<a href={project.liveLink} target="_blank" rel="noreferrer">
					<Button className="w-full h-12 bg-green-300 text-[#0A2463] font-bold mt-6">
						Open Live Project <ExternalLink className="w-5 h-5" />
					</Button>
				</a>
			) : (
				<p className="text-center text-white/40 text-sm mt-6 bg-white/5 py-3 rounded-md">
					Mock data — real link will be add if the project existed. this button will be live.
				</p>
			)}
		</section>
	)
}
