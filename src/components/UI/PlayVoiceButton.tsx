import { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

import { uiContext } from "@src/context/ui";

export const PlayVoiceButton = () => {
  const { playVoice, handleTogglePlayVoice } = useContext(uiContext);

  return (
    <>
      <button
        className="fixed top-60 right-4 flex items-center justify-center w-12 h-12 rounded-lg bg-red-500 hover:bg-red-600 transition-colors z-40"
        onClick={() => handleTogglePlayVoice(!playVoice)}
      >
        {playVoice ? (
          <FaPause className="text-xl text-white" />
        ) : (
          <FaPlay className="text-xl text-white" />
        )}
      </button>
    </>
  );
};
