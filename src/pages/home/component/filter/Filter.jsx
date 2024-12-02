import { Box, Button } from "@mantine/core";
import classes from "./Filter.module.css";
import {
  contentType,
  HTTP_METHODS,
  httpRequest,
} from "../../../../core/utils/httpRequest";
import API_CONFIG from "../../../../core/utils/apiConfig";
import { useState } from "react";

export default function Filter() {
  const [category, setCategory] = useState([]);

  httpRequest(
    API_CONFIG.endpoints.categories.allCategories,
    HTTP_METHODS.GET,
    contentType.appJson
  )
    .then((res) => {
      // console.log(res.data.data);
      setCategory(res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <Box>
      <form className={classes.filterForm}>
        <Box className={classes.containerInput}>
          <input
            type="text"
            name="search"
            placeholder="Search.."
            className={classes.inputFilter}
          />
          <input
            type="text"
            name="product"
            placeholder="Product"
            className={classes.inputFilter}
          />
        </Box>

        <Box className={classes.containerInput}>
          <select name="category" className={classes.inputFilter}>
            <option value={""} selected hidden>
              Select category
            </option>
            {category.map((ele) => (
              <option key={ele.id} value={ele.id}>{ele.categoryName}</option>
            ))}
          </select>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className={classes.inputFilter}
          />
        </Box>
        <Box className={classes.containerBtn}>
          <Button className={classes.btnFormFilter} type="submit">
            Search
          </Button>
          <Button className={classes.btnFormFilter} type="reset">
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
}
