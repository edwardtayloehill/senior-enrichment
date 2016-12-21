import React, { Component } from 'react';

export default class WinterJokes extends Component {
  constructor() {
    super()
    this.nextJoke = this.nextJoke.bind(this)
    this.answer = this.answer.bind(this)
  }

  componentDidMount() {
    this.nextJoke()
  }

  nextJoke() {
    this.setState({
      joke: randomJoke(),
      answered: false,
    })
  }

  answer() {
    this.setState({answered: true})
  }

  render() {
    if (!this.state) { return null }

    const {joke, answered} = this.state
    return (

      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand clearfix" href="/"><span className="glyphicon glyphicon-map-marker"></span><span>Margaret Hamilton Interplanetary JavaScript Academy</span></a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/api/campus">Campuses</a></li>
            <li><a href="/api/student">Students</a></li>
          </ul>
        </div>
      </div>

      // <div>
      //   <h1 onClick={answered ? this.nextJoke : this.answer}>{joke.q}</h1>
      //   {answered && <h2>{joke.a}</h2>}
      // </div>
    )
  }
}

function randomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)]
}

const jokes = `Q: What did the Arctic wolf ask in the restaurant?
A: Are these lemmings fresh off the picle?`
  .split('\n')
  .reduce((all, row, i) =>
    i % 2 === 0
    ? [...all, {q: row}]
    : [...all.slice(0, all.length - 1), Object.assign({a: row}, all[all.length - 1])],
    [])
