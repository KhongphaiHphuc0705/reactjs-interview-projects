import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      label: "First Section",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Section",
      style: {
        width: "100%",
        height: "600px",
        background: "pink",
      },
    },
    {
      label: "Third Section",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Section",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Section",
      style: {
        width: "100%",
        height: "600px",
        background: "black",
      },
    },
  ];

  const handleScrollToSection = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click to scroll</button>
      {data.map((item, index) => (
        <div ref={index === 2 ? ref : null} style={item.style}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
}
