import React from "react";

export default function Alert(props) {
  const capitalizes = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div style={{ height: "30px" }}>
      {props.alert && (
        <div class={`alert alert-${props.alert.type}`} role="alert">
          <strong>{capitalizes(props.alert.type)}</strong>:{" "}
          {props.alert.message}
        </div>
      )}
    </div>
  );
}
