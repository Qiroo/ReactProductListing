import Product from "./Product";
import appleProducts from "./appleProducts";

function ProductList() {
  return (
    <div className="py-3 py-md-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-4">Our Products</h4>
          </div>
          {appleProducts.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
