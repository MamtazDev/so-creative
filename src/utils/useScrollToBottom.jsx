import { useEffect } from "react";

export function useScrollToBottom(chatBoxRef, chat, suggestionEnabled) {
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chat, chatBoxRef, suggestionEnabled]);
}
