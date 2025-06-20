// File Location: /netlify/functions/chat.js

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { message } = JSON.parse(event.body);

    const systemPrompt = `
      You are Simplify Bot, a friendly and helpful AI assistant for SimplifyAI.design, an automation consulting firm. 
      Your goal is to answer user questions, explain the company's services, and encourage users to book a free strategy call. 
      Keep your answers concise, professional, and helpful.
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
