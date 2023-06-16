import PropTypes from 'prop-types';
import "./icons.css";

export default function Icons(props){
  return (
    <div className="circles">
      <div>
        <span className={props.style}>
          <i className={props.icon}></i>
        </span>
      </div>
    </div>
  );
}

Icons.propTypes = {
  style: PropTypes.string,
  icon: PropTypes.string,
}
