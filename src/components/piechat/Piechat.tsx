import { Box, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 100 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#FA6CFC", "lightgrey", "blue",];

export default function PieChat() {


  return (

    <Box sx={{backgroundColor:'white',width:{xl:'31%',lg:'31%',sm:'100%',md:'100%',xs:'100%'}}}><Typography
    sx={{
      fontFamily:"sans-serif",
      fontSize: "30px",
      color: "black",
      fontWeight: 650,
      paddingLeft:'6%',
      pt:'5%'
    }}
  >
    Customers
  </Typography>
  <Typography sx={{  fontFamily:"sans-serif",
      fontSize: "15px",
      color: "lightgrey",
      paddingLeft:'6%'
      }}> Customers that buy products</Typography>
  <ResponsiveContainer width="100%" height="80%">

    <Box sx={{display:'flex',justifyContent:'center',}}>

 
    <PieChart  width={300} height={300}>
      
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={90}
        fill="#8884d8"
        paddingAngle={1}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
        ))}
        
         <Label
            value="65%" 
            
            position="center"
            fill="#000"
            fontSize={26}
          />
      </Pie>
     
      
    </PieChart>
    </Box>
    </ResponsiveContainer>

    </Box>
  );
}
