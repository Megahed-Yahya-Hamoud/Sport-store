import { useEffect, useState } from "react";
import classes from "./Favorite.module.css";
import { Box, Text } from "@mantine/core";
import axios from "axios";

export default function Favorite() {
  // const [products, setProducts] = useState([]);

  // axios({
  //   url: "https://e-commerce-proejct.vercel.app/api/v1/product/latestproducts",
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((result) => {
  //     setProducts(result), console.log(result.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });


  



  return (
    <div>
      <Box className={classes.content}>
      </Box>
    </div>
  );
}
