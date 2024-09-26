import { Box, Button, Text } from "@mantine/core";
import classes from "./ConfirmCode.module.css";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import axios from "axios";

export default function ConfirmCode() {
  const [otp, setOpt] = useState(new Array(6).fill(""));

  function handleChange(e, index) {
    if (isNaN(e.target.value)) return false;

    setOpt([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    } else if (!e.target.value) {
      e.target.previousSibling.focus();
    }
  }

  function handlePoste(e) {
    const value = e.clipboardData.getData("text");
    if (isNaN(value)) return false;

    const updateValue = value.toString().split("").slice(0, otp.length);
    setOpt(updateValue);

    const focusedInput = e.target.parentNode.querySelector("input:focus");

    if (focusedInput) {
      focusedInput.blur();
    }
  }

  function check() {
    const email = JSON.parse(localStorage.getItem("userEmail"));

    axios({
      url: "https://e-commerce-proejct.vercel.app/api/v1/auth/verifyemail",
      method: "post",
      data: {
        email: email,
        code: Number(otp.join("")),
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
            location.href = "/login";
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



    // const num = ["1", "1", "1", "1", "1", "1"];

    // if (
    //   otp[0] == num[0] &&
    //   otp[1] == num[1] &&
    //   otp[2] == num[2] &&
    //   otp[3] == num[3] &&
    //   otp[4] == num[4] &&
    //   otp[5] == num[5]
    // ) {
    //   notifications.show({
    //     message: "Account creation was successful ",
    //     color: "green",
    //   });

    //   setTimeout(() => {
    //     location.href = "/login";
    //   }, 1000);
    // } else {
    //   notifications.show({
    //     message: "Make sure the code is written correctly",
    //     color: "red",
    //   });
    // }

    // console.log(num);
    console.log(...otp);
  }

  return (
    <Box px={5}>
      <Box mt={70} display={"grid"} style={{ justifyItems: "center" }}>
        <Text fz={30} fw={700}>
          Verification code
        </Text>
        <Text fz={20} fw={500}>
          A confirmation code has been sent
        </Text>
        <Text>Check your email address</Text>
      </Box>
      <Box
        mt={20}
        display={"flex"}
        style={{ justifyContent: "center", gap: "10px" }}
      >
        {otp.map((data, i) => (
          <input
            key={i}
            type="text"
            className={classes.input}
            placeholder="0"
            value={data}
            maxLength={1}
            onChange={(e) => handleChange(e, i)}
            onPaste={(e) => handlePoste(e)}
          />
        ))}
      </Box>
      <Box mt={20} display={"flex"} style={{ justifyContent: "center" }}>
        <Button
          onClick={() => check()}
          color="black"
          style={{ borderRadius: "20px" }}
          className={classes.btnSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
