import React from "react";

function Like(props) {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    ></i>
  );
}

export default Like;
