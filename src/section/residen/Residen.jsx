import "./residen.css"

import imgOne from "../../assets/images/residenImg_one.png"
import imgTwo from "../../assets/images/residenImg_two.png"

const Residen = () => {
    return (
        <div>
             <section id="residen">
            <div className="container">
                <div className="residen_heading">
                    <h3 className="sub_heading">Pilihan konsumen</h3>
                    <h2 className="heading">Residen Favorit</h2>
                </div>

                <div className="residen_wrapper">
                    <div className="residen_img">
                        <div className="residenImg_item">
                            <picture>
                                <img src={imgOne} alt=""/>
                            </picture>
                        </div>
                        <div className="residenImg_item">
                            <picture>
                                <img src={imgTwo} alt=""/>
                            </picture>
                        </div>
                    </div>

                    <div className="residen_content">
                        <h2 className="heading">Bangunan yang dirancang oleh Aristektur Handal</h2>
                        <p className="paragraph">Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan
                            hasil kerjasama secara
                            profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>
                        <div className="residen_btn">
                            <a href="#" className="common_btn"><i className="fa-solid fa-phone"></i>Hubungi Kami</a>
                            <a href="#" className="common_btn">Explore lebih banyak</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Residen;