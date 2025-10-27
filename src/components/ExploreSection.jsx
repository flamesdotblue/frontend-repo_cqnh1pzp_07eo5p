import { useMemo, useState } from 'react';
import { Search, Filter, Star, DollarSign, MapPin, Laptop } from 'lucide-react';

const SKILLS = [
  {
    id: 1,
    title: 'JavaScript Mentoring',
    category: 'Programming',
    mode: 'online',
    price: 25,
    rating: 4.9,
    img: '/assets/skill-js.jpg',
    bio: 'Frontend engineer helping you master React and modern JS.'
  },
  {
    id: 2,
    title: 'Acoustic Guitar Basics',
    category: 'Music',
    mode: 'offline',
    price: 18,
    rating: 4.7,
    img: '/assets/skill-guitar.jpg',
    bio: 'Learn chords, rhythm, and your first songs in weeks.'
  },
  {
    id: 3,
    title: 'Strength Training 101',
    category: 'Fitness',
    mode: 'offline',
    price: 30,
    rating: 4.8,
    img: '/assets/skill-fitness.jpg',
    bio: 'Build a sustainable routine tailored to your goals.'
  },
  {
    id: 4,
    title: 'Home Cooking: Pasta Night',
    category: 'Cooking',
    mode: 'online',
    price: 15,
    rating: 4.6,
    img: '/assets/skill-cooking.jpg',
    bio: 'Hands-on session—make restaurant-quality pasta at home.'
  }
];

export default function ExploreSection() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [mode, setMode] = useState('any');
  const [price, setPrice] = useState(50);
  const [rating, setRating] = useState(0);

  const filtered = useMemo(() => {
    return SKILLS.filter((s) =>
      (category === 'All' || s.category === category) &&
      (mode === 'any' || s.mode === mode) &&
      s.price <= price &&
      s.rating >= rating &&
      s.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, category, mode, price, rating]);

  return (
    <section id="explore" className="py-12 sm:py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Explore Skills</h2>
          <div className="text-sm text-slate-500 dark:text-slate-400">{filtered.length} results</div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="md:col-span-1 space-y-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium"><Filter size={16}/> Filters</div>

            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Search</label>
              <div className="mt-1 flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <Search size={16} className="text-slate-400"/>
                <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="e.g. React, Guitar..." className="w-full bg-transparent outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400"/>
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Category</label>
              <select value={category} onChange={(e)=>setCategory(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100">
                <option>All</option>
                <option>Programming</option>
                <option>Music</option>
                <option>Fitness</option>
                <option>Cooking</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Mode</label>
              <div className="mt-2 flex gap-2">
                <button onClick={()=>setMode('any')} className={`px-3 py-1.5 rounded-lg border ${mode==='any'?'bg-[#0E6FFF] text-white border-[#0E6FFF]':'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'}`}>Any</button>
                <button onClick={()=>setMode('online')} className={`px-3 py-1.5 rounded-lg border ${mode==='online'?'bg-[#0E6FFF] text-white border-[#0E6FFF]':'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'}`}><Laptop size={14} className="inline mr-1"/>Online</button>
                <button onClick={()=>setMode('offline')} className={`px-3 py-1.5 rounded-lg border ${mode==='offline'?'bg-[#0E6FFF] text-white border-[#0E6FFF]':'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'}`}><MapPin size={14} className="inline mr-1"/>In-person</button>
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-1"><DollarSign size={14}/> Max Price: ${price}</label>
              <input type="range" min="10" max="50" value={price} onChange={(e)=>setPrice(Number(e.target.value))} className="w-full"/>
            </div>

            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Min Rating: {rating.toFixed(1)}</label>
              <input type="range" min="0" max="5" step="0.5" value={rating} onChange={(e)=>setRating(Number(e.target.value))} className="w-full"/>
            </div>
          </div>

          <div className="md:col-span-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s)=> (
              <SkillCard key={s.id} skill={s}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img src={skill.img} alt={skill.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"/>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">{skill.title}</h3>
            <p className="text-xs mt-0.5 text-slate-500 dark:text-slate-400">{skill.category} • {skill.mode === 'online' ? 'Online' : 'In-person'}</p>
          </div>
          <div className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium">${skill.price}/hr</div>
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{skill.bio}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor"/>
            <span className="text-sm text-slate-700 dark:text-slate-200">{skill.rating}</span>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">Message</button>
            <button className="px-3 py-1.5 rounded-lg bg-[#0E6FFF] text-white">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}
