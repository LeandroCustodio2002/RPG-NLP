
import "./Dice.css";

interface DiceProps {
  rolling: boolean;
  result: number | null;
}

export default function Dice({ rolling, result }: DiceProps) {
  return (
    <aside className="dice-container">
      <div className="dice-heading">
        <span className="section-label">O DESTINO ESTÁ EM SUAS MÃOS</span>
        <h3>A sorte será lançada.</h3>
        <p>Cada decisão pode mudar o rumo da sua história.</p>
      </div>

      <div className="dice-stage">
        <div className={`dice-object ${rolling ? "rolling" : ""}`}>
          <div className="dice-shape">
            <div className="dice-inner">
              <span>{rolling ? "?" : result ?? "D12"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dice-status">
        {rolling ? (
          <>
            <span className="dice-status-dot active" />
            <span>O destino está sendo decidido...</span>
          </>
        ) : result !== null ? (
          <div className="dice-final-result">
            <span>RESULTADO DA ROLAGEM</span>
            <strong>{result}<small> / 12</small></strong>
          </div>
        ) : (
          <>
            <span className="dice-status-dot" />
            <span>Aguardando sua ação</span>
          </>
        )}
      </div>

      <div className="dice-footer">
        <span>D</span>
        <span>12</span>
        <span>·</span>
        <span>UM NOVO DESTINO A CADA AÇÃO</span>
      </div>
    </aside>
  );
}
