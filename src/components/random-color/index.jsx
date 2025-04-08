import { useState } from "react";
import "./styles.css";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  const handleCreateRgbColor = () => {
    const rgbColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    console.log(rgbColor);
    setColor(rgbColor);
  };

  return (
    <div className="container" style={{ background: color }}>
      <button onClick={() => setColorType("hex")}>Create HEX color</button>
      <button onClick={() => setColorType("rgb")}>Create RGB color</button>
      <button onClick={colorType === "hex" ? handleCreateHexColor : handleCreateRgbColor}>Generate random color</button>
      <div classname="">
        <h3>{colorType === "hex" ? "HEX Color" : "RGB Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
