import React from "react";

function Detail({ location }) {
  console.log(location);
  return <span>{location.state.title}</span>;
}

export default Detail;
