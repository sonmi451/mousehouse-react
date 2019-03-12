import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

////////////////////////////////////////////////////////////////////////////////
// Variables ///////////////////////////////////////////////////////////////////

const elements = {
  shranderAwayButton: document.getElementById("shrand-away"),
  congratsText: document.getElementById("congrats"),
  shranderPic: document.getElementById("shrand-pic"),
  about: document.getElementById("about")
};

const pics = {
  pic1: "./_Apollo_Buran_Mol.jpg",
  pic2: "./_Luna1.jpg",
  pic3: "./_Luna2.jpg",
  pic4: "./_Mol_Buran_Kosmos.jpg",
  pic5: "./_Mol_Zena_Kosmos.jpg",
  pic6: "./_Mol_Zena.jpg",
  pic7: "./_Mol1.jpg",
  pic8: "./_Mol2.jpg",
  pic9: "./_Mol3.jpg",
  pic10: "./_Mol4.jpg",
  pic11: "./_Mol5.jpg",
  pic12: "./_Mol6.jpg",
  pic13: "./_Mol7.jpg",
  pic14: "./_Mol8.jpg",
  pic15: "./_Mol9.jpg",
  pic16: "./_Mol10.jpg",
  pic17: "./_Mol11.jpg",
  pic18: "./_Mol12.jpg",
  pic19: "./_Mol13.jpg",
  pic20: "./_Mol14.jpg",
  pic21: "./_Mol15.jpg",
  pic22: "./_Mol16.jpg",
  pic23: "./_Mol17.jpg",
  pic24: "./_Mol18.jpg",
  pic25: "./_Mol19.jpg",
  pic26: "./_Mol20.jpg",
  pic27: "./_Mol21.jpg",
  pic28: "./_Mol22.jpg",
  pic29: "./_SaturnV_Mol.jpg",
  pic30: "./_Shranders.jpg",
  pic31: "./_Yorki1.jpg",
  pic32: "./_Yorki2.jpg",
  pic33: "./_Yorki3.jpg",
  pic34: "./_Yorki4.jpg",
  pic35: "./_Zena1.jpg",
  pic36: "./_Zena3.jpg",
  pic37: "./_Saturn3.jpg",
};

// Mouse list
const mice = {
  sputnik: "Sputnik",
  snapdragon: "Snapdragon",
  kraken: "Kraken",
  soyuz: "Soyuz",
  vostok: "Vostok",
  zvezda: "Zvezda",
  salyut: "Salyut",
  mir: "Mir",
  almaz: "Almaz",
  zarya: "Zarya",
  skylab: "Skylab",
  poisk: "Poisk",
  saturnv: "Saturn V",
  lunakhod: "Lunakhod",
  semyorka: "Semyorka",
  molniya: "Molniya",
  zenit: "Zenit",
  kosmos: "Kosmos",
  buran: "Buran",
  apollo: "Apollo"
};

////////////////////////////////////////////////////////////////////////////////
// Classes /////////////////////////////////////////////////////////////////////

// Navigation block
class Navigation extends React.Component {

  static get elements() {
    return elements;
  }
  static get pics() {
    return pics;
  }

  constructor(props) {
    super(props);
    this.playShranderGame = this.playShranderGame.bind(this);
    this.viewGallery = this.viewGallery.bind(this);
    this.viewMouseList = this.viewMouseList.bind(this);
  }

  playShranderGame () {
    ReactDOM.render(
      <ShranderGame />,
      document.getElementById("about")
    );
  }

  viewGallery () {
    ReactDOM.render(
      <RandomGallery />,
      document.getElementById("about")
    );
  }

  viewMouseList () {
    ReactDOM.render(
      <MouseList />,
      document.getElementById("about")
    );
  }

  render() {
    return (
      <div>
      <h1>Mousehouse</h1>
      <h4>
      <a id="mouselink" onClick={this.viewGallery}>gallery</a> |&nbsp;
      <a id="mouselink" onClick={this.playShranderGame}> the shranders</a> |&nbsp;
      <a id="mouselink" onClick={this.viewMouseList}> all the mice</a> |&nbsp;
      <a id="mouselink" href="https://www.instagram.com/sonmifourone/"> mousetagram</a>
      </h4>
      </div>
    );
  }
}

// Mouse awake time
class AwakeTime extends React.Component {
  render() {
    var awakeTimeCheck;
    var now = new Date();
    var hour = now.getHours();
    if (hour > 18 || hour < 8) {
      awakeTimeCheck = "It is mouse awake time!";
    } else {
      awakeTimeCheck = "It is mouse asleep time.";
    }
    return (
      <h3>{awakeTimeCheck}</h3>
    );
  }
}

// Randomised gallery of mouse pictures
class RandomGallery extends React.Component {
  render() {
    var miceGallery = [pics.pic1,pics.pic2,pics.pic3,pics.pic4,pics.pic5,pics.pic6,
    pics.pic7,pics.pic8,pics.pic9,pics.pic10,pics.pic11,pics.pic12,pics.pic13,
    pics.pic14,pics.pic15,pics.pic16,pics.pic17,pics.pic18,pics.pic19,pics.pic20,
    pics.pic21,pics.pic22,pics.pic23,pics.pic24,pics.pic25,pics.pic26,pics.pic27,
    pics.pic28,pics.pic29,pics.pic30,pics.pic31,pics.pic32,pics.pic33,pics.pic34,
    pics.pic35,pics.pic36,pics.pic37]
    var len = miceGallery.length;
    var shuffleList = [];
    var i;
    for (i = 0; i < len; i++) {
      var randomMouse = miceGallery[Math.floor(Math.random()*miceGallery.length)];
      var randomIndex = miceGallery.indexOf(randomMouse)
      miceGallery.splice(randomIndex, 1);
      shuffleList.push(<img id="gallery" src={randomMouse} />)
    }
    return (
      shuffleList
    );
  }
}

// List of all the mice
class MouseList extends React.Component {
  render() {
    const micePick = [mice.sputnik,mice.snapdragon,mice.kraken,mice.soyuz,
      mice.vostok,mice.zvezda,mice.salyut,mice.mir,mice.almaz,mice.zarya,
      mice.skylab,mice.poisk,mice.saturnv,mice.lunakhod,mice.semyorka,
      mice.molniya,mice.zenit,mice.kosmos,mice.buran,mice.apollo]
    const miceList = micePick.map((micePick) => <li>{micePick}</li>);
    return (
      <div>
      <h1>Past and present occupants of the mousehouse.</h1>
      <ul>
      {miceList}
      </ul>
      </div>
    );
  }
}

class ShranderGame extends React.Component {

  static get elements() {
    return elements;
  }
  static get pics() {
    return pics;
  }

  constructor(props) {
    super(props);
    this.handleSelectMol = this.handleSelectMol.bind(this);
    this.handleSelectYorki = this.handleSelectYorki.bind(this);
    this.handleSelectNone = this.handleSelectNone.bind(this);
    this.shrandomiser = this.shrandomiser.bind(this);
    this.state = { title: "Choose your Shrander!",
                  image: "./blank.jpg",
                  };
  }

  shrandomiser() {
    var ran = Math.random();
    var shrander;
    if (ran < 0.5) {
      this.handleSelectYorki();
    } else {
      this.handleSelectMol();
    }
  }

  handleSelectMol() {
    document.getElementById("shrand-away").style.display = "inline";
    this.setState({title: "Well done on choosing Molniya as your shrander!",
                  image: pics.pic23,
                 });
  }

  handleSelectYorki() {
    document.getElementById("shrand-away").style.display = "inline";
    this.setState({title: "Well done on choosing Semyorka as your shrander!",
                  image: pics.pic34,
                });
              }

  handleSelectNone() {
    document.getElementById("shrand-away").style.display = "none";
    this.setState({title: "Try again for your Shrander!",
                  image: "./blank.jpg",
                });
  }

  render() {
    return (
      <div>
      <h2>{this.state.title}</h2>
      <button onClick={this.handleSelectMol}>Molniya</button>&nbsp;
      <button onClick={this.handleSelectYorki}>Semyorka</button>&nbsp;
      <button onClick={this.shrandomiser}>Give me a random one!</button>
      <br />
      <img id="shrand-pic" src={this.state.image} />
      <br />
      <button id="shrand-away" onClick={this.handleSelectNone}>Ah it's too cute take it away!</button>
      </div>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////
// Render elements /////////////////////////////////////////////////////////////

ReactDOM.render(
  <Navigation />,
  document.getElementById("navigation")
);

ReactDOM.render(
  <AwakeTime />,
  document.getElementById("time")
);

ReactDOM.render(
  <RandomGallery />,
  document.getElementById("about")
);
