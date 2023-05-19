"use client";
import { app, db } from "@/config/firebase";
// import { productRef } from "@/config/firebase";
import ProductItemComponent from "./productItem";
import { get, ref } from "firebase/database";
import { useState } from "react";
import { ProductItemInterface } from "./types";

export default function ProductListComponents() {
  // get(productRef).then((res) => console.log("res", res));
  const productsRef = ref(db, "products");
  const [products, setProducts] = useState<ProductItemInterface[]>([]);

  get(productsRef).then((res) => {
    console.log(res.val());
  });

  return <></>;
}
