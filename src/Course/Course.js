import React, { Component } from "react";
import "./styles.css";

export default class Course extends Component {
  render() {
    const { title, headline, image, lecturers } = this.props;
    return (
      <div className="box">
        <h3 className="title">{title}</h3>
        <img src={image} className="img" alt="" />
        {lecturers.map((item) => {
          return <span key={item.id}>{item.username}</span>;
        })}
        <h4 className="content">{headline}</h4>
      </div>
    );
  }
}
