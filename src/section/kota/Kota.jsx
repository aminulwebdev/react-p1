import "./kota.css"

import kotaOne from "../../assets/images/kotaImg_one.png"
import kotaTwo from "../../assets/images/kotaImg_two.png"
import kotaThree from "../../assets/images/kotaImg_three.png"

const Kota = () => {
    return (
        <div>
               <section id="kota">
            <div className="container">
                <div className="kota_heading">
                    <div>
                        <h3 className="sub_heading">Pilihan Auditor</h3>
                        <h2 className="heading">Residen Berbagai Kota</h2>
                    </div>
                    <div className="heading_arrow">
                        <i className="fa-solid fa-angle-left"></i>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
                <div className="kota_wrapper">
                    <div className="kota_item">
                        <div className="kota_img">
                            <picture>
                                <img src={kotaOne} alt=""/>
                            </picture>
                        </div>
                        <div className="kota_content">
                            <h3>Magnolia Surabaya</h3>
                            <p className="paragraph">Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung,
                                Kota Tangerang,
                                Banten 15136</p>
                        </div>
                    </div>
                    <div className="kota_item">
                        <div className="kota_img">
                            <picture>
                                <img src={kotaTwo} alt=""/>
                            </picture>
                        </div>
                        <div className="kota_content">
                            <h3>Magnolia Surabaya</h3>
                            <p className="paragraph">Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung,
                                Kota Tangerang,
                                Banten 15136</p>
                        </div>
                    </div>
                    <div className="kota_item">
                        <div className="kota_img">
                            <picture>
                                <img src={kotaThree} alt=""/>
                            </picture>
                        </div>
                        <div className="kota_content">
                            <h3>Magnolia Surabaya</h3>
                            <p className="paragraph">Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung,
                                Kota Tangerang,
                                Banten 15136</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Kota;