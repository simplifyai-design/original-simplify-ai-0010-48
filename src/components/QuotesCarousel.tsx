
import React from 'react';

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
  return (
    <div className="w-full overflow-hidden py-8 mt-8">
      <div className="animate-[scroll-quotes_60s_linear_infinite] whitespace-nowrap">
        {quotes.map((quote, index) => (
          <span
            key={index}
            className="inline-block mx-16 text-white/90 font-playfair text-lg md:text-xl italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "{quote.text}"
            <span className="text-white/70 not-italic text-base ml-2">
              ― {quote.source}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default QuotesCarousel;
