import { Box, Button, Divider, Group, Image, Text } from "@mantine/core";
import classes from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { IoMdStar } from "react-icons/io";
import { useCounter } from "@mantine/hooks";
import ReactPlayer from "react-player";

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
        setActive(ele.label);
      }}
    >
      {ele.label}
    </Box>
  ));

  const colors = [
    { color: "red" },
    { color: "green" },
    { color: "yellow" },
    { color: "blue" },
    { color: "grey" },
  ];

  const [activeColor, setActiveColor] = useState(colors[0].color);

  const color = colors.map((ele) => (
    <Box
      key={ele.color}
      className={classes.color}
      data-active={activeColor === ele.color || undefined}
      onClick={() => {
        setActiveColor(ele.color);
      }}
    >
      <Box style={{borderRadius:"3px"}} h={"30px"} bg={ele.color} w={"30px"}></Box>
    </Box>
  ));

  return (
    <Box>
      <Box m={20} className={classes.parent}>
        <Carousel  withIndicators loop w={500}>
          {product.images &&
            product.images.map((ele) => (
              <Carousel.Slide  key={ele}>
                <Image style={{borderRadius:"8px"}} src={ele} width={"100%"} h={"100%"} />
              </Carousel.Slide>
            ))}
        </Carousel>
        <Box className={classes.details} px={10}>
          <Box className={classes.containerTitle}>
            <Box>
              <Text mt={0} mb={0} className={classes.title} fw={"700"} fz={25}>
                {product.title}
                <Text display={"inline-block"} fz={15} fw={600}>
                  .(Puma)
                </Text>
              </Text>
              <Text
                className={classes.price}
                c={"red"}
                fw={"700"}
                my={20}
                fz={25}
              >
                {product.price}.00${" "}
                <del
                  style={{
                    color: "#8b8b8bb3",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  100$
                </del>
              </Text>

              <Box className={classes.stars}>
                <IoMdStar className={classes.iconStar} />
                <IoMdStar className={classes.iconStar} />
                <IoMdStar className={classes.iconStar} />
                <IoMdStar className={classes.iconStar} />
                <IoMdStar className={classes.iconStar} />
                <Text>
                  {"{ "}0.0{" }"}
                </Text>
              </Box>
            </Box>
            <Box>
              <Image
                src={
                  "https://www.logodesignvalley.com/blog/wp-content/uploads/2023/05/puma-2.png"
                }
                w={"100%"}
                h={"200px"}
              />
            </Box>
          </Box>
          <Divider mb={10} />
          <Box mb={20} className={classes.containerDetails}>
            <Box>
              <Text
                className={classes.title}
                fz={18}
                mb={10}
                fw={700}
                c={"rgb(22,65,150)"}
              >
                Remaining colors:
              </Text>
              <Group gap={15} justify="center">
                {color}
              </Group>
            </Box>
            <Box
              display={"grid"}
              style={{
                alignItems: "center",
                justifyItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Text
                className={classes.title}
                fz={18}
                fw={700}
                c={"rgb(22,65,150)"}
              >
                Remaining pieces:
              </Text>
              <Text ml={5} c={"black"} fz={18} mb={10} fw={700}>
                45 piece
              </Text>
            </Box>
          </Box>
          <Box className={classes.containerDetails}>
            <Box>
              <Text
                className={classes.title}
                fz={18}
                mb={10}
                fw={700}
                c={"rgb(22,65,150)"}
              >
                Size:
              </Text>
              <Group gap={15} justify="center">
                {items}
              </Group>
            </Box>

            <Box>
              <Text
                className={classes.title}
                fz={18}
                mb={10}
                fw={700}
                c={"rgb(22,65,150)"}
              >
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
          {/* <Divider my={20} /> */}
          <Box mt={50} className={classes.containerBtn}>
            <Button w={"100%"} color="rgb(22,65,150)">
              Add to cart
            </Button>
            <Button w={"100%"} color="red">
              Buy it now
            </Button>
          </Box>
        </Box>

        <Box className={classes.containerDescription}>
          <Box className={classes.descriptionBox}>
            <Text
              className={classes.title}
              fz={20}
              fw={700}
              c={"rgb(22,65,150)"}
            >
              Product description:
            </Text>{" "}
            <Text className={classes.description}>{product.description}</Text>
          </Box>
          <Box className={classes.videoBox}>
            <ReactPlayer
              url="https://youtu.be/gbLmku5QACM?si=6tDuGSODypqFd4JM"
              height={"350px"}
              width={"100%"}
              controls
              playIcon
              className={classes.video}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
