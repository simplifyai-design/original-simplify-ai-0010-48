
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-6 relative z-10 bg-slate-900">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Get Started Today</h2>
          <p className="text-lg md:text-xl text-blue-700">Ready to transform your business with AI automation?</p>
        </div>

        <Card className="shadow-xl border-gray-500 bg-gray-800/50 backdrop-blur-sm border-orange-500/30">
          <CardContent className="p-4 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    className="mt-1 bg-gray-700 border-gray-500 text-white" 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                    className="mt-1 bg-gray-700 border-gray-500 text-white" 
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company" className="text-white">Company</Label>
                <Input 
                  id="company" 
                  name="company" 
                  value={formData.company} 
                  onChange={handleInputChange} 
                  className="mt-1 bg-gray-700 border-gray-500 text-white" 
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-white">Tell us about your automation needs</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  rows={4} 
                  className="mt-1 bg-gray-700 border-gray-500 text-white" 
                  placeholder="Describe your current challenges and automation goals..." 
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-base md:text-lg py-4 md:py-6 text-white bg-green-600 hover:bg-green-500">
                Schedule Free Consultation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
