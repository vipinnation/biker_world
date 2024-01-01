// const id =  process.env.twilio_Id
// const token = process.env.twilio_Token
  
// // Importing the Twilio module
// const twilio = require('twilio');
  
// // Creating a client
// const client = twilio(id, token);
  
// // Sending messages to the client
// client.messages
//     .create({
          
//         // Message to be sent
//         body: 'Hello from Hirola',
  
//         // Senders Number (Twilio Sandbox No.)
//         from: 'whatsapp:+14155238886',
  
//         // Number receiving the message
//         to: 'whatsapp:+919983809222'
//     })
//     .then(message => console.log("Message sent successfully" , message))
//     .done();