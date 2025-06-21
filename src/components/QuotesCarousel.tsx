
import React, { useState, useEffect } from 'react';

const quotes = [
  {
    text: "Only 31% of small businesses have automated even one function—yet 88% of those that do say it's helped them compete with much larger companies.",
    source: "Flair HR & Salesforce"
  },
  {
    text: "Companies that respond to leads within 5 minutes are 100× more likely to connect and convert—automation makes that possible 24/7.",
    source: "Harvard Business Review"
  },
  {
    text: "Generative AI tools like ChatGPT and Copilot help teams complete tasks up to 56% faster—giving you time back for what matters.",
    source: "Harvard Business Review"
  },
  {
    text: "AI 'agents' can act as virtual employees: answering phones, qualifying leads, booking appointments—so you don't have to.",
    source: "Sonary & Social Sharks Marketing"
  },
  {
    text: "Organizations investing in automation see revenue hikes of 5–7% and productivity gains up to 15%.",
    source: "SnapLogic (Cebr / Business Wire)"
  },
  {
    text: "Automation in customer service drives a 36% repeat‑purchase boost and slashes response time by over 50%.",
    source: "Gorgias CX data"
  }
];

const QuotesCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 500); // Half second for exit animation
    }, 4000); // Show each quote for 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-8 mt-8 min-h-[100px] flex items-center justify-center">
      <div
        className={`text-white/90 font-playfair text-lg md:text-xl italic text-center px-8 transition-all duration-500 ${
          isVisible 
            ? 'opacity-100 transform translate-x-0' 
            : 'opacity-0 transform translate-x-8'
        }`}
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        "{quotes[currentQuote].text}"
        <div className="text-white/70 not-italic text-base mt-2">
          ― {quotes[currentQuote].source}
        </div>
      </div>
    </div>
  );
};

export default QuotesCarousel;
