
import { Box, ThemeProvider,createTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Cards from './components/cards/Cards';

const theme=createTheme({
    typography:{
      fontFamily:'roboto'
    }
})

function App() {
  return (
    <ThemeProvider theme={theme}> 
       <Header/>
      
      </ThemeProvider>

    );
}

export default App;
