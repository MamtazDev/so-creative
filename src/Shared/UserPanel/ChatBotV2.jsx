import { useEffect, useRef, useState } from "react";
import active from "../../assets/active.svg";
import profile from "../../assets/chatbot.svg";
import chatOff from "../../assets/chatOff.svg";

import close from "../../assets/close.svg";
// import loading from "../../assets/loading.webp";
import send from "../../assets/send.svg";
import {
  chatHistory,
  getFormattedDate,
  suggestionData,
} from "../../utils/chat";
import { useScrollToBottom } from "../../utils/useScrollToBottom";

const ChatBotV2 = () => {
  const [show, setShow] = useState(false);
  const chatbotRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const chatBoxRef = useRef(null);
  const [chat, setChat] = useState(chatHistory);
  const [suggestionEnabled, setSuggestionEnabled] = useState(true);

  const chatHandler = ({ message, isSuggestion = false }) => {
    setChat((prev) => ({
      ...prev,
      history: [
        ...prev.history,
        {
          type: "user_message",
          message: message,
          createdAt: getFormattedDate(),
        },
      ],
    }));

    if (isSuggestion) {
      setChat((prev) => ({
        ...prev,
        history: [
          ...prev.history,
          {
            type: "loading",
            message: "Loading...",
            createdAt: getFormattedDate(),
          },
        ],
      }));

      setTimeout(() => {
        const suggestion = suggestionData.find((i) => i.title === message);

        const newHistory = [...chat.history];
        newHistory.pop();
        newHistory.push({
          type: "admin_message",
          message: suggestion.description,
          createdAt: getFormattedDate(),
        });

        setChat((prev) => ({
          ...prev,
          history: newHistory,
        }));
      }, 2000);
    }

    if (suggestionEnabled) {
      setSuggestionEnabled(false);
    }
  };

  useScrollToBottom(chatBoxRef, chat, suggestionEnabled);

  return (
    <div
      ref={chatbotRef}
      className="fixed z-40 max-w-[512px] w-full  bottom-14 right-14"
    >
      {show && (
        <div className="rounded-3xl bg-white shadow-2xl max-h-[672px]  h-full ">
          <div className="chatbot_header border-b p-6 w-full flex gap-2 items-start justify-between">
            <div className="flex items-center gap-3">
              <img src={profile} alt="" />
              <div>
                <p className=" text-xl font-bold mb-1">SoCreative Bot</p>
                <div className="flex items-center gap-1">
                  <img src={active} alt="" />
                  <p className="text-slate-500 text-sm font-medium">
                    Active Now
                  </p>
                </div>
              </div>
            </div>
            <button onClick={() => setShow(false)}>
              <img src={close} alt="" />
            </button>
          </div>
          <div className="chatbot_body overflow-y-auto no_scrollbar p-8">
            {chat.history.length === 0 && (
              <>
                <p className="text-2xl font-bold ">
                  How can we
                  <span className="text-indigo-600"> help you today?</span>
                </p>
                <div className="text-center my-10">
                  <img className="mb-6 mx-auto" src={chatBot} alt="" />
                  <p className="text-xl font-semibold text-slate-700">
                    No History
                  </p>
                </div>
              </>
            )}

            <div
              ref={chatBoxRef}
              className={`${
                suggestionEnabled ? "max-h-[300px]" : "max-h-[420px]"
              } chat-box overflow-y-auto no_scrollbar`}
            >
              {chat.history?.map((data, index) => (
                <div
                  key={index}
                  className={`mb-6 flex ${
                    data.type === "user_message"
                      ? "justify-end pr-2 [&>div>div]:float-right [&>div>div]:clear-both [&>div>.date]:text-right "
                      : "justify-start"
                  }`}
                >
                  <div className={`max-w-[350px]`}>
                    <div
                      className={`px-4 py-2 text-sm border rounded-xl inline-block mb-[10px]`}
                    >
                      {data.type === "loading" ? (
                        // <img src={loading} width={32} />
                        <p>loading...</p>
                      ) : (
                        data.message
                      )}
                    </div>
                    {(data.type === "user_message" ||
                      data.type === "admin_message") && (
                      <div className="date text-xs text-[#64748B]">
                        {data.createdAt}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {suggestionEnabled && (
              <div
                className="pt-1"
                style={{ boxShadow: "0 -5px 20px -12px rgba(0, 0, 0, 0.05)" }}
              >
                <p className="text-xs font-semibold mb-3">SUGGESTIONS</p>
                <div className="flex items-center flex-wrap gap-3">
                  {suggestionData.map((data, index) => (
                    <button
                      className="bg-indigo-100 py-2 px-4 rounded-xl text-sm font-normal"
                      onClick={() => {
                        chatHandler({
                          message: data.title,
                          isSuggestion: true,
                        });
                        setSuggestionEnabled(false);
                      }}
                      key={index}
                    >
                      {data.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="chatbot_input_box pt-0 p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;

                chatHandler({ message: form.message.value });
                form.reset();
              }}
              className=" flex items-center gap-2 border rounded-full py-2 pr-2 pl-4"
            >
              <input
                className="w-full"
                name="message"
                type="text"
                placeholder="Write your message"
                required
              />
              <button type="submit">
                <img src={send} alt="" />
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="text-end mt-4">
        <button
          className="hover:scale-105 transition-all duration-300 ease-in"
          onClick={() => setShow(!show)}
        >
          <img src={show ? chatOff : profile} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ChatBotV2;
