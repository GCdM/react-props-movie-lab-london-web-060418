import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  // state = {
  //   movies: []
  // }
  //
  // componentDidMount() {
  //   this.fetchMovieData()
  // }
  //
  // fetchMovieData = () => {
  //   fetch(url)
  //     .then(resp => resp.josn())
  //     .then(movies => this.setState({ movies }))
  // }
  // deleteMovie = id => {
  //   const movies = this.state.movies.filter(movie => movie.id !== id)
  //   this.setState({ movies })
  // }

  generateMovieCards = () => {
    return movieData.map( movie => <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} poster={movie.poster} genres={movie.genres} /> )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
