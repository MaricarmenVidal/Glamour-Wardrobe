
import InstagramIcon from "./instagram-icon.JPEG"
import FacebookIcon from "./facebook-icon.PNG"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <div className="ft-sy">
            <p>
              Glamour Wardrobe
            </p>
          </div>
          <div className="ft-slogan">
            <p>
              Moda que va contigo
            </p>
          </div>
          <div className="Seguir">
            Síguenos en nuestras redes sociales
          </div>
          <div className="social-media">
              <div className="instagram">
              <img src={InstagramIcon} alt="logo" />
              </div>
              <div className="facebook">
              <img src={FacebookIcon} alt="logo" />
              </div>
          </div>
        </div>

      </section>
    </footer>
  );
};

export default Footer;