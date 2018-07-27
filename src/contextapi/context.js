import React from "react";
import programming from "../images/web-dev.svg";
import responsive from "../images/web-res.svg";
import improvement from "../images/web-impr.svg";
const Context = React.createContext();

class Provider extends React.Component {
  state = {
    images: [
      {
        image: programming,
        id: 1,
        heading: "Web Development",
        text: "This is going to be the web developemt text"
      },
      {
        image: responsive,
        id: 1,
        heading: "Responsive Design",
        text: "This is going to be the web responsive text"
      },
      {
        image: improvement,
        id: 1,
        heading: "Website Improvement",
        text: "This is going to be the website improvement text"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
export const Consumer = Context.Consumer;
