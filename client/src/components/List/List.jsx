import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";


const List = ({ subCats, maxPrice, sort, catId }) => {
  
  let url = `/products?populate=*&[filters][categories][id]=${catId}`;

  if (subCats.length > 0) {
    url += subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`).join("");
  }

  if (maxPrice) {
    url += `&[filters][price][$lte]=${maxPrice}`;
  }

  if (sort) {
    url += `&sort=price:${sort}`;
  }

  const { data, loading, error } = useFetch(url);

  return (
    <div className="list">
      {loading
        ? "Loading......"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;