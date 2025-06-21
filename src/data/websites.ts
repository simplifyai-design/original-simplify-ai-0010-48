// File Location: src/data/websites.ts
// This file contains the data for your website showcase modal.

// We are defining the structure of a website object for clarity
export interface Website {
  title: string;
  url: string;
  description: string;
}

// This is the list of your actual websites that will be displayed
export const websites: Website[] = [
  {
    title: "BidPro",
    url: "https://preview--bidpro-landing-revamp.lovable.app/",
    description: "A dynamic landing page for an AI-powered bidding tool for contractors."
  },
  {
    title: "Confirm AI",
    url: "https://confirmai.net/",
    description: "A powerful AI application for intelligent confirmation and scheduling."
  },
  {
    title: "Window Cover Prosper",
    url: "https://preview--window-cover-prosper-site.lovable.app/",
    description: "A modern, clean website for a local window covering business."
  },
  {
    title: "SH Forestry",
    url: "https://shforestry.net/",
    description: "A professional landing page for a forestry consulting service."
  },
  {
    title: "DFW Comfort Craft",
    url: "https://preview--dfw-comfort-craft.lovable.app/",
    description: "An approachable and user-friendly site for an HVAC services company."
  },
  {
    title: "Pixel Tailwind Canvas",
    url: "https://preview--pixel-tailwind-canvas.lovable.app/",
    description: "A creative exploration of Tailwind CSS capabilities and design."
  },
];
