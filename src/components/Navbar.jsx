import { useState } from 'react';
import { Menu, X, Search, Sun, Moon, User } from 'lucide-react';

export default function Navbar({ onSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [query, setQuery] = useState('');

  const toggleDark = () => {
    setDarkMode((d) => !d);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-[#0E6FFF] grid place-items-center shadow-sm">
            <span className="text-white font-bold">SS</span>
          </div>
          <span className="font-semibold text-slate-900 dark:text-white text-lg">SkillSwap</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-slate-700 dark:text-slate-200">
          <a href="#explore" className="hover:text-[#0E6FFF]">Explore</a>
          <a href="#how" className="hover:text-[#0E6FFF]">How it Works</a>
          <a href="#testimonials" className="hover:text-[#0E6FFF]">Testimonials</a>
          <a href="#offer" className="hover:text-[#0E6FFF]">Offer a Skill</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button aria-label="Toggle dark mode" onClick={toggleDark} className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800">
            {darkMode ? <Sun size={18} className="text-amber-400"/> : <Moon size={18} className="text-slate-700 dark:text-slate-200"/>}
          </button>
          <a href="#auth" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
            <User size={18}/> Login
          </a>
          <a href="#offer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0E6FFF] text-white shadow hover:opacity-95">
            Offer a Skill
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700" onClick={() => setMobileOpen((o) => !o)} aria-label="Toggle Menu">
          {mobileOpen ? <X/> : <Menu/>}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pb-4">
          <form onSubmit={handleSubmit} className="flex items-center gap-2 py-3">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <Search size={18} className="text-slate-500"/>
              <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search skills..." className="w-full bg-transparent outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400"/>
            </div>
            <button className="px-3 py-2 rounded-lg bg-[#0E6FFF] text-white">Search</button>
          </form>
          <div className="grid gap-2 text-slate-700 dark:text-slate-200">
            <a onClick={()=>setMobileOpen(false)} href="#explore" className="py-2">Explore</a>
            <a onClick={()=>setMobileOpen(false)} href="#how" className="py-2">How it Works</a>
            <a onClick={()=>setMobileOpen(false)} href="#testimonials" className="py-2">Testimonials</a>
            <a onClick={()=>setMobileOpen(false)} href="#offer" className="py-2">Offer a Skill</a>
            <div className="flex items-center gap-2 py-2">
              <button onClick={toggleDark} className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 w-full flex items-center justify-center gap-2">
                {darkMode ? <Sun size={18}/> : <Moon size={18}/>} Theme
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
