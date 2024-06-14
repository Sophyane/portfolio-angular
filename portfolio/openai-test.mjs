
import OpenAI from "openai";

const openai = new OpenAI();

const API_KEY = process.env.OPEN_API_KEY;

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });


  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer "sk-proj-D7c2f0FpNgwD7ybeZanrT3BlbkFJbA3WNNSnsjY7VHcVYFSd"`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        // We'll later replace the content with user input
        messages: [...messages, { "role": "user", "content": "This is a test!" }],
        temperature: 0.7,
      }),
    }
  );

  console.log(completion.choices[0]);
}

main();