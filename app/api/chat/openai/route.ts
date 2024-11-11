import axios from 'axios';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { message } = await request.json();

  let data = JSON.stringify({
    "model": "gpt-4o-mini",
    "messages": [
      {
        "role": "user",
        "content": message
      }
    ],
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.openai.com/v1/chat/completions',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    data: data
  };

  return axios.request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      const aiMessage = response.data.choices[0].message.content;
      return new Response(JSON.stringify({ message: aiMessage }), { status: 200 });
    })
    .catch((error) => {
      console.log(error);
      return new Response(JSON.stringify({ message: 'Error communicating with OpenAI' }), { status: 500 });
    });
}