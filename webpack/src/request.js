async function getData() {
  return await fetch("https://fakestoreapi.com/products/1");
}

getData()
  .then((res) => res.json())

  .then((json) => console.log(json));
