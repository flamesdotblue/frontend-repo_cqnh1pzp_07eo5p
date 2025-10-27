import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExploreSection from './components/ExploreSection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.title = 'SkillSwap — Learn a Skill. Teach a Skill.';
  }, []);

  const handleSearch = (q) => {
    const el = document.getElementById('explore');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-slate-950 text-[#0F1724] dark:text-slate-100">
      <Navbar onSearch={handleSearch} />
      <main>
        <Hero onExploreClick={handleSearch} />
        <HowItWorks />
        <ExploreSection />
        <Testimonials />
        <OfferSection />
      </main>
      <Footer />
    </div>
  );
}

function HowItWorks(){
  const steps = [
    { title: 'Find', desc: 'Search mentors by category, price, rating, and mode.' },
    { title: 'Book', desc: 'Pick a time slot that works and confirm instantly.' },
    { title: 'Learn', desc: 'Join your session and grow your skills.' }
  ];
  return (
    <section id="how" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">How it Works</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="h-10 w-10 rounded-xl grid place-items-center bg-[#0E6FFF]/10 text-[#0E6FFF] font-semibold">{i+1}</div>
              <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials(){
  const items = [
    { name: 'Ava', text: 'Found an amazing React mentor. Booked in minutes and learned a ton!', role: 'Developer' },
    { name: 'Liam', text: 'Taught guitar to 5 students this month. Great way to share my passion.', role: 'Guitarist' },
    { name: 'Mia', text: 'The booking flow and reviews made it easy to choose the right coach.', role: 'Student' }
  ];
  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Loved by learners and mentors</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {items.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#F7F9FC] dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#0E6FFF]/20"/>
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferSection(){
  return (
    <section id="offer" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Offer a Skill</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Create your listing and start teaching.</p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600 dark:text-slate-300">Title</label>
              <input className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" placeholder="e.g. Beginner Piano Lessons"/>
            </div>
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Category</label>
              <select className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <option>Programming</option>
                <option>Music</option>
                <option>Fitness</option>
                <option>Cooking</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Price (USD/hour)</label>
              <input type="number" min="0" className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" placeholder="25"/>
            </div>
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Duration (mins)</label>
              <input type="number" min="15" className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" placeholder="60"/>
            </div>
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Mode</label>
              <select className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <option>Online</option>
                <option>In-person</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600 dark:text-slate-300">Description</label>
              <textarea rows={4} className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" placeholder="What will learners get from your session?"/>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600 dark:text-slate-300">Image</label>
              <div className="mt-1 p-6 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 text-center text-slate-500">Upload image (placeholder)</div>
            </div>
            <div className="sm:col-span-2 flex items-center gap-3">
              <button type="button" className="px-5 py-2.5 rounded-lg bg-[#0E6FFF] text-white">Publish</button>
              <span className="text-sm text-slate-500">Client-side validation only</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
