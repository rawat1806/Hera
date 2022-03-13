import Home from "./pages/Home/Home";
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import config from "./components/Chatbot/config";
import MessageParser from "./components/Chatbot/MessageParser";
import ActionProvider from "./components/Chatbot/ActionProvider";
import { ConditionallyRender } from "react-util-kit";
import "./App.css";

import {Footer, Header} from "./Containers";

const App = () => {
  const [showChatbot, toggleChatbot] = useState(true);
  return (
  <>
  <div className="App">
    <div>
      <Header/>

    </div>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
    
    <Home/>
    </div>
  </>  
  );
};

export default App;
