import { Box, Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import SignupSchema from "./schema/SignupSchema";
import { notifications } from "@mantine/notifications";
import Google from "../signupAndLoginWithGoogle/google";

export default function Signup() {
  function handelSubmit(values) {
    const data = { ...values };
    if (
      data.fullName == "" ||
      data.email == "" ||
      data.password != data.confirmPassword
    ) {
      notifications.show({
        message: "Wrong in one of the inputs",
        color: "red",
      });
    } else {
      delete data.confirmPassword;
      
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      localStorage.setItem("user",JSON.stringify(data))

      // notifications.show({
      //   message: "Success register",
      //   color: "green",
      // });
      setTimeout(() => {
        location.href = "/confirm-code";
      }, 1000);
    }
  }

  return (
    <Box className={classes.back}>
      <Box className={classes.parent}>
        <Formik
          onSubmit={handelSubmit}
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
        >
          <Form className={classes.signupFrom}>
            <Text c={"black"} ta={"center"} fw={700} fz={30}>
              Sign-up
            </Text>

            <Box   style={{display:"flex" , justifyContent:"center"}}>
              <Google />
            </Box>

            <Divider my="xs" label="OR" labelPosition="center" />

            <Box mt={-7}>
              <label htmlFor="fullName" className={classes.label}>
                Full Name
              </label>
              <br />
              <Field
                className={classes.inputFiled}
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full name"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                style={{ color: "red" , fontSize:"15px" , fontWeight:500 }}
              />
            </Box>
            <Box>
              <label htmlFor="email" className={classes.label}>
                Email
              </label>
              <Field
                className={classes.inputFiled}
                id="email"
                name="email"
                type="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" , fontSize:"15px" , fontWeight:500 }}
              />
            </Box>
            <Box>
              <label htmlFor="password" className={classes.label}>
                Password
              </label>
              <Field
                className={classes.inputFiled}
                type="password"
                id="password"
                name="password"
                placeholder="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" , fontSize:"15px" , fontWeight:500 }}
              />
            </Box>
            <Box>
              <label htmlFor="confirmPassword" className={classes.label}>
                Confirm password
              </label>
              <Field
                className={classes.inputFiled}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirm password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                style={{ color: "red" , fontSize:"15px" , fontWeight:500 }}
              />
            </Box>

            <Button mt={5} type="submit" color="black">
              Submit
            </Button>
            <Box mt={-5} ta={"center"}>
              <Text m={0} fz={15} fw={400}>
                Do you have an account?{" "}
                <span>
                  {" "}
                  <Link to={"/login"} className={classes.btnLogin}>
                    login
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
