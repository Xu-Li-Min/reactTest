import React, { Component } from "react";
import Course from "./Course";

const api = "https://api.hiskio.com/v1/courses?limit=8";

export default class CourseList extends Component {
  state = {
    courses: [],
    bottom: false,
    next: null,
  };

  componentDidMount() {
    this.fetchData(api);
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    const { bottom, next } = this.state;
    if (bottom === false || !next) {
      return;
    }

    console.log(this.state.bottom);

    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
      this.fetchData(next);
    }
  };

  fetchData = (url) => {
    this.setState({
      bottom: false,
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          courses: [...this.state.courses, ...data.data],
          bottom: true,
          next: data.links.next,
        });
        console.log(this.state.bottom);
      });
  };

  render() {
    const { courses } = this.state;
    return (
      <div>
        {courses.map((item) => {
          return <Course key={item.id} {...item} />;
        })}
      </div>
    );
  }
}
