
import { useState } from "react";
import "./ActionInput.css";

interface ActionInputProps {
  onSend: (action: string) => void;
  disabled?: boolean;
}

export default function ActionInput({
  onSend,
  disabled = false,
}: ActionInputProps) {
  const [input, setInput] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const action = input.trim();

    if (!action || disabled) return;

    onSend(action);
    setInput("");
  }

  return (
    <form className="action-input" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Descreva sua ação... O que você deseja fazer?"
          rows={2}
          disabled={disabled}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              event.currentTarget.form?.requestSubmit();
            }
          }}
        />

        <button
          type="submit"
          className="send-button"
          disabled={!input.trim() || disabled}
        >
          <span>Enviar ação</span>
          <span>➤</span>
        </button>
      </div>

      <span className="input-hint">
        ENTER para enviar · SHIFT + ENTER para nova linha
      </span>
    </form>
  );
}
