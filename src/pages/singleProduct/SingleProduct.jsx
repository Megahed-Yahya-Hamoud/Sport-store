import { Box, Button, Divider, Group, Image, Text } from "@mantine/core";
import classes from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { IoMdStar } from "react-icons/io";
import { useCounter } from "@mantine/hooks";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data), console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [count, handlers] = useCounter(1, { min: 1 });

  const size = [
    { label: "41" },
    { label: "42" },
    { label: "43" },
    { label: "44" },
    { label: "45" },
  ];

  const [active, setActive] = useState(size[0].label);

  const items = size.map((ele) => (
    <Box
      key={ele.label}
      className={classes.size}
      data-active={active === ele.label || undefined}
      onClick={() => {
        // event.preventDefault();
        setActive(ele.label);
      }}
    >
      {ele.label}
    </Box>
  ));

  return (
    <Box >
      <Box
        m={20}
        className={classes.parent}
  
      >
        <Carousel withIndicators loop   w={500}>
          {product.images &&
            product.images.map((ele) => (
              
                <Carousel.Slide key={ele}>
                  <Image src={ele} width={"100%"} h={"100%"} />
                </Carousel.Slide>
              
            ))}
        </Carousel>
        <Box className={classes.details} px={10}>
          <Text mt={0} className={classes.title} fw={"700"} my={20} fz={25}>
            {product.title}
          </Text>
          <Text className={classes.price} c={"red"} fw={"700"} my={20} fz={25}>
            {product.price}.00$
          </Text>

          <Box className={classes.stars} display={"flex"} style={{ gap: "2px" }}>
            <IoMdStar className={classes.iconStar} />
            <IoMdStar className={classes.iconStar} />
            <IoMdStar className={classes.iconStar} />
            <IoMdStar className={classes.iconStar} />
            <IoMdStar className={classes.iconStar} />
            <Text>
              {"{ "}0.0{" }"}
            </Text>
          </Box>
          <Divider my={10} />
          <Box
            className={classes.containerDetails}
          >
            <Box>
              <Text className={classes.title} fz={18} mb={10} fw={700} c={"rgb(22,65,150)"}>
                Size:
              </Text>
              <Group gap={15} justify="center" >
                {items}
              </Group>
            </Box>

            <Box>
            <Text className={classes.title} fz={18} mb={10} fw={700} c={"rgb(22,65,150)"}>
                Pieces:
              </Text>
              <Group className={classes.containerCounter}>
                <Button
                  color="rgb(22,65,150)"
                  c={"white"}
                  onClick={handlers.increment}
                >
                  +
                </Button>
                <Text> {count}</Text>
                <Button
                  color="rgb(22,65,150)"
                  c={"white"}
                  onClick={handlers.decrement}
                >
                  -
                </Button>
              </Group>
            </Box>
          </Box>
          <Divider my={20} />

          <Text className={classes.description}>{product.description}</Text>
          <Box mt={20} className={classes.containerBtn}>
            <Button w={"100%"} color="rgb(22,65,150)">
              Add to cart
            </Button>
            <Button w={"100%"} color="red">
              Buy it now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
