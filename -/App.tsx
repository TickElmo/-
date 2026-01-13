
import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import MagicParticles from './components/MagicParticles';
import QuoteSection from './components/QuoteSection';

const App: React.FC = () => {
  // 設定目標時間：1月18日 18:30
  const getTargetDate = () => {
    const now = new Date();
    // 考慮到現在是 2025 年初，如果 1/18 已過，則設為 2026
    const target = new Date(2026, 0, 18, 18, 30, 0); 
    if (now > target) {
      target.setFullYear(now.getFullYear() + 1);
    }
    return target;
  };

  const targetDate = getTargetDate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
      <MagicParticles />
      
      {/* 裝飾背景圖 */}
      <div 
        className="absolute inset-0 z-[-1] opacity-30 pointer-events-none bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-slate-900/70 z-[-1]" />

      {/* 主要內容區塊 */}
      <main className="z-10 w-full max-w-6xl mx-auto text-center space-y-12">
        <header className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="h-px w-12 bg-blue-400/30" />
             <span className="text-blue-300 text-xs md:text-sm tracking-[0.4em] uppercase font-bold">Special Screening Countdown</span>
             <div className="h-px w-12 bg-blue-400/30" />
          </div>
          <h1 className="text-6xl md:text-9xl font-bold font-playfair text-white text-glow tracking-tighter">
            葬送のフリーレン
          </h1>
          <p className="text-xl md:text-3xl text-blue-200/90 font-serif tracking-[0.2em] mt-6">
            — 邁向「一月十八日」的旅程 —
          </p>
        </header>

        <section className="relative py-8">
          <div className="absolute -inset-24 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          <CountdownTimer targetDate={targetDate} />
          
          <div className="mt-10 space-y-3 relative z-20">
            <p className="text-blue-100/80 text-lg md:text-xl tracking-widest font-serif">
              上映時間：2026年1月18日 18:30
            </p>
            <p className="text-blue-400/50 text-sm italic font-serif">
              「在勇者欣梅爾逝世五十年後，旅程再次開始。」
            </p>
          </div>
        </section>

        <QuoteSection />

        <footer className="mt-24 pt-10 border-t border-white/10 w-full max-w-2xl mx-auto flex flex-col items-center gap-6">
          <div className="flex gap-10 text-blue-300/50 text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
            <a href="#" className="hover:text-blue-200 transition-colors">物語</a>
            <a href="#" className="hover:text-blue-200 transition-colors">登場人物</a>
            <a href="#" className="hover:text-blue-200 transition-colors">映像</a>
          </div>
          <div className="text-center">
            <p className="text-blue-500/40 text-[10px] md:text-xs">
              © 2025 Frieren: Beyond Journey's End Fan Site.
            </p>
            <p className="text-blue-500/20 text-[10px] mt-1">
              本網站為粉絲個人製作，與官方作品無關。
            </p>
          </div>
        </footer>
      </main>

      {/* 裝飾邊框 */}
      <div className="fixed top-0 left-0 w-24 md:w-48 h-24 md:h-48 border-t-2 border-l-2 border-blue-400/10 m-6 md:m-12 rounded-tl-[40px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-24 md:w-48 h-24 md:h-48 border-b-2 border-r-2 border-blue-400/10 m-6 md:m-12 rounded-br-[40px] pointer-events-none" />
    </div>
  );
};

export default App;
