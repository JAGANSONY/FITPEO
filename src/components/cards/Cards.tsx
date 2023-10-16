import { Box, SxProps, Typography } from "@mui/material";
import { data } from "../Data";
import { withStyles } from "@mui/styles";
import { styles } from "./CardStyle";
interface Iprops {
  classes?: any;
}
const Cards = (props: Iprops) => {
  const { classes } = props;
  return (
    <Box>
      <Box className={classes.mapContainer}>
        {data.map((item: any) => (
          <Box className={classes.mapitems}>
            <Box
              sx={{
                color: item.color,
                backgroundColor: item.bgColor,
                padding: {xl:"30px",md:"30px",sm:"18px",xs:'15px'},
                borderRadius: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.icon}
            </Box>
            <Box>
              

              <Typography className={classes.itemText} >{item.name}</Typography>
              <Typography className={classes.itemDollars}>{item.dollars}</Typography>
              <Box className={classes.montcontainer}>
                <Box sx={{display:'flex',alignItems:'center'}}>
                <Box sx={item.rating === '2%'? inactive:active}>{item.arrow}</Box>
                <Typography sx={item.rating === '2%'? inactive1:active1}>{item.rating}</Typography>
                </Box>
              <Typography className={classes.monthText}>{item.month}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const active={
     color:'green',
    fontSize:'10px',
    

}

const inactive={
    color:'red',
    fontSize:'10px !important'

}

const active1={
    color:'green',
    fontSize:{xl:'20px',lg:'10px',md:'20px',sm:'20px'}
}

const inactive1={
    color:'red',
    fontSize:{xl:'20px',lg:'10px',md:'20px',sm:'20px'}
    
}

export default withStyles(styles)(Cards);
