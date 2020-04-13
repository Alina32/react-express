import React, { Component } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

export default class Footer extends Component {
   render() {
    
    return (
      <footer>
      	<div className="footer-navigation">
      		
      			<div className="about-us">
      			        <ul>
      			          <li><a href ="#"><i className="fa fa-info" aria-hidden="true"></i> о нас</a></li>
      			          <li><a href ="#"><i className="fa fa-question" aria-hidden="true"></i> faq</a></li>
      			        </ul>
      			 </div>
      			 <div className="service">
      			        <ul>
      			             <li><a href ="#"><i className="fa fa-map-marker" aria-hidden="true"></i> города</a></li>
      			          <Link href="hotels">
                        <li><i className="fa fa-home" aria-hidden="true"></i> отели</li>
                      </Link>
      			        </ul>
      			 </div>
      			 <div className="social">
      			      <ul>
      			        <li><a href ="#"><i className="fa fa-facebook-square" aria-hidden="true"></i> facebook</a></li>
      			        <li><a href ="#"><i className="fa fa-instagram" aria-hidden="true"></i> instagram</a></li>
      			      </ul>
      			 </div>
      			 <div className="contact">
                   <ul>
      			      <li><a href = "#"><i className="fa fa-envelope-open" aria-hidden="true"></i> support@allhotels.ua</a></li>
      			      <li><a href = "#"><i class="fa fa-phone-square" aria-hidden="true"></i> +380 682 132 680</a></li>
      			   </ul>
                </div>
      	</div>
      	<div className="copyright">
      		<span><i className="fa fa-copyright" aria-hidden="true"></i> ALL HOTELS UA — 2020 Y.<br/>by pchelnikova alina</span>
      	</div>
      </footer>
    );
  }
}