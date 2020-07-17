import React, { Component } from "react";

class Drum extends Component {
  constructor(props) {
    super(props);

    this.audio = React.createRef();
  }

  playSound = () => {
    this.audio.current.play();
    const id = this.props.text;
    const parent = this.audio.current.parentNode;
    const display = parent.parentNode;
    display.querySelector("h1").innerText = id;
  };

  render() {
    const { audio, text } = this.props;
    return (
      <div className="box drum-pad" onClick={this.playSound} id="key">
        {text}
        <audio src={audio} id={text} className="clip" ref={this.audio} />
      </div>
    );
  }
}
document.addEventListener("keydown", (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);
  if (audio) {
    let parent = audio.parentNode;
    parent.classList.add("active");
    audio.play();
    audio.addEventListener("ended", () => {
      parent.classList.remove("active");
    });
  }
});

export default Drum;
