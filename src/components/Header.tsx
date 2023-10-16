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
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Cards from "./cards/Cards";
import PieChat from "./piechat/Piechat";
import Recharts from "./barchat/Barchat";
import Details from "./details/Details";

const drawerWidth = 240;

export default function Header() {
  return (
    <Box sx={{ display: "flex" }}>
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
            
            <Box sx={{display:'flex',justifyContent:'space-between',padding:'25px',alignItems:'center'}}>
            <Typography
              variant="h6"
              sx={{ color: "black",paddingLeft:'3%' }}
              noWrap
              component="div"
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
        <Toolbar />
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
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
