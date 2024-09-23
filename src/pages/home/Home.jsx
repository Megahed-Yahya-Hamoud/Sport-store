import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { Box, Button, Image, Menu, Text } from "@mantine/core";
import {
  IconDotsVertical,
  IconHeart,
  IconShoppingCart,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Filter from "./component/Filter";

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

  // console.log(products);

  // useEffect(() => {
  //   axios({
  //     url: `https://fakestoreapi.com/products`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "get",
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log(number);

  // function addCode(value) {
  //   setNumber(value);
  //   console.log(number);
  // }

  return (
    <Box>
      <Box className={classes.content}>
        <Text mt={40} ta={"center"} className={classes.title}>
          Everything new in the world <br /> of sports
        </Text>
        <Box>
          <Filter />
        </Box>
        <Box mb={150} className={classes.containerCards}>
          {products.map((item) => (
            <>
              {item.id < 52 ? (
                <Box key={item.id} className={classes.parentCard}>
                  <Box className={classes.card}>
                    <Image className={classes.imageCard} src={item.images} />
                    <Box className={classes.icons}>
                      <Box className={classes.icons}>
                        <IconShoppingCart  className={classes.icon} />
                        <IconHeart  className={classes.iconTwo} />
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
                          styles={{
                            dropdown: {
                              border: "0px",
                              boxShadow: "none",
                              backgroundColor: "#ffffff00",
                              marginLeft: "5px",
                            },
                          }}
                          w={"fit-content"}
                          // className={classes.style}
                        >
                          <Menu.Item
                            w={"fit-content"}
                            m={5}
                            leftSection={
                              <IconShoppingCart
                                className={classes.iconDotsOne}
                              />
                            }
                          ></Menu.Item>
                          <Menu.Item
                            w={"fit-content"}
                            m={5}
                            leftSection={
                              <IconHeart className={classes.iconDotsTwo} />
                            }
                          ></Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </Box>
                  </Box>
                  <Box className={classes.details}>
                    <Link to={`/products/${item.id}`}  className={classes.text}>
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
        <Box display={"flex"} style={{ justifyContent: "center" }}></Box>
      </Box>
    </Box>
  );
}
