import { Box, Button, Divider, Group, Image, Text } from "@mantine/core";
import classes from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { IoMdStar } from "react-icons/io";
import { useCounter } from "@mantine/hooks";
import ReactPlayer from "react-player";
import {
  contentType,
  HTTP_METHODS,
  httpRequest,
} from "../../core/utils/httpRequest";
import API_CONFIG from "../../core/utils/apiConfig";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [colors, setColors] = useState([]);
  const [size, setSize] = useState([]);

  httpRequest(
    API_CONFIG.endpoints.products.productById + "/" + id,
    HTTP_METHODS.GET,
    contentType.appJson
  )
    .then((res) => {
      console.log(res.data.data[0]);
      setProduct(res.data.data[0]);
      setColors(res.data.data[0].colors)      
      setSize(res.data.data[0].size)      
      
    })
    .catch((error) => {
      console.log(error);
    });

  const [count, handlers] = useCounter(1, { min: 1 });

  // const size = [
  //   { label: "41" },
  //   { label: "42" },
  //   { label: "43" },
  //   { label: "44" },
  //   { label: "45" },
  // ];

  const [activeSize, setActiveSize] = useState(size[0]);

  const items = size.map((ele) => (
    <Box
      key={ele}
      className={classes.size}
      data-active={activeSize === ele || undefined}
      onClick={() => {
        setActiveSize(ele);
      }}
    >
      {ele}
    </Box>
  ));

  // const colors = [
  //   { color: "red" },
  //   { color: "green" },
  //   { color: "yellow" },
  //   { color: "blue" },
  //   { color: "grey" },
  // ];

  const [activeColor, setActiveColor] = useState(colors[0]);

// console.log(activeColor);

  const color = colors.map((ele) => (
    <Box
      key={ele}
      className={classes.color}
      data-active={activeColor == ele || undefined}
      onClick={() => {
        setActiveColor(ele);
        // console.log(ele);
      }}
    >
      <Box
        style={{ borderRadius: "3px" }}
        h={"30px"}
        bg={ele}
        w={"30px"}
      ></Box>
    </Box>
  ));

  return (
    <Box>
      <Box m={20} className={classes.parent}>
        <Carousel withIndicators loop w={500}>
          {product.images &&
            product.images.map((ele) => (
              <Carousel.Slide key={ele}>
                <Image
                  style={{ borderRadius: "8px" }}
                  src={ele}
                  width={"100%"}
                  h={"100%"}
                />
              </Carousel.Slide>
            ))}
        </Carousel>
        <Box className={classes.details} px={10}>
          <Text mt={0} mb={0} className={classes.title} fw={"700"} fz={25}>
            {product.productName}
          </Text>
          <Text className={classes.title} pl={1} fw={600} c={"#007185"}>
            Brand: {product.brandName}
          </Text>
          <Text className={classes.price} c={""} fw={"700"} my={0} fz={25}>
            {product.finalPrice}.00
            <span
              style={{
                // color: "",
                fontSize: "20px",
                fontWeight: 500,
                // paddingBottom:"10px"
              }}
            >
              ${" "}
            </span>
            <span
              style={{
                color: "red",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              -{product.discount}%
            </span>
          </Text>

          <Text className={classes.title} mb={5} pl={2} fw={600} c={"#777A7A"}>
            List price:{" "}
            <del
              style={{
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {product.price}$
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

          {/* </Box> */}
          <Divider my={10} />
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
              <Group gap={15} justify="start">
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
                {product.stock} piece
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
                ta={"center"}
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
          {/* <Box mb={40} ta={"center"} className={classes.descriptionBox}>
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


          

          <ReactPlayer
            url="https://youtu.be/gbLmku5QACM?si=6tDuGSODypqFd4JM"
            height={"400px"}
            width={"100%"}
            controls
            playIcon
            className={classes.video}
          /> */}
        </Box>
      </Box>
    </Box>
  );
}
