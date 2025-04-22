import { useState, useEffect } from "react";
import "./styles.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.products) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
    }
  }

  const handleScroll = () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollPercentage);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (errorMessage) {
    return <div className="error">{errorMessage}</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-container">
          <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
        </div>
      </div>
      <div className="data-container">{data && data.length > 0 ? data.map((item) => <p>{item.title}</p>) : null}</div>
    </div>
  );
}
