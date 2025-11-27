
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, Heart, Calendar, User } from 'lucide-react';
import { PortfolioItem } from '../types';

const categories = ['All', 'Gourmet', 'Tourism', 'Hotel'];

const portfolioItems: PortfolioItem[] = [
  { 
    id: '1', 
    title: 'Neon Night Dotonbori', 
    category: 'Tourism', 
    imageUrl: 'https://images.unsplash.com/photo-1590253230536-1e099689e472?q=80&w=2000&auto=format&fit=crop', 
    likes: 1240,
    client: 'Osaka Tourism Bureau',
    date: '2023.10',
    description: '道頓堀のネオン街をサイバーパンクな視点で切り取った観光PRビジュアル。通常の観光写真とは一線を画す、映画的なカラーグレーディングで若年層のインバウンド旅行客へのリーチを最大化しました。'
  },
  { 
    id: '2', 
    title: 'The Ultimate Takoyaki', 
    category: 'Gourmet', 
    imageUrl: 'https://images.unsplash.com/photo-1628151016027-a0680e90b82f?q=80&w=2000&auto=format&fit=crop', 
    likes: 3500,
    client: 'Wanaka',
    date: '2023.11',
    description: '大阪のソウルフード「たこ焼き」のシズル感を極限まで引き出したショート動画撮影。湯気の立ち昇る瞬間やソースの照りをマクロレンズで捉え、深夜の飯テロコンテンツとしてSNSで拡散されました。'
  },
  { 
    id: '3', 
    title: 'Umeda Luxury Stay', 
    category: 'Hotel', 
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop', 
    likes: 890,
    client: 'InterContinental Osaka',
    date: '2023.12',
    description: '梅田のラグジュアリーホテルのスイートルームからの夜景と、上質な朝食体験を組み合わせたステイケーションPR。静謐さと高級感を重視したトーン＆マナーで、アッパー層へのブランディングに貢献。'
  },
  { 
    id: '5', 
    title: 'Deep Namba Vibes', 
    category: 'Gourmet', 
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop', 
    likes: 4200,
    client: 'Ura-Namba Association',
    date: '2024.01',
    description: '裏なんばの路地裏にある隠れ家バーや立ち飲み屋をはしご酒。カオスで活気ある大阪の夜の雰囲気を、臨場感あふれるPOV（一人称視点）映像で紹介し、若者の来店動機を創出しました。'
  },
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  return (
    <div className="pt-24 min-h-screen bg-osaka-black text-white relative">
      <div className="py-20 border-b border-white/10">
         <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">PORTFOLIO</h1>
            <p className="text-gray-400 font-bold tracking-widest text-xs md:text-sm">SELECTED WORKS & PROJECTS</p>
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-end items-center mb-16 gap-8">
            {/* Filter */}
            <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 border ${
                    activeCategory === cat 
                        ? 'bg-white text-osaka-black border-white' 
                        : 'bg-transparent text-gray-400 border-gray-800 hover:border-white hover:text-white'
                    }`}
                >
                    {cat}
                </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredItems.map((item) => (
            <div 
                key={item.id} 
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-osaka-red text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                <div className="flex justify-between items-end">
                    <h4 className="text-2xl font-bold font-sans tracking-tight">{item.title}</h4>
                    <div className="bg-white text-osaka-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-osaka-red hover:text-white transition-colors">
                        <ArrowUpRight size={18} />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/90 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]"
                onClick={() => setSelectedItem(null)}
            ></div>

            {/* Content */}
            <div className="relative bg-white text-osaka-black w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl md:grid md:grid-cols-2 shadow-2xl animate-[scaleUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
                
                {/* Image Side */}
                <div className="relative h-[40vh] md:h-full bg-gray-100">
                    <img 
                        src={selectedItem.imageUrl} 
                        alt={selectedItem.title} 
                        className="w-full h-full object-cover"
                    />
                    <button 
                        onClick={() => setSelectedItem(null)}
                        className="absolute top-6 left-6 md:hidden bg-white/50 backdrop-blur-md p-2 rounded-full text-osaka-black hover:bg-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Text Side */}
                <div className="p-8 md:p-12 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                             <span className="text-osaka-red font-bold tracking-widest text-xs uppercase">{selectedItem.category}</span>
                             <button 
                                onClick={() => setSelectedItem(null)}
                                className="hidden md:block p-2 -mr-2 -mt-2 text-gray-400 hover:text-osaka-black transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">{selectedItem.title}</h3>
                        
                        <div className="grid grid-cols-2 gap-6 mb-8 border-y border-gray-100 py-6">
                            <div>
                                <span className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                    <User size={14} /> Client
                                </span>
                                <span className="text-sm font-bold">{selectedItem.client || 'Private Project'}</span>
                            </div>
                            <div>
                                <span className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                    <Calendar size={14} /> Date
                                </span>
                                <span className="text-sm font-bold font-sans">{selectedItem.date || '2024'}</span>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-loose font-jp text-sm md:text-base mb-8">
                            {selectedItem.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-gray-100 mt-auto">
                        <div className="flex items-center gap-2 text-osaka-red font-bold">
                            <Heart size={20} fill="currentColor" />
                            <span className="font-sans">{selectedItem.likes.toLocaleString()}</span>
                            <span className="text-xs text-gray-400 font-normal ml-1">Likes</span>
                        </div>
                        <button className="bg-osaka-black text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-osaka-red transition-colors flex items-center gap-2">
                            VIEW ON SNS <ArrowUpRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};
