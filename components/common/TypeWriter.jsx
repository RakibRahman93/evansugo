import React from "react";
import TypewriterComponent from "typewriter-effect";

export default function TypeWriter({
  strings = [],
  colorClass = "color-primary-1",
}) {
  return (
    <div className={`typewrite ${colorClass}`}>
      <TypewriterComponent
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
