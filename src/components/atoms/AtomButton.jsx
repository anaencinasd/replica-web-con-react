import {Button} from "@mui/material";
import PropTypes from 'prop-types'
import "./button.css"


function AtomButton ({button_content, variant, className, startIcon}){
    const buttonClass = `button ${className}`;
    return (
        <Button
        variant={variant}
        className={buttonClass}
        startIcon={startIcon}
        >
            {button_content}


        </Button>
    );
}

AtomButton.propTypes = {
    button_content: PropTypes.string.isRequired,
    variant: PropTypes.string,
    className: PropTypes.string,
    startIcon: PropTypes.node,

}

export default AtomButton