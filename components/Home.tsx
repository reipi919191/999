
import React from 'react';
import { Hero } from './Hero';
import { PageRoute } from '../types';
import { ArrowRight, Star } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      
      {/* Digest: About */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img 
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" 
                        alt="Profile" 
                        className="rounded-3xl shadow-2xl w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                <div className="md:w-1/2">
                    <span className="text-osaka-red font-bold tracking-widest text-xs mb-4 block">WHO I AM</span>
                    <h2 className="text-4xl md:text-5xl font-black text-osaka-black mb-6 tracking-tighter leading-tight">
                        Creating Culture,<br />
                        Not Just Content.
                    </h2>
                    <p className="text-gray-600 mb-8 font-jp leading-loose">
                        ただの「紹介」で終わらせない。その場所にあるストーリー、空気感、そして熱量を、シネマティックな映像と言葉で紡ぎ出します。大阪・関西を中心に、観光局、ホテル、飲食店など50社以上のPR実績を持つクリエイターです。
                    </p>
                    <a href={`#/${PageRoute.ABOUT}`} className="inline-flex items-center gap-2 font-bold text-sm tracking-widest border-b border-osaka-black pb-1 hover:text-osaka-red hover:border-osaka-red transition-all">
                        READ MORE <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* Digest: Services - Marquee style */}
      <section className="py-24 bg-osaka-black text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
            <div>
                 <span className="text-osaka-red font-bold tracking-widest text-xs mb-2 block">SERVICES</span>
                 <h2 className="text-3xl font-black tracking-tighter">What I Offer</h2>
            </div>
            <a href={`#/${PageRoute.SERVICES}`} className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 hover:text-white transition-colors">
                VIEW ALL <ArrowRight size={14} />
            </a>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-12 scrollbar-hide">
            {[
                { title: 'SNS PR Promotion', desc: 'Instagram/TikTokでの圧倒的なリーチ' },
                { title: 'Video Production', desc: 'シネマティックな映像制作' },
                { title: 'Inbound Guide', desc: '英語対応可能なVIPガイド' },
                { title: 'Creative Consulting', desc: 'ブランドの世界観構築' }
            ].map((item, i) => (
                <div key={i} className="min-w-[280px] md:min-w-[350px] bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <Star className="text-osaka-red mb-4" size={24} />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 font-jp">{item.desc}</p>
                </div>
            ))}
        </div>
        <div className="text-center mt-8 md:hidden">
            <a href={`#/${PageRoute.SERVICES}`} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white border-b border-white pb-1">
                VIEW ALL SERVICES
            </a>
        </div>
      </section>

      {/* Digest: Portfolio CTA */}
      <section className="py-32 bg-osaka-red text-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                SEE THE<br />WORLD.
            </h2>
            <p className="mb-12 text-lg font-bold tracking-widest opacity-90">LATEST WORKS & PROJECTS</p>
            <a href={`#/${PageRoute.PORTFOLIO}`} className="bg-white text-osaka-red px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:bg-osaka-black hover:text-white transition-colors shadow-2xl">
                OPEN PORTFOLIO
            </a>
        </div>
      </section>
    </div>
  );
};
