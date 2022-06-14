import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import logo from "../img/logo.png"

const Footer = () => {
  return (
    <>
      {/* //Remove the container if you want to extend the Footer to full width.  */}
      <div className="container px-0 cont_footer mt-2">
        {/* Footer  */}
        <footer
          className="text-center text-lg-start text-white YellowGradient footer_boder"
          // style={{backgroundColor: "#929fba"}}
        >
          {/* Grid container  */}
          <div className="container p-4 pb-0">
            {/* Section: Links  */}
            <section className="">
              {/*Grid row */}
              <div className="row">
                {/* Grid column  */}
                <div className="col-md-3 col-lg-4 col-xl-3  mt-3">
                  <div className="text-center">
                  <Link
                    className="text-center pb-4"
                    to="/"
                  >
                    <img src={logo} alt="img" className="img-fluid" width={"150px"} height={"100px"}/>
                  </Link>
                  </div>
                  <p className="text-white mt-4">
                  LOCATION<br/>
                Quicentro Shopping is located in the executive and financial center of the city of Quito, surrounded by first-class hotels and other points of tourist interest.
                <br/>
                Address:
                <br/>
                United Nations Avenue between December 6th Avenue and De Los Shyris Avenue.
                  </p>
                </div>
                {/* Grid column  */}

                <hr className="w-100 clearfix d-md-none" />

                {/* Grid column  */}
                <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3">
                  <h6
                    className=" mb-4 title_footer"
                  >
                    Quick Links
                  </h6>
                  <p>
                    <a className="btn-footer">About Us</a>
                  </p>
                  <p>
                    <a className="btn-footer">Work with us</a>
                  </p>
                  <p>
                    <a className="btn-footer">Contact</a>
                  </p>
                  <p>
                    <a className="btn-footer">Suggestions</a>
                  </p>
                </div>
                {/* Grid column  */}

                <hr className="w-100 clearfix d-md-none" />

                {/* Grid column  */}
                <hr className="w-100 clearfix d-md-none" />

                {/* Grid column  */}
                <div className="col-md-4 col-lg-2 col-xl-3 mx-auto mt-3">
                  <h6
                    className=" mb-4 tittle_footer"
                  >
                    Company
                  </h6>
                  <p>
                    <a
                      className="btn-footer"
                      href="https://play.google.com/store/apps/details?id=com.uwo.entertainments&hl=en_IN&gl=US"
                    >
                      UWO Video
                    </a>
                  </p>
                  <p>
                    <a href="https://uwokart.com/" className="btn-footer">
                      UWO Kart
                    </a>
                  </p>
                  <p>
                    <a className="btn-footer">Privacy Policy</a>
                  </p>
                </div>
                {/* Grid column  */}

                {/* Grid column  */}
                <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mt-3">
                  <h6
                    className=" mb-4 tittle_footer"
                  >
                    Contact
                  </h6>
                  <p>
                    <a
                      href="mailto:collaboration@theuwo.com"
                      className="btn-footer"
                    >
                      Email: collaboration@theuwo.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+59322464526" className="btn-footer">
                    Phone: +59322464526
                    </a>
                  </p>
                  <p className="btn-footer text-white"
                  >
                    Follow Us on:
                  </p>

                  {/* Facebook  */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #3b5998" , borderRadius:"2vw", border:"none"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  {/* Twitter  */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #55acee" , borderRadius:"2vw", border:"none"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  {/* Google  */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #dd4b39" , borderRadius:"2vw", border:"none"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  {/* Instagram  */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #ac2bac" , borderRadius:"2vw", border:"none"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  {/* Linkedin  */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #0082ca", borderRadius:"2vw", border:"none"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              {/*Grid row */}
            </section>
            {/* Section: Links  */}
          </div>
          {/* Grid container  */}
        </footer>
        {/* Footer  */}
      </div>
      {/* End of .container  */}
    </>
  );
};

export default Footer;
