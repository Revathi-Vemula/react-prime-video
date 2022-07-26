import MoviesSlider from '../MoviesSlider'
import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === comedyMovie,
  )

  console.log(actionMoviesList)
  // console.log(comedyMoviesList)
  return (
    <div className="prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-video-img"
        alt="prime video"
      />
      <div className="sliders-container">
        <h1 className="movie-type">Action Movies</h1>
        <MoviesSlider movieItemsList={actionMoviesList} />
        <h1 className="movie-type">Comedy Movies</h1>
        <MoviesSlider movieItemsList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
