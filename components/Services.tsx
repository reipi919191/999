
import React from 'react';
import { Megaphone, Camera, PenTool, Globe, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'pr',
    title: 'PR Promotion',
    description: 'Instagram、TikTok、YouTubeを活用し、貴社の魅力をターゲット層へダイレクトに届けます。フィード投稿、リール、ストーリーズ対応。',
    icon: <Megaphone size={24} />,
    priceRange: '¥50,000~'
  },
  {
    id: 'content',
    title: 'Creative Production',
    description: 'SNSやWebサイトで使用できるハイクオリティなビジュアルコンテンツを制作します。シズル感のある料理撮影から空間撮影まで。',
    icon: <Camera size={24} />,
    priceRange: '¥30,000~'
  },
  {
    id: 'consulting',
    title: 'SNS Consulting',
    description: 'アカウントの立ち上げから運用代行、分析まで。大阪のトレンドを熟知した視点で、ファンを増やすための戦略を提案します。',
    icon: <PenTool size={24} />,
    priceRange: '¥10,000/hr'
  },
  {
    id: 'guide',
    title: 'Private Guide',
    description: 'メディア取材のアテンドや、VIP向けのディープな大阪グルメツアー・フォトウォークを提供します。英語対応可能。',
    icon: <Globe size={24} />,
    priceRange: 'Contact'
  }
];

export const Services: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-osaka-light">
      <div className="bg-osaka-black text-white py-20">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">SERVICES</h1>
            <p className="text-gray-400 font-bold tracking-widest text-xs md:text-sm">WHAT I CAN DO FOR YOU</p>
          </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 gap-4">
          {services.map((service) => (
            <div 
                key={service.id} 
                className="group bg-white p-8 md:p-12 rounded-3xl border border-transparent hover:border-gray-200 transition-all duration-500 hover:shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
              <div className="flex items-start gap-6 md:w-1/2">
                <div className="w-12 h-12 bg-osaka-gray rounded-full flex items-center justify-center text-osaka-black group-hover:bg-osaka-red group-hover:text-white transition-colors shrink-0">
                    {service.icon}
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-osaka-red transition-colors">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-jp">
                        {service.description}
                    </p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-8 md:w-1/2 border-t md:border-t-0 border-gray-100 pt-6 md:pt-0">
                 <div className="flex flex-col md:items-end">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">STARTING FROM</span>
                    <span className="text-xl font-bold font-sans">{service.priceRange}</span>
                 </div>
                 <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-osaka-black group-hover:border-osaka-black group-hover:text-white transition-all">
                    <ArrowUpRight size={20} />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
