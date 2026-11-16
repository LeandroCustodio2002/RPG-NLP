
export interface MessageProps {
    author: "player" | "master";
    content: string;
    roll?: number;
  }
  
  export default function Message({
    author,
    content,
    roll,
  }: MessageProps) {
    const isMaster = author === "master";
  
    return (
      <article className={`message ${author}`}>
        <div className="message-avatar">
          {isMaster ? "✦" : "A"}
        </div>
  
        <div className="message-body">
          <div className="message-author">
            {isMaster ? "MESTRE" : "VOCÊ"}
  
            {roll !== undefined && (
              <span className="message-roll">
                D12 · {roll}
              </span>
            )}
          </div>
  
          <p>{content}</p>
        </div>
      </article>
    );
  }
  