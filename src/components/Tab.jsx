import { Box, Button, Grid,styled } from "@mui/material";
import React from "react";



const Tab = ({updateTab,tab}) => {
  return (
    <Box mb={3} mt={2}>
      <Grid container spacing={2}>
        <Grid item  md={3} sm={6} >
          <Button sx={{fontWeight:"bold"}} variant={tab == 1 ? "contained":""} color={tab ? "success":""} onClick={()=>updateTab(1)}>FLIGHT DETAILS</Button>
        </Grid>
        <Grid item md={3} sm={6} >
          <Button sx={{fontWeight:"bold"}} variant={tab ==2 ? "contained":""} color={tab ? "success":""} onClick={()=>updateTab(2)}>FAIR SAMMARY</Button>
        </Grid>
        <Grid item md={3} sm={6} >
          <Button sx={{fontWeight:"bold"}} variant={tab==3 ? "contained":""} color={tab ? "success":""} onClick={()=>updateTab(3)}>FAIR POLICY</Button>
        </Grid>
        <Grid item md={3} sm={6} >
          <Button sx={{fontWeight:"bold"}} variant={tab==4 ? "contained":""} color={tab ? "success":""} onClick={()=>updateTab(4)}>BAGGAGE</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tab;
