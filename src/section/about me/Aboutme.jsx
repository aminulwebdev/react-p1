import "./aboutme.css"

const Aboutme = () => {
    return (
        <div>
            <section id="about">
<div className="container">
    <div className="about_heading">
        <h2 className="heading">Tahapan Pembelian Properti yang Mudah dan Cepat</h2>
    </div>
    <div className="about_wrapper">
        <div className="about_item">
            <div className="aboutItem_heading">
                <h4 className="sub_heading">Pilih Properti</h4>
                <span className="sub_heading">01</span>
            </div>
            <p className="paragraph">Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga.
                Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini</p>
            <a href="#" className="sub_heading">Baca lebih Lanjut<i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="about_item">
            <div className="aboutItem_heading">
                <h4 className="sub_heading">Pilih Properti</h4>
                <span className="sub_heading">01</span>
            </div>
            <p className="paragraph">Pembayaran dalam bentuk sejumlah uang sebagai komitmen memesan unit
                properti tertentu.</p>
            <a href="#" className="sub_heading">Baca lebih Lanjut<i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="about_item">
            <div className="aboutItem_heading">
                <h4 className="sub_heading">Pilih Properti</h4>
                <span className="sub_heading">01</span>
            </div>
            <p className="paragraph">Pembiayaan KPR untuk pembeli rumah dengan skema pembiayaan jika diperlukan
                dan dilanjutkan proses sertifkasi HGB.</p>
            <a href="#" className="sub_heading">Baca lebih Lanjut<i className="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
</div>
</section>
        </div>
    );
};

export default Aboutme;