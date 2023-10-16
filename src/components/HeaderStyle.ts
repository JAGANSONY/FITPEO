import { SxProps, Theme } from "@mui/material";


export const styles=(theme:Theme)=>({
    main:{ display: "flex" },
    container:{display:'flex',justifyContent:'space-between',padding:'25px',alignItems:'center'},
    text:{ color: "black",paddingLeft:'3%', },
    dashborad:{
        display:'flex',alignItems:'center',marginTop:'30px',gap:1,paddingLeft:'10%'
    },
  icons: {color:'white'},
  dashboradtext:{color:'white',fontSize:'30px !important'},
  listContainer:{display:'flex',justifyContent:'space-between !important',alignItems:'center',paddingLeft:'10%', "&:hover": {
    backgroundColor:'grey !important',
    borderRadius:'10px !important'
  },},
  nametext:{color:'white',fontSize:'15px'},

})satisfies Record<string,SxProps>