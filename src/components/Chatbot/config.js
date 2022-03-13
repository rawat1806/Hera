import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "House of Hera",
  initialMessages: [
    createChatBotMessage(`Hello! Welcome To House of Hera. How can I help you?`),
  ],
  // widgets: [
  //   {
  //     widgetName: "options",
  //     widgetFunc: (props) => <Options {...props} />,
  //   },
  //   {
  //     widgetName: "javascriptQuiz",
  //     widgetFunc: (props) => <Quiz {...props} />,
  //     props: {
  //       questions: [
  //         {
  //           question: "What is closure?",
  //           answer:
  //             "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
  //           id: 1,
  //         },
  //         {
  //           question: "Explain prototypal inheritance",
  //           answer:
  //             "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
  //           id: 2,
  //         },
  //       ],
  //     },
  //   },
  // ],
};

export default config;
