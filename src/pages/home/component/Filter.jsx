import { Box, Button } from "@mantine/core";
import classes from "./Filter.module.css";

export default function Filter() {
  return (
    <Box mt={40} mb={30}>
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
