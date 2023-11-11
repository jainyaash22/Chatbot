
import { useState, useRef } from "react";

import image from "./images/bot_image.jpg";

function Appp() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const endChat = () => {
   
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    getHumanMessage.innerText = "";
    getBotMessage.innerText = "";
  };


  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [time, setTime] = useState(`${hours}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  ); //using the useState hook to get the data from the local date and set it to the dateTime variable

  const checkStatus = (e) => {
  let isActive = true;
  if (dateTime === "Sunday, October 2023") {
      //if the dateTime is Thursday, oct 28 2023, the bot will be inactive
      isActive = false;
    }
    const status = document.querySelector(".status");
    // selecting the status class
    if (isActive === true) {
      //if the bot is active
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };

  const handleInput = () => {
  const botMessage = document.querySelector("#message1");
  const userMessage = document.querySelector("#message2");
  const inputRef = input.current;
  const getHumanMessage = humanMessage.current;
  const getBotMessage = botmessage.current;

    let badwords = ["bad|stupid|useless|bitch|crazy|nonsense|fool"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      // if the input contains bad words
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Please do not use bad words"; // display  message
        inputRef.value = ""; // clear the inpt
      }, 2000);
    }
    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];

    let words2 = new RegExp(welcome);//Regular expressions (regex or regexp) are a powerful tool for pattern matching and text manipulation.
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      // if the input contains welcome words
      getBotMessage.innerText = "Typing...";

      setTimeout(() => {
        getBotMessage.innerText = "Hello There ! how are you doing today?"; // display the messg
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear inp
      }, 2000);
    }
 
    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = ""; // clear  input
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }
    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let how = [
      "how are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you doin",
    ];

    let words5 = new RegExp(how);
    if(words5.test(document.querySelector("#input").value)) {
     const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine, thank you";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    } 
    let good = [
      "that's good|sound nice|that sounds awesome|that sounds great|thats good|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "😁";
        inputRef.value = ""; // clear the input
      }, 1000);
    }

    let response = [
      "I'm fine|i am fine|i am fine|I am fine today|I am fine today|i m fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "That is good";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let nameAsk = [
      "What's your name|whats your name|what's your name|what is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "My name is Bot";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner = [
      "who created you|Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner|owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "The owner of this bot is AriveGuru Technology Solutions. ";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner2 = [
      "who's Ariveguru|who's Ariveguru|who is ariveguru|who is ariveguru|ariveguru?|what ariveguru do|what ariveguru does",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
         "​ AriveGuru is a startup which provides engineering services and solutions that help businesses."

        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let ageAsk = [
      "how old startup it is|how old ariveguru |what is your age|how much experience do you have|experience ?|How old are you|how old are you|how old startup it is",
    ]; //adding the age-quest
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question ?
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Ariveguru have a 7+ years of experience.";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    getHumanMessage.innerText = inputRef.value; // display the message
  };

  return (

    <div className="App" onLoad={checkStatus}>
      <h1>Welcome ! how may i help you :-</h1>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>

            <div className="right">
              <div className="name">ChatBot</div>
              <div className="status">Active</div>
            </div>
          </div>

          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div
                  className="bot-message"
                  id="message1"
                  ref={botmessage}
                ></div>

                <div
                  className="human-message"
                  id="message2"
                  ref={humanMessage}
                ></div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message"
                  ref={input}
                /> 
               </div> 

              <div className="btn">
                <button onClick={handleInput}>
                  <i className="fas fa-paper-plane"></i>Send
                </button>
              </div>

              
              <div className="end-chat-button">
                <button onClick={endChat}>Reset Chat</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appp;