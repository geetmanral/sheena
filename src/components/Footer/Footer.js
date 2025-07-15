import React, { useState } from 'react';
import './Footer.scss';

const Footer = (props) => {


  return (
    <section class="footer-section">
    <div class="container">
       <div class="row">
          <div class="text-center col-12 col-md-6 col-lg-6">
             <div class="d-block w-100 content">
                <div class="d-flex justify-content-center animate__animated animate__delay-1s animate__fadeIn ">
                   <div class="text-white text-left">
                      <h3 class="footer-title">Company</h3>
                      <ul>
                         <li><a href="/cms/aboutus">About Us</a></li>
                         <li><a href="#">Privacy Policy</a></li>
                         <li><a href="/cms/frequently-asked-question"> FAQ's</a></li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>
          <div class="text-center col-12 col-md-6 col-lg-6">
             <div class="d-block w-100 content">
                <div class="d-flex justify-content-center animate__animated animate__delay-1s animate__fadeIn ">
                   <div class="text-white text-left">
                      <h3 class="footer-title">Contact Us</h3>
                      <p class="contact-us-footer d-flex flex-column">
                         <span>Menara Mandiri </span> <span>11th Floor
                         Jl Jenderal Sudirman Kav 54-55</span>
                         <span>
                         sheena@T7a.co.id</span>
                         <span>Phone/WA : 62-8180817-5767</span>
                      </p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};

export default Footer;
