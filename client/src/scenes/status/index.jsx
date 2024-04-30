import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useValue } from "../../context/ContextProvider";
import Protected from "../protected/Protected";

const Stat = () => {
  const theme = useTheme();
  const {
    state: { currentUser }
  } = useValue();
 // console.log(currentUser);
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box m="20px">
      <Header title="YOUR STATUS" subtitle="you can see your status and events here" />

   {(currentUser&&currentUser.role!=='admin')? ( <Box display="flex" justifyContent="space-between">
       
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Status</Typography>
          <List>
            
             {(currentUser.interview!=='YYYY/MM/DD')?( <ListItem
               
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary= 'Your Interview Date is on'
                  secondary={
                    <Typography>
                      {currentUser.interview}
                    </Typography>
                  }
                />
              </ListItem>):( 
                <ListItem
               
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary= 'Your Interview Date is not assign yet'
                  secondary={
                    <Typography>
                      Contact your admin
                    </Typography>
                  }
                />
              </ListItem>
              )}
           
          </List>
        </Box>

        
        
      </Box>):(<Protected/>)}
    </Box>
  );
};

export default Stat;