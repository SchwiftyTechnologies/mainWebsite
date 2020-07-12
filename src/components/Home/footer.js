import React,{useRef} from 'react';

const Footer = () => {
    return ( 
        <div id="footer-container">
            <div id="footer-details" className="row">
                <div id="foot-card-1" className="footer-card col-12 col-xl-5">
                    <h1 className="text-center">Shwifty Tech</h1>
                    <p className="text-center text-md-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, in dolor perspiciatis fuga debitis iste blanditiis cumque quas doloribus voluptatem excepturi unde commodi nisi ab. Eaque et neque tenetur ratione?</p>
                </div>
                <div className="footer-hr"/>
                <div id="foot-card-2" className="footer-card col-12 col-xl-4">
                    <h1 className="text-center">Contact Us</h1>
                    <p className="text-center text-md-left">Lorem, ipsum dolor sit  ab. Eaque et neque tenetur ratione?</p>
                </div>
                <div className="footer-hr"/>
                <div id="foot-card-3" className="footer-card col-12 col-xl-3">
                    <h1 className="text-center">Contact Us</h1>
                    <p className="text-center text-md-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptatem excepturi unde commodi nisi ab. Eaque et neque tenetur ratione?</p>
                </div>
            </div>
            <div id="copyright-stamp"><i className="fa fa-copyright mr-1" aria-hidden="true"></i>Shwifty Technologies 2020</div>
            <div id="footer-decoration-1"></div>
            <div id="footer-decoration-2"></div>
        </div>
     );
}
 
export default Footer;