import "babel-polyfill"
import React, {Component} from 'react'
import ReactDom from 'react-dom'

require('./style.css')

class HelloWorld extends Component{

  render() {
    return (
      <div>
        <h1>Hello World.!!!</h1>
        Don't forget to: smile :D
        <ul>
          <li>
            Run 'npm run build' before uploading your public directory to your website.
          </li>
        </ul>

	<iframe width="560" height="315" src="https://www.youtube.com/embed/o0Zl3NwjGwc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
    )
  }
}

const content = document.getElementById('app')

ReactDom.render(<HelloWorld />, content)
