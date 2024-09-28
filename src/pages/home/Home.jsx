import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { Box, Button, Image, Menu, Pagination, Text } from "@mantine/core";
import {
  IconDotsVertical,
  IconHeart,
  IconShoppingCart,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Filter from "./component/Filter";
import HeaderHome from "./component/header/HeaderHome";
import Companies from "./component/seaction-Companies/Companies";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data), console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box>
      <Box className={classes.content}>
        <HeaderHome />
        <Box mt={10} className={classes.companies}>
          <Companies/>
        </Box>
        <Box mt={30}className={classes.firstTitle}>
          <Text fz={40} fw={700}>
            Latest products
          </Text>
        </Box>
        <Box>
          <Filter />
        </Box>
        <Box my={10} className={classes.secondTitle}>
          <Text fz={30} fw={700}>
            Latest products:
          </Text>
        </Box>
        <Box mb={130} className={classes.containerCards}>
          {products.map((item) => (
            <>
              {item.id < 52 ? (
                <Box key={item.id} className={classes.parentCard}>
                  <Box className={classes.card}>
                    <Image className={classes.imageCard} src={item.images} />
                    <Box className={classes.icons}>
                      <Box className={classes.icons}>
                        <IconShoppingCart className={classes.icon} />
                        <IconHeart className={classes.iconTwo} />
                      </Box>
                    </Box>
                    <Box className={classes.toggle}>
                      <Menu
                        transitionProps={{
                          transition: "rotate-right",
                          duration: 150,
                        }}
                        shadow="md"
                        width={200}
                      >
                        <Menu.Target>
                          <Button className={classes.dots}>
                            <IconDotsVertical />
                          </Button>
                        </Menu.Target>
                        <Menu.Dropdown
                          style={{
                            border: "0px",
                            boxShadow: "none",
                          }}
                          w={"fit-content"}
                          bg={"#ffffff00"}
                          ml={5}
                        >
                          <Menu.Item
                            w={"fit-content"}
                            bg={"#f0f8ff00"}
                            m={5}
                            onClick={() => (location.href = "/")}
                            leftSection={
                              <IconShoppingCart
                                className={classes.iconDotsOne}
                              />
                            }
                          ></Menu.Item>
                          <Menu.Item
                            w={"fit-content"}
                            bg={"#f0f8ff00"}
                            m={5}
                            onClick={() => (location.href = "/")}
                            leftSection={
                              <IconHeart className={classes.iconDotsTwo} />
                            }
                          ></Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </Box>
                  </Box>
                  <Box className={classes.details}>
                    <Link to={`/products/${item.id}`} className={classes.text}>
                      {item.title}
                    </Link>

                    <Text fz={20} fw={700} c={"red"} className={classes.price}>
                      {item.price}$
                    </Text>
                  </Box>
                </Box>
              ) : (
                <></>
              )}
            </>
          ))}
        </Box>
        <Box mb={50} display={"flex"} style={{ justifyContent: "center" }}>
          <Pagination total={5} color="black" size="lg" />
        </Box>
      </Box>
    </Box>
  );
}
