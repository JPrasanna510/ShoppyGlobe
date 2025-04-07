import { useState } from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../utils/useFetchProducts";

function ProductList() {
  /**Destructuring state from custom hook */
  const { products, loading, error } = useFetchProducts();
  /**Local state for search input */
  const [search, setSearch] = useState("");

  /**Filter products based on search */
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  /**Show error message if fetching fails */
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
