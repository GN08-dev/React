import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFolorwCard'

export function App() {
    const formatUsarName = (userName) => `@${userName}`;
    //SE PUEDE USAR UN CHILDREN A NIVEL COMPONENTE PARA PODER RENDERIZAR EN REACT EL ELEMENTO
    //PARA RECUPERAR EL TEXTO O EL TIPO DE COMPONENTE SE HACE DESDE TWITER CON CHILDREN
    //aqui se le pasa los props para twitterfolorwcard
    //renderizar un componente renderizara todo los que tenga como hijos en este caso todos
    const [isName, setIsName] = useState(true); // Cambié el nombre de la variable para que siga convención
    const text = isName ? 'Juan Noe Garces Delgado' : 'Juan Noe Garces';
    //evento que ejecutara el onclick 
    const cambioNombre = () => {
        setIsName(!isName);
    };
    //renderizado de lista de  elementos  (no nos llega un fetch si no tenemos un array con elementos)
    //para cuando le hagamos un fetch  AUN NO SE COMO HACERLO
    return(
        <section className='App'>
            <TwitterFollowCard 
                initisFollowing = {false}
                formatUsarName = {formatUsarName} 
                userName= "atun.webp">
                {text}
            </TwitterFollowCard>
            <TwitterFollowCard 
                initisFollowing= {true}
                formatUsarName={formatUsarName} 
                userName= "atun.webp"> 
                Doctor chato
            </TwitterFollowCard>
            <button onClick={cambioNombre}> cambiar nombre</button>
        </section>
    )
}