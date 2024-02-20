
import "./footer.css"
import footerImg from "../../assets/images/footer_logo.png"

const Footer = () => {
    return (
        <div>
             <footer>
        <div className="container">
            <div className="footer_wrapper">
                <div className="logo">
                    <picture>
                        <a href="#"><img src={footerImg} alt=""/></a>
                    </picture>
                </div>
                <div className="footerSocial_icon">
                   <a href="#"><i className="fa-brands fa-instagram"></i></a>
                   <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                   <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                   <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </footer>  
        </div>
    );
};

export default Footer;