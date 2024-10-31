import { useState } from "react";
//para poder reutilizar debera ser usado parametros o parametrizar
export function TwitterFollowCard({children ,userName  = "uknown", formatUsarName = ""}){
    //uso de state maneja el uso de dos posiciones SE PUEDE HACER DE ESTA FORMA 
    // const state = useState(false);
    // const isFollowing = state[0];
    // const setIsFollowing = state[1];
    //o de esta 
    const[isFollowing, setIsFollowing] = useState(false)
    
    const imageSrc = `./public/${userName}`
    //coondicional a usar para renderizar el seguir o no 
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    //CONDICIONAL PARA CAMBIAR EL COLOR
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";

    const handleclick =()=>{
        setIsFollowing(!isFollowing) ///si is folowing es true lo pasara a false
    }
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
                className="tw-followCard-avatar"
                src={imageSrc}
                alt="avatar de miau" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span 
                    className="tw-followCard-infoUserName">{formatUsarName(userName)}</span>
                </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleclick}>
                {text}
            </button>
        </aside>
    </article>
    )
}