import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StraightIcon from '@mui/icons-material/Straight';
import SouthIcon from '@mui/icons-material/South';
import logo from './assets/OIP.jpeg'
import logo1 from './assets/Nature-Logotype.jpg';
import logo2 from './assets/16808996851_45792a0e7d_b.jpg'
import logo3 from './assets/R.jpeg'
import logo4 from './assets/fKAgmJ2GPMmJSr9kC7EkTV-1200-80.jpg'
import logo5 from './assets/gallerysmall_221933.jpg'
import logo6 from './assets/logo.jpg'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import ContactsIcon from '@mui/icons-material/Contacts';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MoneyIcon from '@mui/icons-material/Money';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export const data = [
  {
    name: "Earning",
    dollars: "$198k",
    month: "this month",
    icon: <CurrencyExchangeIcon />,
    color: "green",
    bgColor:'lightgreen',
    rating:'37.8%',
    arrow:<StraightIcon/>
  },
  {
    name: "Orders",
    dollars: "$2.4k",
    month: "this month",
    icon: <InsertChartIcon  />,
    color: "purple",
    bgColor:'#ddb3ef',
    rating:'2%',
    arrow:<SouthIcon/>

  },
  {
    name: "balance",
    dollars: "$2.4k",
    month: "this month",
    icon: <AccountBalanceWalletIcon />,
    color: "blue",
    bgColor:'lightblue',
    rating:'2%',
    arrow:<SouthIcon/>

  },
  {
    name: "Total Sales",
    dollars: "$89k",
    month: "this week",
    icon: <ShoppingBagIcon />,
    color: "red",
    bgColor:'lightpink',
    rating:'37.8%',
    arrow:<StraightIcon/>

  },
];



export const details = [
  {
    name: "Earning",
    title: " Lorem ipsum is a  ",
    img:logo,
    stock: "32 in stock",
    price:'$45.99',
    totalStates:'20',
  },
  {
    name: "Earning",
    title: " Lorem ipsum is a  ",
    img:logo1,
    stock: "32 in stock",
    price:'$45.99',
    totalStates:'20',
  },
  {
    name: "Earning",
    title: " Lorem ipsum is a  ",
    img:logo2,
    stock: "32 in stock",
    price:'$45.99',
    totalStates:'20',
  },
  {
    name: "Earning",
    title: " Lorem ipsum is a  ",
    img:logo3,
    stock: "32 in stock",
    price:'$45.99',
    totalStates:'20',
  },
  {
    name: "Earning",
    title: " Lorem ipsum is a  ",
    img:logo4,
    stock: "32 in stock",
    price:'$45.99',
    totalStates:'20',
  },
  {
    name: "Earning",
    title: " Lorem ipsum is a  ",
    img:logo5,
    stock: "32 in stock",
    price:'$45.99',
    totalStates:'20',
  },
  {
    name: "Earning",
    title: " Lorem ipsum is a  ",
    img:logo6,
    stock: "32 in stock",
    price:'$45.99',
    totalStates:'20',
  },
  

];

export const HeadersItems = [
  {
    icon:<AutoModeIcon/> ,
    name: "Dashoard",
    img:<ChevronRightIcon/>,
    
  },
  {
    icon:<LocalAtmIcon/>  ,
    name: "Product",
    img:<ChevronRightIcon/>,
    
  }, {
    icon:  <ContactsIcon/>   ,
    name: "customers",
    img:<ChevronRightIcon/>,
    
  }, {
    icon: <MoneyIcon/> ,
    name: "income",
    img:<ChevronRightIcon/>,
    
  }, {
    icon: <WorkspacePremiumIcon/>  ,
    name: "promote",
    img:<ChevronRightIcon/>,
    
  }, {
    icon:<HelpCenterIcon/>   ,
    name: "Help",
    img:<ChevronRightIcon/>,
    
  },
  

];