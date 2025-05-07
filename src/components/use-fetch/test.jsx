import useFetch from ".";

export default function useFetchTest() {
  const { data, error, loading } = useFetch("https://dummyjson.com/products", {});

  console.log(data);

  return (
    <div>
      <h1>useFetch Hook</h1>
      {loading ? <h3>Loading...</h3> : null}
      {error ? <h3>Error: {error}</h3> : null}
      {data && data.products && data.products.length > 0 ? data.products.map((item) => <p key={item.id}>{item.title}</p>) : null}
    </div>
  );
}
