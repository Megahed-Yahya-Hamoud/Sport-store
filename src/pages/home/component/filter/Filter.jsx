import { Box, Button } from "@mantine/core";
import classes from "./Filter.module.css";

export default function Filter() {
  // const [cate, setCate] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.escuelajs.co/api/v1/products")
  //     .then((res) => res.json())
  //     .then((data) => {
        // setCate(data.title);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

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
