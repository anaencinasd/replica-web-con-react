import PropTypes from 'prop-types'
import "./icons.css"


export default function Icons(props){
  return (
    <div className="circle">
        <span className={props.style}>{props.icon}
        </span>
    </div>
  )
}

Icons.propTypes = {
    style: PropTypes.string,
    icon: PropTypes.string,
}

 