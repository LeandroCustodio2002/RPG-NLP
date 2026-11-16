
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";
import Dice from "./components/Dice/Dice";
import ActionInput from "./components/ActionInput/ActionInput";
import type { MessageProps } from "./components/Chat/Message";
import "./App.css";

type Message = MessageProps & {
  id: number;
};

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      author: "master",
      content:
        "As nuvens cobrem a lua enquanto você se aproxima das ruínas de Eldoria. O vento sopra entre as árvores mortas. Ao longe, uma pequena luz surge na janela de uma antiga torre.\n\nO que você deseja fazer, aventureiro?",
    },
  ]);

  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);

  function handleSend(action: string) {
    if (rolling) return;

    const result = Math.floor(Math.random() * 12) + 1;

    setRolling(true);
    setDiceResult(null);

    setTimeout(() => {
      setDiceResult(result);

      const playerMessage: Message = {
        id: Date.now(),
        author: "player",
        content: action,
        roll: result,
      };

      const masterMessage: Message = {
        id: Date.now() + 1,
        author: "master",
        content: `Você tentou realizar sua ação e obteve ${result} no D12. O destino começa a se revelar... Em breve, o mestre de inteligência artificial narrará as consequências.`,
      };

      setMessages((previous) => [
        ...previous,
        playerMessage,
        masterMessage,
      ]);

      setRolling(false);
    }, 1200);
  }

  return (
    <main className="game-layout">
      <Sidebar />

      <section className="main-content">
        <Header
          title="O Despertar"
          chapter="CAPÍTULO I"
        />

        <div className="game-workspace">
          <section className="chat-column">
            <Chat messages={messages} />

            <div className="chat-input-area">
              <ActionInput
                onSend={handleSend}
                disabled={rolling}
              />
            </div>
          </section>

          <div className="dice-column">
            <Dice
              rolling={rolling}
              result={diceResult}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
