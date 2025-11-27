
import React from 'react';
import { Mail, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="py-20 border-b border-gray-100">
          <div className="container mx-auto px-6 md:px-12 text-center">
             <span className="text-osaka-red font-bold tracking-widest text-xs mb-4 block">GET IN TOUCH</span>
             <h1 className="text-5xl md:text-7xl font-black text-osaka-black tracking-tighter mb-4">CONTACT</h1>
          </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-osaka-black mb-6 tracking-tighter">
                Let's create something<br />
                <span className="text-osaka-red">extraordinary.</span>
            </h2>
            <p className="text-gray-500 font-jp">
                お仕事のご依頼、コラボレーションのご相談はこちらから。<br />
                大阪から世界へ、新しい価値を共に創りましょう。
            </p>
        </div>

        <div className="max-w-2xl mx-auto">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full bg-osaka-light border-b-2 border-gray-200 p-4 focus:border-osaka-black outline-none transition-all font-sans" placeholder="山田 太郎" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full bg-osaka-light border-b-2 border-gray-200 p-4 focus:border-osaka-black outline-none transition-all font-sans" placeholder="hello@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-osaka-light border-b-2 border-gray-200 p-4 focus:border-osaka-black outline-none transition-all font-jp" placeholder="お問い合わせ内容..."></textarea>
              </div>

              <div className="text-center pt-8">
                <button className="bg-osaka-black text-white px-12 py-5 rounded-full font-bold text-sm tracking-widest hover:bg-osaka-red transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    SEND MESSAGE
                </button>
              </div>
            </form>

            <div className="mt-20 flex justify-center gap-8 border-t border-gray-100 pt-12">
                <a href="mailto:hello@osakavibes.jp" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-osaka-black transition-colors">
                    <Mail size={18} /> hello@osakavibes.jp
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-osaka-black transition-colors">
                    <Instagram size={18} /> @osaka_vibes
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};
