
import "./Header.css";

interface HeaderProps {
  title: string;
  chapter: string;
}

export default function Header({ title, chapter }: HeaderProps) {
  return (
    <header className="game-header">
      <div>
        <span className="chapter-label">{chapter}</span>
        <h2>{title}</h2>
      </div>

      <div className="session-status">
        <span className="status-dot" />
        Aventura em andamento
      </div>
    </header>
  );
}
