import React from "react";
import { useContext } from "react";
import Header from "../../components/Header";
import { ColorModeContext, tokens } from "../../theme";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useValue } from '../../context/ContextProvider';




const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const {
    state: { currentUser },
  } = useValue();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
 
  return (
    <Box m="1.5rem 2.5rem">
        <Header title="ABOUT US" subtitle="Some details about ethio-talent " />

        <Box 

        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h1"  sx={{ color: colors.greenAccent[300]  }}>
          Description
          </Typography>
         
          <Typography
            mt={3}
            p="0 0.6rem"
            fontSize="1rem"
            textAlign={"center"}
            sx={{ color: colors.greenAccent[100] }}
          > demonstrate their technical abilities.
            The CTF will be a Jeopardy Style CTF where every team will have a list of challenges in different categories like Reverse Engineering, Web Security and others. 
          </Typography>
        </Box>


        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h1" sx={{ color:colors.greenAccent[300] }}>
          Conditions
          </Typography>
          <Typography
          mt={3}
            p="0 0.6rem"
            fontSize="1rem"
            textAlign={"center"}
            sx={{ color: colors.greenAccent[100] }}
          >
            The minimum number of team members is 2 and the maximum number is 4 with the below conditions:- Any Ethiopian can join without any adherence to the age or the major.- At least 50% of the team should be Ethiopian Nationality.
          </Typography>
        </Box>
     
        
       

        {/* ROW 2 */}
            
       
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h1" sx={{ color: colors.greenAccent[300] }}>
          Rules
          </Typography>
          <Typography
            mt={3}
            p="0 0.6rem"
            fontSize="1rem"
            textAlign={"center"}
            sx={{ color: colors.greenAccent[100] }}
          >Rules concerning the platform are included.
- Sharing the flags between different teams is prohibited.
- Brute Force attacks on the challenges submission portal or challenges links are not allowed.

          </Typography>
        
        </Box>            
       
         
      </Box>
    </Box>
  );
};

export default About;