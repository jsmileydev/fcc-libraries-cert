import React from 'react';
import DrumEffect from './drumeffect';

class DrumSet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        drumArr: [
          {
            name: "HEATER2",
            letter: "Q",
            keyCode: 81,
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
            img: "https://img.icons8.com/ios/50/000000/snare-drum.png"
          },
          {
            name: "HEATER3",
            letter: "W",
            keyCode: 87,
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
            img: "https://img.icons8.com/ios/50/000000/cymbals.png"
          },
          {
            name: "HEATER4",
            letter: "E",
            keyCode: 69,
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
            img: "https://img.icons8.com/ios/50/000000/timpani.png"
          },
          {
            name: "CLAP",
            letter: "A",
            keyCode: 65,
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
            img: "https://img.icons8.com/ios/50/000000/bass-drum.png"
          },
          {
            name: "KICK",
            letter: "S",
            keyCode: 83,
            url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
            img: "https://img.icons8.com/ios/50/000000/gong.png"
          },
          {
            name: "CLOSED HIGH-HAT",
            letter: "D",
            keyCode: 68,
            url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
            img: "https://img.icons8.com/ios/50/000000/powwow-drum.png"
          },
          {
            name: "KICK & HAT",
            letter: "Z",
            keyCode: 90,
            url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
            img: "https://img.icons8.com/ios/50/000000/xylophone.png"
          },
          {
            name: "HEATER1",
            letter: "X",
            keyCode: 88,
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
            img: "https://img.icons8.com/ios/50/000000/maracas.png"
          },
          {
            name: "HIGH HAT",
            letter: "C",
            keyCode: 67,
            url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
            img: "https://img.icons8.com/ios/50/000000/cow.png"
          }
        ],
        cellShape: "cell",
        nameDisplay: "",
        onOff: "ON",
        play: true
      };
      this.changeName = this.changeName.bind(this);
      this.handlePower = this.handlePower.bind(this);
    }
  
    changeName(name) {
      this.setState({
        nameDisplay: name.replace()
      });
    }
  
    handlePower() {
      this.setState({
        play: !this.state.play,
        nameDisplay: ""
      });
      var powerBtn = document.getElementById("powerbtn");
      if (this.state.play) {
        powerBtn.style.backgroundColor = "red";
        this.setState({
          onOff: "OFF"
        });
      } else {
        powerBtn.style.backgroundColor = "green";
        this.setState({
          onOff: "ON"
        });
      }
      //this.state.play == true ? powerBtn.style.backgroundColor = 'red' : powerBtn.style.backgroundColor = 'green';
    }
  
    render() {
      const DrumPads = this.state.drumArr.map((drum, key) => (
        <DrumEffect
          name={drum.name}
          audio={drum.url}
          letter={drum.letter}
          img={drum.img}
          keyCode={drum.keyCode}
          newName={this.changeName}
          power={this.state.play}
        />
      ));
      return (
        <div id="drum-machine">
          <div id="row">{DrumPads}</div>
          <div id="display">
            <p id="power-state">POWER</p>
            <button id="powerbtn" onClick={this.handlePower}>
              {this.state.onOff}
            </button>
            <p id="name-display">{this.state.nameDisplay}</p>
          </div>
          <footer>
            <a href="https://icons8.com/icon/69265/gong">Icons by Icons8</a>
          </footer>
        </div>
      );
    }
  }

  export default DrumSet;