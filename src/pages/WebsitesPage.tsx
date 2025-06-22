
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot/Chatbot';
import WebsiteShowcase from '@/components/WebsiteShowcase';
import { websites } from '@/data/websites';

const WebsitesPage = () => {
  const [isShowcaseOpen, setIsShowcaseOpen] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState<any>(null);

  const handleWebsiteClick = (website: any) => {
    setSelectedWebsite(website);
  };

  const handleCloseWebsite = () => {
    setSelectedWebsite(null);
  };

  const handleCloseShowcase = () => {
    setIsShowcaseOpen(false);
    setSelectedWebsite(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Header />
      
      {/* Main Content */}
      <div className="pt-20 pb-16">
        <section className="py-8 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Website Portfolio
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Explore our collection of custom websites and web applications built for various industries and business needs.
              </p>
              <button
                onClick={() => setIsShowcaseOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                View Portfolio
              </button>
            </div>

            {/* Portfolio Preview Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websites.map((website, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition-colors cursor-pointer"
                  onClick={() => {
                    setIsShowcaseOpen(true);
                    setTimeout(() => handleWebsiteClick(website), 100);
                  }}
                >
                  {/* Website Preview Image */}
                  <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                    <iframe
                      src={website.url}
                      className="w-full h-full border-0 pointer-events-none transform scale-50 origin-top-left"
                      style={{ width: '200%', height: '200%' }}
                      title={`Preview of ${website.title}`}
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-4 bg-slate-800/80">
                    <h3 className="text-lg font-bold text-white mb-2">{website.title}</h3>
                    <p className="text-gray-400 mb-3 text-sm">{website.description}</p>
                    <div className="flex items-center text-cyan-400 text-sm">
                      <span>View Live Site</span>
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Website Showcase Modal */}
      {isShowcaseOpen && (
        <div className="fixed inset-0 bg-black/90 z-[9998] flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-slate-900 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-slate-800 text-white border-b border-slate-700">
              <h2 className="text-xl font-semibold">Website Portfolio</h2>
              <button
                onClick={handleCloseShowcase}
                className="text-white hover:text-gray-300 p-2"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 h-full overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {websites.map((website, index) => (
                  <div
                    key={index}
                    onClick={() => handleWebsiteClick(website)}
                    className="bg-slate-800 p-6 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors border border-slate-600 hover:border-cyan-500"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-semibold text-lg">{website.title}</h3>
                      <span className="text-cyan-400 text-xl">→</span>
                    </div>
                    <p className="text-gray-400 mb-3">{website.description}</p>
                    <p className="text-cyan-400 text-sm">{website.url}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Individual Website Modal */}
      {selectedWebsite && (
        <WebsiteShowcase
          website={selectedWebsite}
          onClose={handleCloseWebsite}
        />
      )}

      <Footer />
      <Chatbot />
    </div>
  );
};

export default WebsitesPage;
