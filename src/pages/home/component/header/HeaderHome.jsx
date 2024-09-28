import { Box, Text } from "@mantine/core";
import classes from "./HeaderHome.module.css";

export default function HeaderHome() {
  // const autoplay = useRef(Autoplay({ delay: 1000 }));

  // const car = (
  //     <Carousel
  //       loop
  //       withControls={false}
  //       height={300}
  //       plugins={[autoplay.current]}
  //       onMouseEnter={autoplay.current.stop}
  //       onMouseLeave={autoplay.current.reset}
  //     >
  //       <Carousel.Slide>
  //         <Image src={image} h={"100%"} w={"100%"}/>
  //       </Carousel.Slide>

  //     </Carousel>

  // );

  return (
    <Box>
      <Box className={classes.parent}>
        <Box w={"70%"}>
          <Text w={"95%"} className={classes.mainTitle}>
            Everything new in the world of sports
          </Text>
          <Text  c={"white"} className={classes.title}>
            SALE UP TO{" "}
            <span className={classes.sale} style={{ color: "red" }}>
              50%
            </span>{" "}
            OFF
          </Text>
        </Box>
        <Box className={classes.imageContainer}>
          <Box className={classes.image}></Box>
          <Box className={classes.image}></Box>
          <Box className={classes.image}></Box>
          <Box className={classes.image}></Box>
          <Box className={classes.image}></Box>
          <Box className={classes.image}></Box>
         
        </Box>
      </Box>
      <Box className={classes.container}>
        <Text mt={30} ta={"center"} className={classes.titleSecond}>
          Everything new in the world <br /> of sports
        </Text>
      </Box>
    </Box>
  );
}
