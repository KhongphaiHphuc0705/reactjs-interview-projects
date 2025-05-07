import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, loading } = useFetch("https://dummyjson.com/products?limit=100", {});

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error occured: {error}</h1>;
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h1>Scroll to top and bottom feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <ul style={{ listStyle: "none" }}>{data && data.products && data.products.length > 0 ? data.products.map((item) => <li>{item.title}</li>) : null}</ul>
      <button onClick={handleScrollToTop}>Scroll to top</button>
      <h3>This is the bottom section</h3>
    </div>
  );
}
