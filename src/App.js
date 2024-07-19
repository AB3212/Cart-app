import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All-Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=0&skip=100")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));

    axios
      .get("https://dummyjson.com/products/category-list")
      .then((response) => {
        setCategories(["All-Products", ...response.data]);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterProducts = () => {
    let filtered = selectedCategory === "All-Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Router>
      <NavigationBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container-fluid" style={{ marginTop: "70px" }}>
              <div className="row">
                <CategoryList
                  categories={categories}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                <div
                  className="col-md-10 offset-md-2 container"
                  style={{ paddingTop: "10px  " }}
                >
                  <div className="product-list p-0">
                    <h1 className="pt-0 text-center">Product List</h1>
                    <ProductList products={filterProducts()} />
                    <Pagination
                      currentPage={currentPage}
                      pageNumbers={pageNumbers}
                      setCurrentPage={setCurrentPage}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
