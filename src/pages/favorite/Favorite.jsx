import { useEffect, useState } from "react";
import classes from "./Favorite.module.css";
import { Box, Image, Text } from "@mantine/core";
import axios from "axios";
import {
  httpRequest,
  HTTP_METHODS,
  contentType,
} from "../../core/utils/httpRequest";
import API_CONFIG from "../../core/utils/apiConfig";

export default function Favorite() {
  const [products, setProducts] = useState([]);

  httpRequest(
    API_CONFIG.endpoints.products.latestProducts,
    HTTP_METHODS.GET,
    contentType.appJson
  )
    .then((res) => {
      console.log(res.data.data);
      // setProducts(res.data.data.products);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <Box mt={100} className={classes.content}>
      {products.map((ele) => (
        <Box key={ele.id}>
          <Text>{ele.brandName}</Text>
        </Box>
      ))}
    </Box>
  );
}
