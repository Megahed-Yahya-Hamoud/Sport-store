import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
// import { IconSearch } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const user = JSON.parse(localStorage.getItem("userEmail"));

  const link = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Favorite",
      link: "/favorite",
    },
    {
      id: 3,
      title: "About",
      link: "/about",
    },
  ];
  // const [active, setActive] = useState();

  const item = link.map((ele) => (
    <Link key={ele.id} to={ele.link} className={classes.link}>
      {ele.title}
    </Link>
  ));

  return (
    <Box pt={15} className={classes.parent}>
      <header className={classes.header}>
        <Group
          justify="space-between"
          style={{ alignItems: "center" }}
          h="100%"
        >
          <Group h="100%" gap={40} visibleFrom="md">
            {item}{" "}
          </Group>
          {/* <MantineLogo size={30} /> */}
          <Box className={user ? classes.logoInUser : classes.logo}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Text fz={30} className={classes.logoSport}>
                Sports
              </Text>
            </Link>
          </Box>
          <Group visibleFrom="md">
            {/* <Box className={classes.search}>
              <IconSearch
                style={{ width: rem(18), height: rem(18) , marginRight:"5px" }}
                stroke={1.5}
              />
              
              <input
                className={classes.filed}
                type="text"
                placeholder="Search.."
              />
            </Box> */}
            {!user ? (
              <>
                <Link className={classes.login} to={"/login"} variant="default">
                  Log in
                </Link>
                <Link className={classes.signup} to={"/sign-up"}>
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <Text
                  ta={"center"}
                  fw={700}
                  fz={20}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "100px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                  py={3}
                  
                  px={9}
                >
                  {user[0]}
                </Text>
              </>
            )}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="md"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="md"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {item}

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
