
import React, { useState, useEffect, useCallback } from 'react';
import { getFrierenQuote } from '../services/geminiService';
import { FrierenQuote } from '../types';

const QuoteSection: React.FC = () => {
  const [quote, setQuote] = useState<FrierenQuote | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    const newQuote = await getFrierenQuote();
    setQuote(newQuote);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <div className="max-w-2xl mx-auto mt-20 px-6 text-center">
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-300 to-transparent mx-auto mb-12 opacity-50" />
      
      <div className={`transition-all duration-1000 transform ${loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {quote && (
          <div className="space-y-6">
            <p className="text-xl md:text-2xl italic text-blue-100 leading-relaxed font-serif">
              「{quote.text}」
            </p>
            <div className="space-y-1">
              <p className="text-blue-300 font-bold tracking-widest">— {quote.speaker}</p>
              {quote.context && (
                <p className="text-xs text-blue-400/60 uppercase tracking-tighter">{quote.context}</p>
              )}
            </div>
          </div>
        )}
      </div>

      <button
        onClick={fetchQuote}
        disabled={loading}
        className="mt-12 px-6 py-2 border border-blue-400/30 rounded-full text-xs tracking-widest text-blue-200 hover:bg-blue-400/10 hover:border-blue-400/60 transition-all duration-300 disabled:opacity-50 flex items-center gap-2 mx-auto"
      >
        {loading ? '回憶中...' : '追尋新的記憶'}
      </button>
    </div>
  );
};

export default QuoteSection;
