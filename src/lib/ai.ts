import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? "demo-server-only-placeholder"
});

export async function summarizeFeedback(feedback: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "user",
        content: `Summarize this launch feedback in one sentence: ${feedback}`
      }
    ]
  });

  return response.choices[0]?.message.content ?? "";
}
