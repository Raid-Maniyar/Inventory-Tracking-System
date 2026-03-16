import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../features/products/productSlice";

const AddProduct = ({ editData, setEditData }) => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: ""
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (editData) {
      setProduct(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.category || !product.price || !product.stock) {
      setError("All fields required");
      return;
    }

    if (editData) {
      dispatch(updateProduct({ id: editData.id, product }));
      setEditData(null);
    } else {
      dispatch(addProduct(product));
    }

    setProduct({
      name: "",
      category: "",
      price: "",
      stock: ""
    });

    setError("");
  };

  return (
    <div className="card">
      <h2>{editData ? "Edit Product" : "Add Product"}</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Product Name" value={product.name} onChange={handleChange} />
        <input name="category" placeholder="Category" value={product.category} onChange={handleChange} />
        <input name="price" placeholder="Price" value={product.price} onChange={handleChange} />
        <input name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} />

        <button type="submit">
          {editData ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;