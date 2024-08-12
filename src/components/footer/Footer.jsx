import React from "react";

import Logo from "../../assets/images/logo.png";
import Instagram from "../../assets/icons/instagram-svg.svg";
import Facebook from "../../assets/icons/facebook-svg.svg";
import Telegram from "../../assets/icons/telegram-svgrepo-com.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="h-screen min-h-96 flex flex-col sm:flex-row items-center justify-center bg-black text-white">
      <div className="w-full h-full sm:w-1/2 flex flex-col items-center justify-center">
        <img
          className="w-28 xl:w-40 h-auto"
          loading="lazy"
          src={Logo}
          alt="logo"
        />
        <h1 className="text-xs xl:text-sm font-bold">Skin Care & Beauty</h1>
        <p className="p-3 2xl:p-10 text-center text-xs xl:text-sm">
          8240 Preston Rd Suite 200 Room 138 Plano 75024, TX 75024, United
          States
        </p>
        <div className="text-white text-xs xl:text-sm">
          <span>Phone: </span>
          <a
            rel="stylesheet"
            href="tel:+1 469-724-4444"
            className=" hover:underline-offset-4 hover:underline"
          >
            +1 469-724-4444
          </a>
        </div>
        <p className="text-xs xl:text-sm">glistenwellness@gmail.com</p>
        <div className="flex flex-row mt-6 2xl:mt-10 justify-between">
          <div className="flex justify-center items-center bg-white w-7 h-7 xl:w-10 xl:h-10">
            <a
              href="https://www.instagram.com/glw.beautty"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={Instagram}
                alt="instagram"
                className="w-7 h-7 xl:w-10 xl:h-10"
                loading="lazy"
              />
            </a>
          </div>
          <div className="flex justify-center items-center bg-white w-7 h-7 xl:w-10 xl:h-10">
            <a
              href="https://t.me/glwbeauty"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={Telegram}
                alt="telegram"
                loading="lazy"
                className="w-7 h-7 xl:h-10 xl:w-10"
              />
            </a>
          </div>
          <div className="flex justify-center items-center bg-white w-7 h-7 xl:w-10 xl:h-10">
            <a
              href="https://www.facebook.com/glw.beautty"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={Facebook}
                alt="facebook"
                loading="lazy"
                className="w-7 h-7 xl:h-10 xl:w-10"
              />
            </a>
          </div>
        </div>
        <div className="p-3 text-xs xl:text-sm text-center">
          © Copyright 2012 - {year} | Glisten Wellness | All Rights Reserved
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6685.446406844138!2d-96.80474900000002!3d33.090066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3cdb4ca82cd1%3A0x14431c50aaeba374!2sThe%20Huntington%20Apartments!5e0!3m2!1sen!2suk!4v1714156489557!5m2!1sen!2suk"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin "
        className="h-full w-full sm:w-1/2 bg-gray-100"
        title="glw_beauty_location"
        allowFullScreen
        loading="lazy"
      ></iframe>

    </footer>
  );
};

export default Footer;
