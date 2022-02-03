import React, { useState, useCallback, useEffect } from "react";
import "./typer_style.css";

const Typer = (props) => {
  const { loop, speed, delay, words } = props;
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing speed
  const [typingSpeed, setTypingSpeed] = useState(150);

  const handleTyping = useCallback(() => {
    // If loop is true, use module to find a word in the list of words
    // Otherwise keep the same as counter

    const index = loop ? counter % words.length : counter;
    const fullWord = words[index];

    if (isDeleting) {
      setTypingSpeed(speed / 2);
       // Set to start typing from right to left
      setText(fullWord.substring(0, text.length - 1));

      if (text === "") {
        setIsDeleting(false);
        setCounter(counter + 1);
      }
    } else {
      setTypingSpeed(speed);

      // Set to start typing from left to right
      setText(fullWord.substring(0, text.length + 1));

      // if all letters have been typed
      if (text === fullWord) {
        if (!loop && counter >= words.length - 1) {
          // if there is no loop, exit
          return;
        }
        setIsDeleting(true);
        setTypingSpeed(delay);
      }
    }
  }, [counter, delay, isDeleting, loop, speed, text, words]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [handleTyping, typingSpeed]);

  return (
    <span>
      <span>{text}</span>
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default Typer;
