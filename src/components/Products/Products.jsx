"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex flex-wrap w-3/4">
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <div className="card card-compact w-72 h-72 bg-base-100 shadow-xl px-4 m-4 ">
              <figure>
                <img
                  className="object-contain h-32 w-52"
                  src={product.image}
                  alt="Shoes"
                />
                {/* <Image src={product.image} width={300} height={200} alt="img" /> */}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.rating.rate}</p>
                <p>({product.rating.count} Review)</p>
                <p>${product.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
