import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti";
import { Square } from './components/Square';
import { Turns } from './constants';
import { checkWinner, checkEndGame } from './board';
import { WinnerModal } from './components/WinnerModal';

function App() {
  //pasando a estado para cuando tenga su turno cabie el valor 
 // const board = Array(9).fill(null);
 //creando estado usando el usestate el up
 // const [board, setBoard] = useState(Array(9).fill(null));
  const [board, setBoard] = useState(()=>{
    console.log("Inicializando estado del board");
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage) 
    return Array(9).fill(null)
  })

  console.log(board)

 // const [turn,setTurn] = useState(Turns.x);
 const [turn, setTurn] = useState(()=>{
  const turnFormStorage = window.localStorage.getItem("turn")
  return turnFormStorage ??  Turns.x
 })
  //utilizando un estado sabremos si hay ganador o no 
  // null es que no hay ganador y false es que hay empate
  const [winner, setwinner] = useState(null);
  

  //creando una funcion para reinicar el juego
  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(Turns.x);
    setwinner(null)

    Window.localStorage.removeItem("board")
    Window.localStorage.removeItem("turn")
  }
  
  
  const updateBoard = (index) =>{
    //no actualizar posiciones ya usadas y su hay un ganador 
    if (board[index] || winner)  return

    //actualizar  el bord en este caso le diremos que sera un nuevo bord 
    //siempre usar los estados que sean inmutables, para evitar problemas con el renderizado
    const newBoard =  [...board];//creando copia de board 
    newBoard[index] = turn; //manejo de el tipo de dijito en este caso x u o
    setBoard(newBoard)

    const newTurn = turn === Turns.x ?Turns.o : Turns.x;
    setTurn(newTurn)

    //guardar aqui la partida 
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
    
    // rebizar si hay un ganador 
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti()
      setwinner(newWinner);
      //checar si hay un empate seria con un TODO: check if game is over
    }else if(checkEndGame(newBoard)){
      setwinner(false)
    }
  }
  return (
    <main className='board'>
          <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) =>{
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            //  <div className='cell' key={index}>
            //   <span className='cell_content'>{index}</span>
            //  </div> 
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected = {turn === Turns.x}>{Turns.x}</Square>
        <Square isSelected= {turn === Turns.o}>{Turns.o}</Square>
      </section>
        <button onClick={resetGame}>Restablecer juego</button>

      <WinnerModal resetGame = {resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App
