import {Button} from "@mui/material";
import PropTypes from 'prop-types'
import AppleIcon from '@mui/icons-material/Apple'
import "./button1.css"



function Button1 ({button_content}){
  
  return (
    <>
      <Button variant="contained" className= "button1" startIcon={<AppleIcon/>}
      style={{
        backgroundColor:"#FF556E",
        borderColor: "#FF556E",
        borderRadius: "35px",
        fontWeight: "700",
        paddingLeft: "3rem",
        paddingRight: "3rem"
      }}
      >
        {button_content}
        
      </Button>
    
    </>
  )
}




Button1.propTypes = {
  button_content: PropTypes.string.isRequired,
};






export default Button1