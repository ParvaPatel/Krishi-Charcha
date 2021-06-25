import ContactForm from "./ContactForm"
import PhoneIcon from "./images/icon-phone.png"
import EnvelopeIcon from "./images/icon-envelope.png"
import LocationIcon from "./images/icon-location.png"

const ContactUs = () => {
    return (  

        <>

        <div className="contactUs">
            <br /><br />
            {/* <h1>This is Contact Us Page</h1> */}
            {/* <iframe style = { {src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14882.971855465632!2d72.7835216005249!3d21.162625022849046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x423b99085d26d1f9!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1621429137779!5m2!1sen!2sin" }
            ,{width="600"}, {height="450"}, {style="border:0;"}, {allowfullscreen=""}, {loading="lazy"}}></iframe> */}
                <div><iframe className="mapSpace" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14882.971855465632!2d72.7835216005249!3d21.162625022849046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x423b99085d26d1f9!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1621429137779!5m2!1sen!2sin">
                </iframe> </div>
                
                <div className="contactForm">
                    <ContactForm/>
                </div>
        </div>
        <div className="contactText">
            <div className="contactBox">
                <img src={PhoneIcon} alt="phone icon" />
                <div>
                    <h4>Give us a Call</h4>
                    Call us on <span><a href="tel:(+91) 7984272266">(+91) 7984272266</a></span>
                    <br /> Monday to Friday : 10 AM to 6PM
                </div>
                
            </div>
            <div className="contactBox">
                <img src={EnvelopeIcon} alt="envelope icon" />
                <div>
                    <h4>Send us an email</h4>
                    <span><a href="mailto:consumerinquiry@krishimitra.com">consumerinquiry@krishimitra.com</a></span>
                </div>
            </div>
            <div className="contactBox">
                <img src={LocationIcon} alt="location icon" />
                <h4>Come see us</h4>
                <p><a href="https://www.google.com/maps/place/Sardar+Vallabhbhai+National+Institute+of+Technology/@21.1643059,72.7818908,17z/data=!3m1!4b1!4m5!3m4!1s0x3be04dec8b56fdf3:0x423b99085d26d1f9!8m2!3d21.1643059!4d72.7840795?hl=en"><address>SVNIT, Ichchhanath Surat- Dumas Road, Keval Chowk, Surat, Gujarat 395007</address></a></p>
            </div>
            
        </div>

        </>

    );
}
 
export default ContactUs;