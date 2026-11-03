import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#12346A" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            p: 2,
          }}
        >
            
            <Box className="footer" sx={{display:"flex"}}>
      
        
          <ul>
            <li>
              <a  href="#about us" onClick={() => navigate("/about-Page")}>about us</a>
               
            </li>
          </ul>
          <ul>
            <li>
              <a  href="tel:+962775228877">
                for booking:0775228877
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a  href="#to inquire:0785162660">
                to inquire:0785162660
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a  href="#email: Work_List@gmail.com">
                email:Work_List@gmail.com
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a  href="#complaints">
                complaints
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a  href="#location">
                location
              </a>
            </li>
          </ul>
        
      </Box>
          
        </Toolbar>
      </AppBar>
    </>
  );
}
