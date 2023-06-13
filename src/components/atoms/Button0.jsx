import {Button} from "@mui/material";
import PropTypes from 'prop-types'
import "./button0.css";

function Button0 ({button_content}) {
    return(
        <>
       <Button variant="outlined" className="button0">
            {button_content}
       </Button>
        </>
    )
}

Button0.propTypes = {
    button_content: PropTypes.string.isRequired,
  };
  



export default Button0