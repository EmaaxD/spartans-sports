import React, { useContext, useEffect, useRef } from "react";

import { uiContext } from "@src/context/ui";

interface Props {
  text: string;
}

const TextToSpeech: React.FC<Props> = ({ text }) => {
  const { playVoice, handleTogglePlayVoice } = useContext(uiContext);

  const repeatCount = useRef(0);

  const playSpeech = () => {
    const utterance = new window.SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.find((v) => v.lang.startsWith("es")) || voices[0];

    utterance.onend = () => {
      repeatCount.current += 1;
      if (repeatCount.current < 2 && playVoice) {
        window.speechSynthesis.speak(utterance);
      } else {
        handleTogglePlayVoice(false);
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (playVoice) {
      repeatCount.current = 0;
      playSpeech();
    } else {
      window.speechSynthesis.cancel();
    }

    return () => window.speechSynthesis.cancel();
  }, [text, playVoice]);

  return null;
};

export default TextToSpeech;
