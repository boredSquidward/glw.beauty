import React from "react";
import Logo from "../../assets/images/logo.png";
import Instagram from "../../assets/icons/logo-instagram.svg";
import Facebook from "../../assets/icons/logo-facebook.svg";
import styles from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="min-h-96 p-10 flex flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col justify-around w-screen sm:flex-row items-center">
        <div className={`${styles.location} p-10 w-full h-96 sm:p-0 sm:w-2/5`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6685.446406844138!2d-96.80474900000002!3d33.090066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3cdb4ca82cd1%3A0x14431c50aaeba374!2sThe%20Huntington%20Apartments!5e0!3m2!1sen!2suk!4v1714156489557!5m2!1sen!2suk"
            title="glw_beauty_location"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin"
            className="h-full w-full bg-gray-100"
          ></iframe>
        </div>
        <div className="w-full py-6 sm:w-2/5 flex flex-col items-center justify-center">
          <img
            src={Logo}
            alt="logo"
            className=" w-32 2xl:w-72 h-auto"
            loading="lazy"
          />
          <h4 className="text-xs 2xl:text-2xl font-bold">Skin Care & Beauty</h4>
          <p className="p-3 2xl:p-10 text-center text-sm 2xl:text-3xl">
            8240 Preston Rd Suite 200 Room 138 Plano 75024, TX 75024, United
            States
          </p>
          <div className="text-white text-sm 2xl:text-3xl">
            <span>Phone: </span>
            <a rel="stylesheet" href="tel:+1 469-724-4444">
              +1 469-724-4444
            </a>
          </div>
          <p className="text-sm 2xl:text-3xl">glistenwellness@gmail.com</p>
          <div className="flex flex-row mt-6 2xl:mt-10 w-20 2xl:w-56 justify-between">
            <div className="flex justify-center items-center bg-white rounded-full w-7 h-7 2xl:w-20 2xl:h-20">
              <a
                href="https://www.instagram.com/glw.beautty"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={Instagram}
                  alt="instagram"
                  className="w-6 h-6 2xl:h-16 2xl:w-16"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="bg-white rounded-full w-7 h-7 2xl:w-20 2xl:h-20">
              <a
                href="https://www.facebook.com/glw.beautty"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={Facebook}
                  alt="facebook"
                  loading="lazy"
                  className={`w-100 h-100`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 2xl:pt-16 text-xs 2xl:text-2xl text-center">
        © Copyright 2012 - {year} | Glisten Wellness | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
