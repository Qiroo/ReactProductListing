function Product(props) {
  const { name, type, price, formerPrice, quantity, favorite, image } =
    props.data;

  return (
    <div className="col-md-3">
      <div className="product-card">
        <div className="product-card-img">
          {quantity === 0 ? (
            <label className="stock bg-danger">Out of Stock</label>
          ) : (
            <label className="stock bg-success">In Stock</label>
          )}
          <img
            src={image}
            alt="Laptop"
            className={`${quantity === 0 ? "sold-out" : ""}`}
          />
        </div>
        <div className="product-card-body">
          <p className="product-brand">{type}</p>
          <h5 className="product-name">
            <a href=""> {name} </a>
          </h5>
          <div>
            <span className="selling-price">${price}</span>
            <span className="original-price">${formerPrice}</span>
          </div>
          <p>Stock: {quantity}</p>
          <div className="mt-2">
            {quantity === 0 ? (
              <a href="" className="btn btn1" style={{ color: "red" }} disabled>
                SOLD OUT
              </a>
            ) : (
              <a href="" className="btn btn1">
                Add To Cart
              </a>
            )}
            <a href="" className="btn btn1">
              {favorite === true ? (
                <i className="fa fa-heart" style={{ color: "red" }}></i>
              ) : (
                <i className="fa fa-heart"></i>
              )}
            </a>
            <a href="" className="btn btn1">
              {" "}
              View{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
