import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../features/products/productSlice";

const ProductList = ({ setEditData }) => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="table-card">
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(products || {}).map(([id, item]) => (

            <tr key={id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => setEditData({ id, ...item })}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(deleteProduct(id))}
                >
                  Delete
                </button>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;