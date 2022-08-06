// import * as React from "react";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import MenuIcon from "@mui/icons-material/Menu";
// import Badge from "@mui/material/Badge";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

// function AppBar({ open, toggleDrawer }) {
//   const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== "open",
//   })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//       marginLeft: drawerWidth,
//       width: `calc(100% - ${drawerWidth}px)`,
//       transition: theme.transitions.create(["width", "margin"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     }),
//   }));

//   return (
//     <div>
//       <AppBar position="absolute" open={open}>
//         <Toolbar
//           sx={{
//             backgroundColor: "#1b97b6",
//             pr: "24px", // keep right padding when drawer closed
//           }}
//         >
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={toggleDrawer}
//             sx={{
//               marginRight: "36px",
//               ...(open && { display: "none" }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             component="h1"
//             variant="h6"
//             color="inherit"
//             noWrap
//             sx={{ flexGrow: 1 }}
//           >
//             Dashboard
//           </Typography>
//           <IconButton color="inherit">
//             {/* <Badge badgeContent={4} color="secondary">
//             //   <NotificationsIcon /> */}
//             {/* // </Badge> */}
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// export default AppBar;
