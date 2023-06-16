import "./footer.css";
import FooterColumn from "./FooterColumn";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <FooterColumn title="Contact Info">
          <li>22 Innovation Street, CA, US</li>
          <li>office@syncmobile.com</li>
          <li>+44 376 945 23</li>
        </FooterColumn>
        <FooterColumn title="Value Links">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Article Details</li>
        </FooterColumn>
        <FooterColumn title="Other Apps">
          <li>Scientific Calculator</li>
          <li>Advanced Timer</li>
          <li>Music Store</li>
        </FooterColumn>
        <div className="rrssIcons">
        <FacebookRoundedIcon style={{fill:"#999"}}/>
        <TwitterIcon style={{fill:"#999"}}/>
        <PinterestIcon style={{fill:"#999"}}/>
        <InstagramIcon style={{fill:"#999"}}/>
        </div>
      </div>
    </div>
  );
}
