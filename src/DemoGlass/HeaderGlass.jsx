import React, { Component } from "react";
import "../assets/style/HeaderGlass.css";

const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class HeaderGlass extends Component {
  state = {
    glassProduct: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassProduct = () => {
    return data.map((GlassItem, index) => {
      return (
        <img
          onClick={() => {
            this.changeGlass(GlassItem);
          }}
          className="ml-2 p-2 border border-width-1"
          key={index}
          src={GlassItem.url}
          alt="..."
          width={100}
        />
      );
    });
  };

  changeGlass = (newGlass) => {
    this.setState({
      glassProduct: newGlass,
    });
  };

  render() {
    return (
      <div className="BucMinh">
        <div className="header bg-dark text-center text-white">
          <h1>Come Here</h1>
        </div>
        <div className="item__product d-flex ml-2 p-2">
          <div className="item__left">
            <img src="../img/model.jpg" alt="..." />
            <div className="img-content">
              <img src={this.state.glassProduct.url} alt="..." />
            </div>
            <div className="text-content">
              <h3>{this.state.glassProduct.name}</h3>
              <p>{this.state.glassProduct.desc}</p>
            </div>
          </div>
          <div className="item__right">
            <img src="../img/model.jpg" alt="..." />
          </div>
        </div>
        {/* ---- */}
        <div className=" mt-5 d-flex justify-content-center p-5">
          {this.renderGlassProduct()}
        </div>
      </div>
    );
  }
}
