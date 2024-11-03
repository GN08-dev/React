  //el board es el que actualizara donde se haya realizado el click
  //const board = Array(9).fill(null);
  //creando componene de cuadrado
export const Square =({children,isSelected ,updateBoard,index})=>{
    const className = `square ${isSelected ? "is-selected" : ''}`;
    const handleClick = ()=>{
      updateBoard(index)
    }
    return(
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    )
  }