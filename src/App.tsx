import { Link, Route, Routes, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Code2, Globe, Mail, Menu, Play } from "lucide-react"

import Hero from "./pages/Hero"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contacts from "./pages/Contacts"
import ProjectDetail from "./pages/ProjectDetail"

const navButtons = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Projects", link: "/projects" },
  { text: "Skills", link: "/skills" },
  { text: "Contact", link: "/contacts" },
]

export default function App() {
  let navigate = useNavigate();

  return (
    <section className="w-screen h-dvh lg:h-fit bg-blue-950 flex flex-col items-start gap-3">

      {/* DESKTOP NAV */}
      <nav className="w-full hidden lg:flex justify-between p-10">
        <Link to="/" className="self-center flex items-center gap-2.5">
          <span className="bg-green-300 p-2 rounded-lg">
            <Code2 className="w-6 h-6 text-[#0A2463]" />
          </span>
          <Label className="text-white text-3xl cursor-pointer">Jomar Escalera</Label>
        </Link>
        <div className="self-center flex gap-3">
          {navButtons.map((b) => (
            <Button key={b.text} variant="link" size="lg" className="text-white/70 hover:text-white text-lg" onClick={() => navigate(b.link)}>
              {b.text}
            </Button>
          ))}
        </div>
      </nav>

      {/* MOBILE TOP BAR */}
      <div className="w-full flex lg:hidden justify-between items-center px-4 py-3">
        <Sheet>
          <SheetTrigger className="p-2">
            <Menu className="text-white w-15 h-15" />
          </SheetTrigger>

          <SheetContent side="left" showCloseButton={false} className="bg-blue-950 flex flex-col p-0 w-[85vw] max-w-[320px]">
            {/* TOP - Name */}
            <div className="pt-4 pb-6 border-b border-white/10 flex flex-col items-center gap-3 self-center w-full px-6">
              <p className="font-bold text-white/70">Jomar Escalera</p>
              <p className="text-sm text-white/50">Web & Game Dev</p>
            </div>

            {/* MIDDLE - Links */}
            <div className="flex flex-col gap-3 mt-6 flex-1 px-2">
              {navButtons.map((b) => (
                <Button key={b.text} variant="link" size="lg" className="text-2xl px-4 py-2 text-white" onClick={() => navigate(b.link)}>
                  {b.text}
                </Button>
              ))}
            </div>

            {/* BOTTOM - FILLS THE EMPTY SPACE */}
            <div className="border-t border-white/10 p-6 flex flex-col gap-4">
              {/* Available badge */}
              <div className="flex items-center justify-center gap-2 bg-white/5 rounded-full py-2 px-3">
                <span className="w-2.5 h-2.5 bg-green-300 rounded-full animate-pulse" />
                <span className="text-sm text-white/80">Available for projects</span>
              </div>

              {/* Socials - PALITAN MO LANG YUNG LINKS DITO */}
              <div className="flex justify-center gap-3">
                <a href="https://github.com/nolgia00" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-green-300 hover:text-[#0A2463] text-white p-3 rounded-full transition">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@nolgia" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-green-300 hover:text-[#0A2463] text-white p-3 rounded-full transition">
                  <Play className="w-5 h-5" />
                </a>
                <a href="mailto:jomarescalera05@gmail.com" className="bg-white/10 hover:bg-green-300 hover:text-[#0A2463] text-white p-3 rounded-full transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Contact Button */}
              <Button className="w-full h-12 bg-green-300 text-[#0A2463] font-bold text-base hover:bg-green-400" onClick={() => navigate("/contacts")}>
                Contact Me
              </Button>


              <p className="text-center text-white/30 text-xs">© 2026 Jomar Escalera</p>
            </div>
          </SheetContent>
        </Sheet>

        {/* RIGHT SIDE - logo + name */}
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-green-300 p-1.5 rounded-lg">
            <Code2 className="w-5 h-5 text-[#0A2463]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-white font-bold text-base">Jomar Escalera</span>
            <span className="text-white/50 text-[11px]">Web & Game Dev</span>
          </span>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/projects/:id" element={<ProjectDetail />}></Route>
      </Routes>
    </section>
  )
}
