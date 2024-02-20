import "./contact.css"

import contactOne from "../../assets/images/awards_one.png"
import contactwo from "../../assets/images/awards_two.png"

const Contact = () => {
    return (
        <div>
              <section id="contact">
            <div className="container">
                <div className="contact_wrapper">
                    <div className="contact_content">
                        <div className="contactContent_heading">
                            <h2 className="heading">Hubungi Kami</h2>
                        </div>
                        <div className="contentItem_wrapper">
                            <div className="content_item">
                                <div className="item_details">
                                    <i className="fa-solid fa-phone"></i>
                                    <div className="number">
                                        <p className="paragraph">call</p>
                                        <a href="tel:01813933245" className="paragraph">01813933245</a>
                                    </div>
                                </div>
                                <a href="#" className="common_btn">call now</a>
                            </div>
                            <div className="content_item">
                                <div className="item_details">
                                    <i className="fa-solid fa-envelope"></i>
                                    <div className="number">
                                        <p className="paragraph">email</p>
                                        <a href="tel:01813933245" className="paragraph">aminulwebdev@gmail.com</a>
                                    </div>
                                </div>
                                <a href="#" className="common_btn">email now</a>
                            </div>

                        </div>

                    </div>
                    <div className="awards">
                        <h2 className="heading">Penghargaan</h2>
                        <div className="awards_item">
                            <img src={contactOne} alt=""/>
                            <img src={contactwo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Contact;