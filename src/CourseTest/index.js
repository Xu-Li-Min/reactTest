import React from "react";
import { useState, useEffect } from "react";
import CourseItemTest from "../CourseTest/component/CourseItemTest";

const api = "https://api.hiskio.com/v1/courses?limit=8";

const CourseListTest = () => {
  const [course, setCourse] = useState(0);

  const getData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  };

  useEffect(() => {
    getData(api);
    console.log(course);
  }, []);

  return (
    <>
      {course.map((item) => {
        return <CourseItemTest title={item.title} headline="eee"></CourseItemTest>;
      })}
    </>
  );
};

export default CourseListTest;
