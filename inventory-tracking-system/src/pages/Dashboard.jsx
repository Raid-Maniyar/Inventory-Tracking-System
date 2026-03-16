import { useState } from "react";
import Navbar from "../components/Navbar";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";

const Dashboard = () => {

  const [editData, setEditData] = useState(null);

  return (
    <>
      <Navbar />
      <div className="container">
        <AddProduct editData={editData} setEditData={setEditData} />
        <ProductList setEditData={setEditData} />
      </div>
    </>
  );
};

export default Dashboard;