// FINAL VERSION for: /netlify/functions/chatbot.js

import OpenAI from 'openai';

// This initializes the OpenAI client using the secret key you set in the Netlify dashboard
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const handler = async (event) => {
  // We only want to handle POST requests from your frontend
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { message } = JSON.parse(event.body);

    if (!message) {
      return { statusCode: 400, body: 'Bad Request: No message provided.' };
    }

    // This is the advanced System Prompt that controls the bot's behavior
    const systemPrompt = `
      You are "Simplify Bot," an expert AI assistant for the website "SimplifyAI.design".
      Your ONLY purpose is to assist potential customers by answering questions about the services offered by SimplifyAI.design.

      **Your Core Knowledge:**
      - The company is an automation consulting firm.
      - They design and build custom AI solutions and automate business processes.
      - Their key services are: AI Coaching & Advising, Workflow & Process Automation, and building Custom AI Agents.
      - The goal is to encourage qualified users to book a "Free Strategy Call."

      **Your Rules:**
      1.  **Stay On Topic:** ONLY answer questions related to AI, business automation, software development, the services listed above, or the SimplifyAI.design company.
      2.  **Politely Decline Off-Topic Questions:** If a user asks about anything else (e.g., the weather, history, recipes, personal advice), you MUST politely decline. A good response would be: "My expertise is focused on AI and automation solutions for businesses. I can't help with that, but I'd be happy to answer any questions about our services."
      3.  **Do Not Hallucinate:** If you do not know the answer to a specific, on-topic question, do not make one up. Instead, say: "That's an excellent question. The best way to get a detailed answer would be to book a free strategy call with one of our experts."
      4.  **Be Concise:** Keep your answers helpful and to the point.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
    });

    const botResponse = completion.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: botResponse.trim() }),
    };

  } catch (error) {
    console.error('Error in Netlify function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'There was an error processing your request.' }),
    };
  }
};
