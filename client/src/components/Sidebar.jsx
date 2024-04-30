import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Avatar, Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { GroupOutlined, Logout } from "@mui/icons-material";
import { useValue } from "../context/ContextProvider";
import FlexBetween from "./FlexBetween";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");
  const {
    state: { currentUser }, dispatch
  } = useValue();
  const navigate = useNavigate();
  const handlelogout=()=> {
    dispatch({ type: 'UPDATE_USER', payload: null })
    navigate('/');
  }
  return (
    <Box  height="125vh"
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]}  !important`,        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Ethio Talent
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Register
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                Today 
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          {(currentUser&&currentUser.role!=='admin')?(  <Item
              title="Your Status"
              to="/Status"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />):(null)}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              About 
            </Typography>
            
            <Item
              title="Contact"
              to="/contact"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="About "
              to="/about"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          {(currentUser&&currentUser.role==='admin')?(<> <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
            Manage 
            </Typography>
            <Item
              title="Manage Usres"
              to="/users"
              icon={<GroupOutlined />}
              selected={selected}
              setSelected={setSelected}
            /> </> ):(null)}
          {currentUser?(<FlexBetween textTransform="none" gap="0.2rem" m="1.5rem 3rem 0 2rem">
            <Avatar src={currentUser?.photoURL} alt={currentUser?.name}>
                 {currentUser?.name?.charAt(0).toUpperCase()}
             </Avatar>
              <Box textAlign="center">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {currentUser.name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {currentUser.role}
                </Typography>
                             
              </Box>
              <Button
                sx={{ color: colors.greenAccent[400] }}
                startIcon={<Logout fontSize="small" />}
                onClick={handlelogout}
              ></Button></FlexBetween>
           ):(null)}

           
           
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;