
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';

export const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-osaka-light py-20 border-b border-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-5xl md:text-7xl font-black text-osaka-black tracking-tighter mb-4">ABOUT ME</h1>
            <p className="text-gray-500 font-bold tracking-widest text-xs md:text-sm">THE STORY BEHIND OSAKA VIBES</p>
          </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
            
            {/* Top Layout: Narrative + Visuals */}
            <div className="flex flex-col lg:flex-row gap-16 mb-24 items-start">
                
                {/* Left Column: Narrative */}
                <div className="lg:w-1/2 sticky top-32">
                    <span className="inline-block py-1 px-3 border border-osaka-black rounded-full text-[10px] font-bold tracking-widest mb-6 bg-osaka-black text-white">
                        PHILOSOPHY
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.1] text-osaka-black mb-10">
                        BEYOND<br />
                        THE HYPE<span className="text-osaka-red">.</span>
                    </h2>
                    
                    <h3 className="text-xl font-bold mb-6 text-osaka-black font-jp">
                        「流行り」で終わらせない、<br/>本物の価値を。
                    </h3>

                    <div className="space-y-6 text-gray-600 font-jp leading-loose text-sm md:text-base mb-10">
                        <p>
                            SNSでバズることは、ゴールではありません。<br/>
                            私のミッションは、大阪という街が持つエネルギー、歴史、そして人々の温かさを、一過性のブームではなく、長く愛される「ブランド」として確立することです。
                        </p>
                        <p>
                            元Web広告代理店のディレクターとしての経験を活かし、数値に基づいた戦略と、感性を刺激するクリエイティブを融合。<br/>
                            単なるインフルエンサーの枠を超え、あなたのビジネスに確かな成果と熱狂をもたらすパートナーとして伴走します。
                        </p>
                    </div>

                    <div className="bg-osaka-light p-6 rounded-2xl border border-gray-100">
                        <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-4 uppercase">PROFILE</h4>
                        <div className="flex gap-4 items-start">
                            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-lg mb-1">OSAKA VIBES <span className="text-sm font-normal text-gray-500">/ Kenta</span></p>
                                <p className="text-xs text-gray-500 leading-relaxed font-jp">
                                    1995年 大阪・西成区生まれ。東京の広告代理店にてSNSマーケティングに従事した後、2020年にUターン独立。
                                    観光局、鉄道会社、大手ホテルチェーンなど年間50社以上のPRを手がける。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Stats & Bento Grid */}
                <div className="lg:w-1/2 w-full flex flex-col gap-6">
                    
                    {/* Hero Image in Grid */}
                    <div className="w-full h-[300px] md:h-[400px] relative rounded-3xl overflow-hidden group shadow-lg">
                        <img 
                            src="https://images.unsplash.com/photo-1534438097545-a2c22c57f271?q=80&w=2070&auto=format&fit=crop" 
                            alt="Shooting Scene" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="font-bold text-xl md:text-2xl">Cinematic & Authentic</p>
                            <p className="text-sm opacity-80 font-jp">空気感まで切り取る、没入感のある映像表現。</p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-osaka-black text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between items-start h-[180px] hover:-translate-y-1 transition-transform duration-300">
                            <span className="text-xs font-bold tracking-widest opacity-50">FOLLOWERS</span>
                            <div>
                                <span className="text-4xl md:text-5xl font-black tracking-tighter">150K<span className="text-osaka-red">+</span></span>
                                <p className="text-[10px] md:text-xs mt-2 opacity-60 font-jp">総フォロワー数 (IG/TikTok)</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 text-osaka-black rounded-3xl p-6 md:p-8 flex flex-col justify-between items-start h-[180px] hover:-translate-y-1 transition-transform duration-300">
                            <span className="text-xs font-bold tracking-widest opacity-50">TOTAL VIEWS</span>
                            <div>
                                <span className="text-4xl md:text-5xl font-black tracking-tighter">50M<span className="text-osaka-red">+</span></span>
                                <p className="text-[10px] md:text-xs mt-2 opacity-60 font-jp">年間総再生回数</p>
                            </div>
                        </div>
                    </div>

                    {/* Capabilities List */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                        <h4 className="text-sm font-bold mb-4">CAPABILITIES</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm font-jp text-gray-600">
                                <CheckCircle2 size={16} className="text-osaka-red" />
                                縦型ショート動画制作 (Reels / TikTok)
                            </li>
                            <li className="flex items-center gap-3 text-sm font-jp text-gray-600">
                                <CheckCircle2 size={16} className="text-osaka-red" />
                                シネマティックな店舗・空間撮影
                            </li>
                            <li className="flex items-center gap-3 text-sm font-jp text-gray-600">
                                <CheckCircle2 size={16} className="text-osaka-red" />
                                SNSアカウント運用コンサルティング
                            </li>
                            <li className="flex items-center gap-3 text-sm font-jp text-gray-600">
                                <CheckCircle2 size={16} className="text-osaka-red" />
                                インバウンド向け英語ガイド
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Brand Logos / Trust Section */}
            <div className="border-t border-gray-100 pt-16">
                <p className="text-center text-xs font-bold text-gray-400 tracking-[0.2em] mb-10">TRUSTED BY BRANDS & MEDIA</p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Using text logos for cleaner look and no external assets dependency */}
                <span className="text-xl md:text-2xl font-black font-sans tracking-tighter">OSAKA METRO</span>
                <span className="text-xl md:text-2xl font-black font-sans tracking-tighter">GRAND FRONT</span>
                <span className="text-xl md:text-2xl font-black font-sans tracking-tighter">THE RITZ-CARLTON</span>
                <span className="text-xl md:text-2xl font-black font-sans tracking-tighter">HANKYU</span>
                <span className="text-xl md:text-2xl font-black font-sans tracking-tighter">KAIYUKAN</span>
                </div>
                
                <div className="text-center mt-12">
                    <a href={`#/${PageRoute.CONTACT}`} className="inline-flex items-center gap-2 text-osaka-red font-bold tracking-widest border-b border-osaka-red pb-1 hover:opacity-70 transition-opacity">
                        VIEW MEDIA KIT <ArrowRight size={16} />
                    </a>
                </div>
            </div>

        </div>
      </section>
    </div>
  );
};
