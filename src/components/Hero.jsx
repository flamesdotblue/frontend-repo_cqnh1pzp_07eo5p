import { Rocket, Search, Star } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section className="bg-[#F7F9FC] dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white dark:bg-slate-900 shadow border border-slate-200 dark:border-slate-800 mb-4">
            <Rocket size={16} className="text-[#0E6FFF]"/>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-200">New: SkillSwap — Exchange knowledge with peers</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Learn a Skill. Teach a Skill.
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-prose">
            Discover mentors, book sessions, and grow your abilities. Or showcase your expertise and start teaching today.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#explore" onClick={onExploreClick} className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#0E6FFF] text-white shadow hover:opacity-95">
              Explore Skills
            </a>
            <a href="#offer" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#FF6B6B] text-white shadow hover:opacity-95">
              Offer a Skill
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <Search className="text-[#0E6FFF]" size={18}/>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Find the right mentor with powerful filters</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <Star className="text-amber-400" size={18}/>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Trusted reviews to guide your choice</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="inline-flex h-5 w-5 rounded-full bg-[#FF6B6B]"></span>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Seamless booking with calendar slots</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0E6FFF]/15 via-white to-[#FF6B6B]/20 dark:via-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <img src="/assets/learning-hero.jpg" alt="Skill learning" className="w-full h-full object-cover mix-blend-multiply"/>
          </div>
        </div>
      </div>
    </section>
  );
}
