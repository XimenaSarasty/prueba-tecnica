import { BarMovies } from "../Componentes/BarMovies"
import { Footer } from "../Componentes/Footer"
import { MoviesCards } from "../Componentes/MoviesCards"
import { Header } from "../Componentes/Header"


export const Movies = () => {
  return (
    <>
        <Header/>
        <BarMovies/>
        <MoviesCards/>
        <Footer/>
    </>
  )
}
