import { Box, Button } from "@mantine/core";
import classes from "./Search.module.css";

export default function Search() {
  return (
    <Box>
      <form>
        <Box
          display={"flex"}
          className={classes.filterForm}
          style={{ alignItems: "baseline" }}
        >
          <input
            type="text"
            name="search"
            placeholder="Search.."
            className={classes.inputFilter}
            style={{ width: "71%", marginBottom: "10px" }}
            width={"100%"}
          />
          <Button className={classes.btnFormFilter} type="submit">
            Search
          </Button>
        </Box>
      </form>
    </Box>
  );
}
