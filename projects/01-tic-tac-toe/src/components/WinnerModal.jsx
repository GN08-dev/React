import { Square } from "./Square"
export function WinnerModal({winner,resetGame}) {
    if (winner === null) return null 
    const winnerText  = winner === false ? "empate" : "ganor: "
    return( 
              <section className='winner'>
                <div className='text'>
                  <h2>
                    {winnerText}
                  </h2>
                  <header className='win'>
                    {winner && <Square> {winner} </Square>}
                  </header>
                  <footer>
                    <button onClick={resetGame}>Empezzar de nuevo</button>
                  </footer>
                </div>
              </section>
            )
}