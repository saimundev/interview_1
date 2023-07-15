import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography, styled } from "@mui/material";
import { IoIosAirplane } from "react-icons/io";
import { IoAirplaneOutline } from "react-icons/io5";

const ButtonStyled = styled(Button)({
  borderRadius:"24px",
  background:"limegreen"
})

const Header = ({ setShow, show, flight, setFlight }) => {
  return (
    <Container maxWidth="lg">
      <Box bgcolor="white" p={3} mt={3}>
        <Grid container spacing={3}>
          <Grid item md={2} sm={6} xs={12}>
            <Box>
              <img
                src="https://www.biman-airlines.com/assets/images/logo/Biman-Logo-English-Copy.svg"
                alt=""
              />
            </Box>
            <Typography fontWeight="bold" mt="4px">
              Biman Bangla Airlines
            </Typography>
            <Typography
              fontWeight="bold"
              fontSize={14}
              mt="8px"
              color="limegreen"
            >
              BG 278 | W & BG 671 | E
            </Typography>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Typography  fontSize={30} fontWeight="bold">
              {flight ? "DAC" : "JFK"}
            </Typography>
            <Typography color="gray" fontSize={16}>
              Hazrat Shajal Airport
            </Typography>
            <Typography fontWeight="bold" color="limegreen">
              19.05
            </Typography>
            <Typography color="gray" fontSize={16}>
              SUN 4TH JUL 2022
            </Typography>
          </Grid>
          <Grid item md={2} sm={6} xs={12}>
            {flight ? (
              <Box position="relative">
                <IoIosAirplane
                 
                  size={65}
                  onClick={() => setFlight((prev) => !prev)}
                  style={{cursor:"pointer",position:"absolute",top:"0px"}}
                />
                <IoAirplaneOutline
                  size={65}
                  style={{ transform: "rotate(180deg)",cursor:"pointer",position:"absolute",top:"45px" }}
                  onClick={() => setFlight((prev) => !prev)}
                
                />
              </Box>
            ) : (
              <Box position="relative">
               <IoAirplaneOutline
                  size={65}
                  style={{cursor:"pointer",position:"absolute",top:"0px"}}
                  onClick={() => setFlight((prev) => !prev)}
                />
                <IoIosAirplane
                  size={65}
                  style={{ transform: "rotate(180deg)",cursor:"pointer",position:"absolute",top:"45px" }}
                  onClick={() => setFlight((prev) => !prev)}
                />
               
              </Box>
            )}
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Typography fontSize={30} fontWeight="bold">
              {flight ? "JFK" : "DAC"}
            </Typography>
            <Typography color="gray" fontSize={16}>
              JF Kendly Intl Airport
            </Typography>
            <Typography fontWeight="bold" color="limegreen">
              12.05
            </Typography>
            <Typography color="gray" fontSize={16}>
              MON 6TH JUL 2022
            </Typography>
          </Grid>
          <Grid item md={2} sm={6} xs={12}>
            <Typography fontSize={30} mb={2}>
              ৳ 1850
            </Typography>
            <ButtonStyled variant="contained" color="success">
              BOOK NOW
            </ButtonStyled>
            <Typography
              onClick={() => setShow((prev) => !prev)}
              mt={1}
              color="gray"
              fontSize={16}
              style={{ cursor: "pointer" }}
              fontWeight="medium"
            >
              {show ? "Hide Details" : "Flight Details"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Header;
