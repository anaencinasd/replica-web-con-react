import "./footer.css";
import PropTypes from 'prop-types'

export default function FooterColumn(props) {
  return (
    <div className="footerColumns">
      <h4>{props.title}</h4>
      <ul>{props.children}</ul>
    </div>
  );
}

FooterColumn.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
}
