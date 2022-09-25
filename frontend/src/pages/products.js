import ProductsGrid from "../components/productsGrid";

export default function Products(products) {
  return <ProductsGrid products={products.data} />;
}

export async function getStaticProps() {
  const response = await fetch(`http://127.0.0.1:8000/api/all-products`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
