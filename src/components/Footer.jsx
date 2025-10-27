export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#0E6FFF] grid place-items-center shadow-sm">
              <span className="text-white font-bold">SS</span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white text-lg">SkillSwap</span>
          </div>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-xs">
            Exchange knowledge, discover mentors, and grow together. Learn a skill. Teach a skill.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">Explore</h4>
          <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
            <li><a href="#explore" className="hover:text-[#0E6FFF]">Skills</a></li>
            <li><a href="#how" className="hover:text-[#0E6FFF]">How it Works</a></li>
            <li><a href="#offer" className="hover:text-[#0E6FFF]">Offer a Skill</a></li>
            <li><a href="#auth" className="hover:text-[#0E6FFF]">Login / Signup</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">Resources</h4>
          <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
            <li><a href="#faq" className="hover:text-[#0E6FFF]">FAQ</a></li>
            <li><a href="#support" className="hover:text-[#0E6FFF]">Support</a></li>
            <li><a href="#privacy" className="hover:text-[#0E6FFF]">Privacy</a></li>
            <li><a href="#terms" className="hover:text-[#0E6FFF]">Terms</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">Newsletter</h4>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="you@example.com" className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"/>
            <button className="px-4 py-2 rounded-lg bg-[#0E6FFF] text-white">Join</button>
          </form>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} SkillSwap. All rights reserved.</div>
    </footer>
  );
}
