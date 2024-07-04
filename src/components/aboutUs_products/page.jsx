"use client";
import React, { useState } from "react";
import "./aboutUs_product.scss";
import Image from "next/image";
import products from "./productData.js";
import { Dropdown } from "primereact/dropdown";
const Page = () => {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const brandMatch = selectedBrand === "all" || product.category === selectedBrand;
    const typeMatch = selectedType === "all" || product.categoryType === selectedType;
    const categoryMatch = selectedCategory === "all" || product.categoryValue === selectedCategory;
    return brandMatch && typeMatch && categoryMatch;
  });

  return (
    <>
      <div className="first_top">
        <div id="sticky_top" className="products_name">EXPLORE PRODUCTS</div>

        <div className="supply">
          <div id="sticky" className="one">
            <div className="dropdown1">
              <label htmlFor="brand-select" className="dropdown-label">
                SELECT BRAND
              </label>
              <select id="brand-select" className="category-select" onChange={handleBrandChange}>
                <option className="option" value="all">All Brands</option>
                <option className="option" value="Xylem">Xylem</option>
                <option className="option" value="Royal Crown">Royal Crown</option>
                <option className="option" value="QBliss">QBliss</option>
                <option className="option" value="Crown XCL">Crown XCL</option>
              </select>
            </div>

            <div className="dropdown1">
              <label htmlFor="category-select" className="dropdown-label">
                SELECT CATEGORY
              </label>
              <select id="category-select" className="category-select" onChange={handleCategoryChange}>
                <option className="option" value="all">All Categories</option>
                <option className="option" value="Decorative">Decorative</option>
                <option className="option" value="Decorative Interior Compacts">Interior Compacts</option>
                <option className="option" value="Decorative Exterior Compacts">Exterior Compacts</option>
              </select>
            </div>

            <div className="dropdown1">
              <label htmlFor="type-select" className="dropdown-label">
                SELECT TYPE
              </label>
              <select id="type-select" className="category-select" onChange={handleTypeChange}>
                <option className="option" value="all">All Types</option>
                <option className="option" value="Spotless">Spotless</option>
                <option className="option" value="Exotic Urbane">Exotic Urbane</option>
                <option className="option" value="Classic Wood Grains">Classic Wood Grains</option>
                <option className="option" value="Stones">Stones</option>
                <option className="option" value="Solid Colors">Solid Colors</option>
                <option className="option" value="Textiles">Textiles</option>
                <option className="option" value="Mirrors">Mirrors</option>
                <option className="option" value="Woodgrains">Woodgrains</option>
              </select>
            </div>
          </div>

          <div className="container">
            {filteredProducts.map((product, index) => {
              const className =
                index === 9
                  ? "big"
                  : [0, 2, 3, 7, 8, 10].includes(index)
                  ? "tall"
                  : "";
              return (
                <div key={index} className={className}>
                  <Image src={product.image} alt={product.name} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
