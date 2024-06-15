import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    
       <>
         <main className="main bg-dark">
             <section className="sign-in-content">
                 <span>404</span>
                 <p className="noexist-page-msg">Oups! La page que vous demandez n'existe pas.</p>
                 <Link to="/">Retourner sur la page d’accueil</Link>
             </section>
         </main>
       </>
    
  )
}
