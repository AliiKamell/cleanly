// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { SiCcleaner } from "react-icons/si";
// import { Link } from 'react-router-dom';


// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//       <SiCcleaner />
//       </Typography>
//       <Divider />
//       <Link>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </Link>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             <SiCcleaner />
//             LEANLY
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             <Link>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: '#fff' }}>
//                 {item}
//               </Button>
//             ))}
//             </Link>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
      
//     </Box>
//   );
// }

// Navbar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Navbar;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SiCcleaner } from "react-icons/si";
import './navbar.css'
import { Link } from 'react-router-dom';


function AppNavbarr() {
  return (
    <Navbar collapseOnSelect expand="lg" id="bg-body-tertiary" sticky='top'>
      <Container>
        <Link to='/' className='nav-link'><SiCcleaner className='brand-icon'/>LEANLY</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/services' className='nav-link'>Services</Link>
            <Link to='/about' className='nav-link'>About Us</Link>
           
          </Nav>
          <Nav>
            <Link to='/contact-us' className='nav-link'>Contact US</Link>
            <NavDropdown title="Locations" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cairo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Giza
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sokhna</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Soon In Sahel
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbarr;