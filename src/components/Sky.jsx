import React, { Component } from 'react'
import '../index.css'

class Sky extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    this._canvas = this.refs.canvas
    this._ctx = this._canvas.getContext('2d');
    this._ctx.fillStyle = 'white'
  }

  addNode(e) {
    this._ctx.beginPath();
    this._ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2);
    this._ctx.fill();
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
