import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import clsx from "clsx";
import { type ConversationItem } from "@/features/conversation";
import {
  AnalyzeResponseModal,
  openAnalyzeResponseModal,
  getAnalyzeTarget,
  type AnalyzeResponseInput,
} from "@/features/analyze-response";
import { BotChatBubble } from "./chat-bubble/BotChatBubble";
import { UserChatBubble } from "./chat-bubble/UserChatBubble";
import { TypingIndicator } from "./chat-bubble/TypingIndicator";

export type ChatWindowProps = {
  children: ReactNode;
  isTextMode: boolean;
  isResponding: boolean;
  isAudioPlaying: boolean;
  chatHistory: ConversationItem[];
  onAudioPlay: (audio: HTMLAudioElement) => void;
};

export function ChatBoxContainer({
  children,
  isTextMode,
  isResponding,
  isAudioPlaying,
  chatHistory,
  onAudioPlay,
}: ChatWindowProps) {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [analyzeTarget, setAnalyzeTarget] = useState<AnalyzeResponseInput>(
    getAnalyzeTarget(chatHistory)
  );

  const onAnalyzeResponse = useCallback(
    (answerIndex: number) => {
      setAnalyzeTarget(getAnalyzeTarget(chatHistory, answerIndex));
      openAnalyzeResponseModal();
    },
    [chatHistory]
  );

  // Each time a new item is added to the log, scroll to the bottom:
  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory.length]);

  return (
    <div
      className={clsx(
        "w-full duration-200 transition-all flex flex-col gap-4 h-full py-3",
        isTextMode ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className="overflow-y-auto h-[70dvh] w-full border border-base-300 rounded-md p-4"
        ref={chatContainerRef}
      >
        {chatHistory.map((item) =>
          item.author === "bot" ? (
            <BotChatBubble
              key={item.timestamp}
              chatItem={item}
              onAudioPlay={onAudioPlay}
              isTextMode={isTextMode}
              isAudioPlaying={isAudioPlaying}
            />
          ) : (
            <UserChatBubble
              key={item.timestamp}
              chatItem={item}
              onAnalyzeResponse={onAnalyzeResponse}
            />
          )
        )}
        {isResponding ? <TypingIndicator /> : null}
      </div>
      {children}
      <AnalyzeResponseModal
        questionText={analyzeTarget.questionText}
        responseText={analyzeTarget.responseText}
      />
    </div>
  );
}
