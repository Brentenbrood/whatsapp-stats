const WhatsappParser = require('whatsapp-chat-parser');
let parsedMessages: string[];

export default function InitParse(fileContents:string) {
    
    WhatsappParser
    .parseString(fileContents)
    .then((messages: string[]) => {
        let parsedMessages = messages;
    })
    .catch((err: string) => {
        console.log(err);
    });
};