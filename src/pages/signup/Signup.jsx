import { Box, Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import SignupSchema from "./schema/SignupSchema";
import { notifications } from "@mantine/notifications";
import Google from "../signupAndLoginWithGoogle/google";
import axios from "axios";

export default function Signup() {

  function handelSubmit(values) {
    const data = { ...values };
    if (
      data.fullName == "" ||
      data.email == "" ||
      data.phone == "" ||
      data.password != data.confirmPassword
    ) {
      notifications.show({
        message: "Wrong in one of the inputs",
        color: "red",
      });
    } else {

      axios({
        url: "https://e-commerce-proejct.vercel.app/api/v1/auth/signup",
        method: "post",
        data: {
          userName:values.fullName,
          email: values.email,
          password: values.password,
          phone:values.phone
        },
        headers: { "Content-Type": "application/json" },
      })
        .then((result) => {
          console.log(result);
          localStorage.setItem("userEmail",JSON.stringify(values.email))
          if (result.status == 201) {
            setTimeout(() => {
              location.href = "/confirm-code";
            }, 1000);
          }
        })
        .catch((error) => {
          notifications.show({
            message: error.data.message,
            color: "red",
          });
          console.log(error);
        });

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
            phone:"",
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
              <label htmlFor="phone" className={classes.label}>
              Phone 
              </label>
              <Field
                className={classes.inputFiled}
                id="phone"
                name="phone"
                type="number"
                placeholder="Phone number"
              />
              <ErrorMessage
                name="phone"
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


            <Button   mt={5} type="submit" color="black">
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
