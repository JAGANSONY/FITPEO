import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Cards from "./cards/Cards";
import PieChat from "./piechat/Piechat";
import Recharts from "./barchat/Barchat";
import Details from "./details/Details";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { HeadersItems } from "./Data";
import { withStyles } from "@mui/styles";
import Avatar from '@mui/material/Avatar';
import { styles } from "./HeaderStyle";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const drawerWidth = 240;
interface Iprops{
  classes?:any
}

 function Header(props:Iprops) {
  const {classes} =props
  return (
    <Box className={classes.main} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "whitesmoke",
          boxShadow: "none",
        }}
      >
        <Box>
            
        
            <Box  className={classes.container} >
            <Typography
              variant="h6"
              noWrap
              component="div"
              className={classes.text}
            >
              Hello shahrukh
            </Typography>
            <Box sx={{paddingRight:'2.3%'}}>
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
                  boxShadow: "1px 1px 3px  lightgrey",
                  "& fieldset": { border: 'none' },
                }}
                id="outlined-basic"
                variant="outlined"
              />

            </Box>
            </Box>
        </Box>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#210B61",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box  className={classes.dashborad}>    
        <AdminPanelSettingsIcon  className={classes.icons}/>

           <Typography  className={classes.dashboradtext}>Dashboard</Typography>

           </Box>

     
        <Divider />
        <List sx={{marginTop:'30px'}}>
          {HeadersItems.map((text,index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton className={classes.listContainer}>
                <Box sx={{display:"flex",gap:2}}>
                <Box className={classes.icons}>{text.icon}</Box>

               <Typography className={classes.nametext}>{text.name}</Typography>
               </Box>
               <Box className={classes.icons}>{text.img}</Box>


              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{display:'flex',padding:'4%',alignItems:'center',justifyContent:"space-between",marginTop:'auto'}}>
          <Box sx={{display:'flex',alignItems:'center',gap:2}}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        <Box>
        <Typography className={classes.dashboradtext}>Evano</Typography>
        <Typography sx={{color:'lightgray'}}>Project manager</Typography>

        </Box>
        </Box>
        <KeyboardArrowDownIcon className={classes.icons}/>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1,backgroundColor:'whitesmoke', p: 6,width:'100%',minHeight:'100vh' }}
      >
        <Toolbar/>
         <Cards/>
         <Box sx={{marginTop:'60px',display:'flex',gap:7,justifyContent:'center',flexWrap:'wrap'}}>
         <Recharts/>
         <PieChat/>
         </Box>
         <Box sx={{paddingLeft:'1%',marginTop:'30px',width:'100%',}}>
         <Details/>
         </Box>
      </Box>
    </Box>
  );
}
export default withStyles(styles)(Header)