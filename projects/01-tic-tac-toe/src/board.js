import { WINNER_COMBOS } from "./constants";
//METODO PARA CHECAR EL GANADOR corrindo todas las combinaciones 
export const checkWinner = (boardCheck)=>{
    for(const combo of WINNER_COMBOS){
    const [a, b, c] = combo;
    if (
      boardCheck[a] && // 0 -> x u o
      boardCheck[a] === boardCheck[b]&& //si a == b ya sea x y x u o y o
      boardCheck[a] == boardCheck[c]
    ) {
      return boardCheck[a] /// retorna al ganador ya si es x u o
    }
    }
    return null // retortna null si no hay ganador
  }

export const checkEndGame = (newBoard)=>{
    //cecha si hay empate
    //si no hay espacios en blanco 
    //en el trablero
    return newBoard.every((Square) => Square !== null)
  }