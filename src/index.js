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
//	<iframe src='https://gfycat.com/ifr/SevereSmugHoneyeater' frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe><p> <a href="https://gfycat.com/severesmughoneyeater"></a></p>
	<img src="https://i.pinimg.com/originals/f2/52/42/f252421d0e8e5046ef2a7510dc381cfe.jpg" />
      </div>
    )
  }
}

const content = document.getElementById('app')

ReactDom.render(<HelloWorld />, content)
