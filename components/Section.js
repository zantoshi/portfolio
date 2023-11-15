import React from "react";

const Section = ({ title, copy }) => {
  return (
    <div className="flex flex-col space-y-3 my-8">
      <h1 className="text-2xl">{title}</h1>
      {copy.map((item) => (
        <p className="text-lg">{item}</p>
      ))}
    </div>
  );
};

export default Section;
