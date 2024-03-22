// ParentComponent.js
import React, { useState } from "react";
import Category from "./Category";
import Subcategories from "./Subcategories";

const ParentComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div>
      <Category onCategorySelect={handleCategorySelect} />
      <Subcategories selectedCategory={selectedCategory} />
    </div>
  );
};

export default ParentComponent;
