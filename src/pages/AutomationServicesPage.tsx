*/
import React from 'react';

const AutomationPackageCard = ({ title, description, outcome }: {title: string, description: string, outcome: string}) => (
    <div className="bg-slate-800/50 p-8 rounded-2xl border border-green-500/20 shadow-lg hover:shadow-green-500/20 transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-green-300 mb-3">{title}</h3>
        <p className="text-slate-300 mb-4">{description}</p>
        <p className="text-white font-semibold bg-green-500/20 p-3 rounded-lg">
            <strong>Key Outcome:</strong> {outcome}
        </p>
    </div>
);

const AutomationServicesPage = () => {
    return (
        <div className="py-20 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Put Your Business on Autopilot</h1>
                <p className="text-xl text-slate-300">
                    Our automation and AI solutions directly impact your bottom line: increase revenue, reduce costs, and give you back your most valuable asset—your time.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-12">
                <AutomationPackageCard 
                    title="The Revenue Booster"
                    description="Stop letting leads slip through the cracks. We'll deploy a powerful AI agent on your website that engages every visitor 24/7, answers their questions, qualifies them, and books appointments—turning your web traffic into tangible revenue, even while you sleep."
                    outcome="Maximize lead capture and increase conversion rates."
                />
                <AutomationPackageCard 
                    title="The Efficiency Engine"
                    description="Tired of repetitive, time-consuming manual work? We'll conduct a full audit of your daily operations and build a suite of automations to handle your most costly bottlenecks. From client intake to invoicing, we streamline your business to increase profit margins and free up your team."
                    outcome="Drastically reduce manual hours and operational costs."
                />
                <AutomationPackageCard 
                    title="The Custom AI Partner"
                    description="For the business that wants a true competitive advantage. We partner with you to design and build a completely custom AI solution tailored to your unique operational challenges, giving you a proprietary tool that your competition can't replicate."
                    outcome="Create a unique, long-term strategic asset that drives efficiency and growth."
                />
            </div>
        </div>
    );
};

export default AutomationServicesPage;
```tsx
/*
