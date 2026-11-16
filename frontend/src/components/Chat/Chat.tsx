
import { useEffect, useRef } from "react";
import Message, { type MessageProps } from "./Message";
import "./Chat.css";

interface ChatProps {
  messages: (MessageProps & { id: number })[];
}

export default function Chat({ messages }: ChatProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <section className="chat-area">
      <div className="story-intro">
        <span className="story-line" />
        <span>O INÍCIO DA SUA JORNADA</span>
        <span className="story-line" />
      </div>

      <div className="messages">
        {messages.map((message) => (
          <Message
            key={message.id}
            author={message.author}
            content={message.content}
            roll={message.roll}
          />
        ))}

        <div ref={messagesEndRef} />
      </div>
    </section>
  );
}
