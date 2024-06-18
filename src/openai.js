const { Configaration,OpenAIApi } = require('openai');
const configaration = new Configaration({ apiKey: "6nIoeYA2jxe8ytOIqJiWT3BlbkFJIrKSVsqzG5g0tlBPyZAz"});
const openai = new OpenAIApi(configaration);

export async function sendingMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model:'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0,
    });
    return res.data.choices[0].text;
}