import { Box, Divider, InputAdornment, TextField, Typography } from "@mui/material";
import { Component } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { details } from "../Data";

class Details extends Component {
  render() {
    return (
      <Box sx={{ backgroundColor: "white", width:'99%', padding: "20px", }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: "30px",
              color: "black",
              fontWeight: 650,
            }}
          >
            Product sell
          </Typography>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "white",
                  "& fieldset": { border: "none" },
                  width: "60%",
                }}
                id="outlined-basic"
                placeholder="searcher..."
                variant="outlined"
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "lightgrey",
                }}
              >
                <Typography>Last 30days</Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: "15px",
              color: "grey",
              fontWeight: 650,
            }}
          >
            Product Name
          </Typography>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center",gap:{xl:12,lg:12,md:12,sm:4,xs:1},marginTop:'10px' }}>
              <Typography sx={{
                
                color: "lightgrey",
              }}>Stack</Typography>

              <Typography sx={{
                
                color: "lightgrey",
              }}>Price</Typography>

              
                <Typography sx={{
                
                color: "lightgrey",
              }}>Total States</Typography>
              
            </Box>
          </Box>
        </Box>
        <Divider sx={{marginTop:'10px'}}/>
        {details.map((each)=>
        <Box sx={{marginTop:'20px'}}>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            
          }}
        >
      <Box sx={{display:'flex',alignItems:'center',gap:2}}>
    <Box component='img' sx={{width:{xl:'80px',md:'80px',lg:'80px',sm:'80px',xs:'55px'},borderRadius:'10px'}} src={each.img} />
        <Box>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: "15px",
              color: "black",
              fontWeight: {xl:650,lg:650,md:650,sm:600,xs:300},
            }}
          >
            {each.name}
          </Typography>
          <Typography sx={{
              fontSize: {xl:"15px",lg:"15px",md:"15px",sm:"15px",xs:'10px'},
              color: "lightgrey",
            }}>{each.title}</Typography>
          </Box>
          </Box>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center",gap:{xl:13,lg:13,md:13,sm:4,xs:3},marginTop:'10px' }}>
              <Typography sx={{
                
                color: "lightgrey",
              }}>{each.stock}</Typography>

              <Typography sx={{
              fontWeight: 650,
                
                color: "black",
              }}>{each.price}</Typography>

              
                <Typography sx={{
                
                color: "lightgrey",
              }}>{each.totalStates}</Typography>
              
            </Box>
          </Box>
        </Box>
        </Box>

        )}
      </Box>
    );
  }
}
export default Details;
