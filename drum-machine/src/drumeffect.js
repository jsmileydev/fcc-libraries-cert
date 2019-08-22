import React from 'react';

class DrumEffect extends React.Component {
    constructor(props) {
      super(props);
      this.playSound = this.playSound.bind(this);
      this.handleKey = this.handleKey.bind(this);
    }
  
    playSound() {
      var sound = document.getElementById(this.props.letter);
      if (this.props.power == true) {
        sound.currentTime = 0;
        sound.play();
        this.props.newName(this.props.name);
      }
    }
    componentDidMount() {
      document.addEventListener("keydown", this.handleKey);
    }
    handleKey(e) {
      if (e.keyCode == this.props.keyCode) {
        this.playSound();
        console.log(e.keyCode);
      }
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKey);
    }
  
    render() {
      return (
        <div className="drum-pad" id={this.props.name} onClick={this.playSound}>
          <audio src={this.props.audio} id={this.props.letter} className="clip" />
          <img src={this.props.img} alt={this.props.name} />
          <div className="name">{this.props.letter}</div>
        </div>
      );
    }
  }

  export default DrumEffect;