import { SxProps, Theme } from "@mui/material";

 export const styles =(theme:Theme)=>( {
    montcontainer:{
      display:'flex',
      alignItems:'center'
    },
    itemDollars:{
      fontSize:'30px !important',
      fontWeight:'bold',
      fontFamily:'sans-serif !important',
      [theme.breakpoints.only("md")]: {
        fontSize:'20px !important',
        fontWeight:800,

 
       },
       [theme.breakpoints.only("md")]: {
        fontSize:'15px !important',
        fontWeight:400,

 
       },
    },
    itemText:{
       fontSize:'14px',
       color:'lightgray',
       

    },
    monthText:{
      [theme.breakpoints.only("md")]: {
        fontSize:'18px !important',
 
       },
       [theme.breakpoints.only("sm")]: {
        fontSize:'20px !important',
 
       },
    },
  mapContainer: {
    display: "flex",
    flexWrap:'wrap',
    justifyContent:'space-around',
    [theme.breakpoints.only("lg")]: {
      gap:16
        
      },
    [theme.breakpoints.only("md")]: {
      gap:15
        
      },
    [theme.breakpoints.only("sm")]: {
    gap:10
      
    },
    [theme.breakpoints.only("xs")]: {
      gap:10
        
      },
  },
  mapitems: {
    display: "flex",

    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "white",
    borderRadius:'10px',
    padding: "20px",
    gap: 20,
    width:'23%',
    [theme.breakpoints.only("lg")]: {
      width:'40% !important'
    },
    [theme.breakpoints.only("md")]: {
      width:'48% !important'
    },
    [theme.breakpoints.only("sm")]: {
      width:'49% !important'
    },
    [theme.breakpoints.only("xs")]: {
      width:'100% !important'
    },

  },
}) satisfies Record<string, SxProps>;