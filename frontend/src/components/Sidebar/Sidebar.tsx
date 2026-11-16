
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">✦</div>
        <div>
          <h1>RPG-NLP</h1>
          <span>YOUR STORY BEGINS</span>
        </div>
      </div>

      <div className="sidebar-divider" />

      <div className="campaign">
        <span className="section-label">CAMPANHA ATUAL</span>

        <div className="campaign-card">
          <div className="campaign-image">⚔</div>
          <div>
            <strong>As Ruínas de Eldoria</strong>
            <span>Capítulo I · O Despertar</span>
          </div>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="player-profile">
          <div className="avatar">A</div>
          <div>
            <strong>Aventureiro</strong>
            <span>Viajante desconhecido</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
