import { useEffect, useState } from "react";
import classes from "./Favorite.module.css";
import { Box, Text } from "@mantine/core";
import axios from "axios";
import { httpRequest, HTTP_METHODS, contentType  } from "../../core/utils/httpRequest";
import API_CONFIG from "../../core/utils/apiConfig";

export default function Favorite() {
  //const [products, setProducts] = useState([]);
  httpRequest(API_CONFIG.endpoints.products.latestProducts, HTTP_METHODS.GET, contentType.appJson)
  .then(res =>{
    console.log(res);
  }).catch(error=>{
    console.log(error);
  })
  //console.log(data)
  // axios({
  //   url: "https://e-commerce-proejct.vercel.app/api/v1/product/latestproducts",
  //   method: "GET",
  //   headers: {
  //     "Content-Type": contentType.appJson,
  //   },
  // })
  //   .then((result) => {
  //     //setProducts(result), 
  //     console.log(result.data);
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
