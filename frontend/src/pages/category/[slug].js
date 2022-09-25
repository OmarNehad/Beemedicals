import ProductsGrid from "../../components/productsGrid";

export default function Category(products) {
  return <ProductsGrid products={products.data} />;
}

export async function getStaticPaths() {
  const res = await fetch("http://127.0.0.1:8000/api/all-categories");
  const categories = await res.json();
  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/category/${params.slug}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
