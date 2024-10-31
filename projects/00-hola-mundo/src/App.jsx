import './App.css'
import { TwitterFollowCard } from './TwitterFolorwCard'

export function App() {
    const formatUsarName = (userName) => `@${userName}`;
    //SE PUEDE USAR UN CHILDREN A NIVEL COMPONENTE PARA PODER RENDERIZAR EN REACT EL ELEMENTO
    //PARA RECUPERAR EL TEXTO O EL TIPO DE COMPONENTE SE HACE DESDE TWITER CON CHILDREN
    return(
        <section className='App'>
            <TwitterFollowCard 
                formatUsarName = {formatUsarName} 
                userName= "atun.webp">
                Juan Noe Garces Delgado
            </TwitterFollowCard>
            <TwitterFollowCard 
                formatUsarName={formatUsarName} 
                userName= "atun.webp"> 
                Doctor chato
            </TwitterFollowCard>
        </section>
    )
}