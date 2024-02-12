function Product(props) {
  const { name, type, price, formerPrice, image } = props.data;

  return (
    <div className="col-md-3">
      <div className="product-card">
        <div className="product-card-img">
          <label className="stock bg-success">In Stock</label>
          <img src={image} alt="Laptop" />
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
          <div className="mt-2">
            <a href="" className="btn btn1">
              Add To Cart
            </a>
            <a href="" className="btn btn1">
              {" "}
              <i className="fa fa-heart"></i>{" "}
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
