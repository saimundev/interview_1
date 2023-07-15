import {
  Box,
  Button,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import Tab from "./Tab";
import { baggage, details, summary } from "../data/data";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#97DBAE",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Details = ({ show, flight }) => {
  const [tab, setTab] = useState(1);
  const updateTab = (id) => {
    setTab(id);
  };
  return (
    <Container maxWidth="lg">
      <Box bgcolor="white" px={3}>
        {show && (
          <>
            <Tab tab={tab} updateTab={updateTab} />

            {tab == 1 && (
              <Grid container spacing={2}>
                {details.map((item) => {
                  return (
                    <Grid item md={3} sm={6} xs={12}>
                      <Typography fontSize={20} fontWeight="bold">
                        {flight ? item.title?.a : item.title?.b}
                      </Typography>
                      <Typography fontSize={12} color="gray">
                        {item.minit}
                      </Typography>
                      <Typography fontSize={14} fontWeight="bold">
                        {item.name}
                      </Typography>
                      <Typography
                        fontWeight="bold"
                        color="limegreen"
                        fontSize={14}
                      >
                        {item.dec}
                      </Typography>
                      <Typography fontSize={14} color="gray" mb={2}>
                        {item.options}
                      </Typography>
                      {item.class && (
                        <Typography fontSize={14} color="gray">
                          Econamy: {item.class}
                        </Typography>
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            )}

            {tab == 2 && (
              <Box sx={{ overflowX: "scroll" }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#03C988" }}>
                      <TableCell sx={{ color: "white" }}>Pax Type</TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        Base Fair (BDT)
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        Tax
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        Total (BDT)
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        Pax Count
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        Servies Fee (BDT)
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        Sub Total (BDT)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {summary.map((item) => (
                      <StyledTableRow
                        key={item.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          mb: "10px",
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {item.type}
                        </TableCell>
                        <TableCell align="right">{item.fair}</TableCell>
                        <TableCell align="right">{item.tax}</TableCell>
                        <TableCell align="right">{item.total}</TableCell>
                        <TableCell align="right">{item.count}</TableCell>
                        <TableCell align="right">{item.servies}</TableCell>
                        <TableCell align="right">{item.subTotal}</TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            )}

            {tab == 3 && (
              <Box>
                <Grid container spacing={2}>
                  <Grid item md={6} sm={6} xs={12}>
                    <Box>
                      <Box
                        sx={{
                          bgcolor: "lightblue",
                          display: "inline-block",
                          px: "20px",
                          py: "5px",
                        }}
                      >
                        Cancallation
                      </Box>
                      <Typography mt={2} color="gray" fontSize={14}>
                        Refound Amount = paid amount- Airline Callentation Fee
                      </Typography>
                    </Box>

                    <Box>
                      <Box
                        mt={3}
                        sx={{
                          bgcolor: "lightblue",
                          display: "inline-block",
                          px: "20px",
                          py: "5px",
                        }}
                      >
                        Re-issue
                      </Box>
                      <Typography mb={2} mt={2} color="gray" fontSize={14}>
                        Re-issue Fee = paid amount- Airline Ree-issue Fee
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Box
                        sx={{
                          bgcolor: "lightblue",
                          display: "inline-block",
                          px: "20px",
                          py: "5px",
                        }}
                      >
                        void
                      </Box>
                      <Typography mt={2} color="gray" fontSize={14}>
                        Refound Amount = paid amount- Airline Callentation Fee
                      </Typography>
                    </Box>

                    <Box>
                      <Box
                        mt={3}
                        sx={{
                          bgcolor: "lightblue",
                          display: "inline-block",
                          px: "20px",
                          py: "5px",
                        }}
                      >
                        Refund
                      </Box>
                      <Typography mt={2} color="gray" fontSize={14}>
                        Re-issue Fee = paid amount- Airline Ree-issue Fee
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            )}

            {tab == 4 && (
              <Box sx={{ overflowX: "scroll" }}>
                <Table sx={{ width: "100%" }}>
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#03C988" }}>
                      <TableCell sx={{ color: "white" }}>Baggage</TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        Chack-In
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        Cabin
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {baggage.map((item) => (
                      <StyledTableRow
                        key={item.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {item.type}
                        </TableCell>
                        <TableCell align="right">{item.kg} KG</TableCell>
                        <TableCell align="right">{item.caben}</TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Details;
