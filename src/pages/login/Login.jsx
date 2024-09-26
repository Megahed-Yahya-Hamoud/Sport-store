import { Box, Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoginSchema from "./schema/LoginSchema";
import { notifications } from "@mantine/notifications";
import Google from "../signupAndLoginWithGoogle/google";
import axios from "axios";

export default function Login() {
  // function handelSubmit(values) {
  //   const data = { ...values };

  //   const user = JSON.parse(localStorage.getItem("user"));

  //   if (user.email == data.email && user.password == data.password) {
  //     notifications.show({
  //       message: "Success login",
  //       color: "green",
  //     });

  //     setTimeout(() => {
  //       location.href = "/";
  //     }, 1000);
  //   } else {
  //     notifications.show({
  //       message: "Wrong in one of the inputs",
  //       color: "red",
  //     });
  //   }

  //   // console.log(user.email);
  //   // console.log(data.email);
  // }

  function loginUser(values) {
  

    axios({
      url: "https://e-commerce-proejct.vercel.app/api/v1/auth/login",
      method: "post",
      data: {
        email: values.email,
        password: values.password,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => {
        console.log(result);
        
        if (result.status == 200) {
          notifications.show({
            message: result.data.message,
            color: "green",
          });

          setTimeout(() => {
            location.href = "/";
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
        
        notifications.show({
          message: error.data.message,
          color: "red",
        });
        
      });
  }

  return (
    <Box className={classes.back}>
      <Box className={classes.parent}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={loginUser}
          validationSchema={LoginSchema}
        >
          <Form className={classes.loginFrom}>
            <Text c={"black"} ta={"center"} fw={700} fz={30}>
              Login
            </Text>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Google />
            </Box>
            <Divider my="xs" label="OR" labelPosition="center" />
            <Box mt={-7}>
              <label htmlFor="email" className={classes.label}>
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className={classes.inputFiled}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", fontSize: "15px", fontWeight: 500 }}
              />
            </Box>

            <Box>
              <Box
                display={"flex"}
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label htmlFor="password" className={classes.label}>
                  Password
                </label>
                <Text fz={14} fw={400} c={"black"}>
                  <Link to={"/"} className={classes.btnSignup}>
                    Forget?
                  </Link>
                </Text>
              </Box>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className={classes.inputFiled}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red", fontSize: "15px", fontWeight: 500 }}
              />
            </Box>
            <Button mt={5} type="submit" color="black">
              Submit
            </Button>
            <Box mt={-5} ta={"center"}>
              <Text m={0} fz={15} fw={400}>
                Don{"'"}t have an account?{" "}
                <span>
                  {" "}
                  <Link to={"/sign-up"} className={classes.btnSignup}>
                    sign up
                  </Link>
                </span>
              </Text>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
}
