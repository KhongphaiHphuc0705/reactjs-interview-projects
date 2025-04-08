import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    let newMultiple = [...multiple];
    const index = newMultiple.indexOf(id);

    console.log(index);
    if (index === -1) {
      newMultiple.push(id);
    } else {
      newMultiple.splice(index, 1);
    }

    setMultiple(newMultiple);
  };

  console.log(selected, multiple);
  return (
    <div className="container">
      <button onClick={() => setMultipleSelection(!multipleSelection)}>Enable multiple selection</button>
      <div classname="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div onClick={multipleSelection ? () => handleMultiSelection(item.id) : () => handleSingleSelection(item.id)} className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {
                multipleSelection
                  ? multiple.indexOf(item.id) !== -1 && <div className="content">{item.answer}</div>
                  : selected === item.id && <div className="content">{item.answer}</div>
                /* {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                <div className="content">
                  <p>{item.answer}</p>
                </div>
              ) : null} */
              }
            </div>
          ))
        ) : (
          <div>No data found.</div>
        )}
      </div>
    </div>
  );
}
