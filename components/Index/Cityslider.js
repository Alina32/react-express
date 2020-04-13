import React, { Component } from 'react';
import Slider from 'react-slick';
import { Container } from "semantic-ui-react";
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

export default class Cityslider extends Component {
  render() {
    var settings = {
     dots: true,
     infinite: false,
     speed: 300,
     slidesToShow: 4,
     slidesToScroll: 1,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 800,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 530,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]
   };
    return (
   <Container style={{ width: '1200px' }}>  
   <h2><span>города украины</span></h2> 
    <div className="main">  
      <div className="city">
        <Slider {...settings}>
          <div class="bl fl1">
                    <div class="image"><img src="https://cdn1.savepice.ru/uploads/2020/4/11/a6215bea41793563e71c5c2d55ef8b65-full.jpg" alt=""/></div>
                    <div class="text">
                      <h3>Киев</h3>
                      <p>Прогулки по городу, Архитектура, Парки</p>
                      <Link href="cart"><span>230 отелей</span></Link>
                    </div>
                  </div>
                  <div class="bl fl3">
                    <div class="image"><img src="https://cdn1.savepice.ru/uploads/2020/4/11/1bf93c21c8fcc8f99de30de8f689380c-full.jpg" alt=""/></div>
                    <div class="text">
                      <h3>Львов</h3>
                      <p>Старый город, Архитектура, Прогулки по городу</p>
                      <span>146 отелей</span>
                    </div>
                  </div>
                  <div class="bl fl2">
                    <div class="image"><img src="https://cdn1.savepice.ru/uploads/2020/4/11/bb0e803baa4b10d1e2ad440c969301ba-full.jpg" alt=""/></div>
                    <div class="text">
                      <h3>Одесса</h3>
                      <p>Прогулки по городу, Морское побержье</p>
                      <span>214 отелей</span>
                    </div>
                  </div>
                  <div class="bl fl5">
                    <div class="image"><img src="https://cdn1.savepice.ru/uploads/2020/4/11/de45dc8da71d19f0dcde95ba69da9336-full.jpg" alt=""/></div>
                    <div class="text">
                      <h3>Черновцы</h3>
                      <p>Старый город, Архитектура, Прогулки по городу</p>
                      <span>28 отелей</span>
                    </div>
                  </div>
                  <div class="bl fl4">
                    <div class="image"><img src="https://cdn1.savepice.ru/uploads/2020/4/11/3e14966b9d24873a410ac27933245fee-full.jpg" alt=""/></div>
                    <div class="text">
                      <h3>Буковель</h3>
                      <p>Горнолыжный курорт, Свежий воздух, Природа</p>
                      <span>223 отелей</span>
                    </div>
                  </div>
                  <div class="bl fl6">
                    <div class="image"><img src="https://cdn1.savepice.ru/uploads/2020/4/11/98cbba5f653e871d1a3ccb9f627a0db0-full.jpg" alt=""/></div>
                    <div class="text">
                      <h3>Запорожье</h3>
                      <p>Прогулки у реки, Прогулки по городу </p>
                      <span>30 отелей</span>
                    </div>
                  </div>
                  <div class="bl fl7">
                    <div class="image"><img src="https://cdn1.savepice.ru/uploads/2020/4/11/f1d3230b4d891adc55ac2650733864a6-full.jpg" alt=""/></div>
                    <div class="text">
                      <h3>Днепр</h3>
                      <p>Прогулки у реки, Парки, Архитектура</p>
                      <span>54 отелей</span>
                    </div>
                  </div>
                  <div class="bl fl8">
                    <div class="image"><img src="https://cdn1.savepice.ru/uploads/2020/4/11/924ae0ac71e90471e3684d9435e35380-full.jpg" alt=""/></div>
                    <div class="text">
                      <h3>Ивано-Франковск</h3>
                      <p>Прогулки по городу, Архитектура, Парки</p>
                      <span>20 отелей</span>
                    </div>
                  </div>
        </Slider>
      </div>
     </div> 
    </Container> 
    );
  }
}