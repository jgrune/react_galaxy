import React, { Component } from 'react'
import '../index.css'
import ReactCanvas from 'react-canvas'

class Sky extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    this.canvas = this.refs.canvas
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white'
  }

  addNode(e) {
    this.ctx.beginPath();
    this.ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2);
    this.ctx.fill();
  }

  render() {
    return (
      <canvas
        className="c"
        ref="canvas"
        width={window.innerWidth} height={window.innerHeight}
        onClick={this.addNode.bind(this)}
        >
      </canvas>
    );
  }
}

export default Sky;
