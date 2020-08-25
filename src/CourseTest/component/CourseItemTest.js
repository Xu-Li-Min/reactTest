import React from "react";

const CourseItemTest = (props) => {
  const { title, headline, image, price, lecturers } = props;
  return (
    <>
      <div className="box">
        <h4>{title}</h4>
        <img src={image} className="img" />
        <h5 className="content">{headline}</h5>
        <p>{lecturers}</p>
        <span>{price}</span>
      </div>
    </>
  );
};

export default CourseItemTest;
