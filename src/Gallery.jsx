import React from 'react'
import s1 from './assets/slide-1.webp'
import s2 from './assets/slide-2.webp'
import s3 from './assets/slide-3.jpg'
import s4 from './assets/slide-4.jpg'
import s5 from './assets/slide-5.webp'
import s6 from './assets/slide-6.webp'




export default function Gallery() {
  return (
    <div>
        <section className="gallery" id="gallery">
            <h1 className="heading"> Our <span>Gallery</span> </h1>
            <div className="box-container">
              <div className="box">
                <img src={s1} alt="" width="80%" />
                <h3 className="title">photos and events</h3>
                <div className="icons">
                  <a href="#" className="fas fa-heart" />
                  <a href="#" className="fas fa-share" />
                  <a href="#" className="fas fa-eye" />
                </div>
              </div>
              <div className="box">
                <img src={s2} alt="" width="69%" />
                <h3 className="title">photos and events</h3>
                <div className="icons">
                  <a href="#" className="fas fa-heart" />
                  <a href="#" className="fas fa-share" />
                  <a href="#" className="fas fa-eye" />
                </div>
              </div>
              <div className="box">
                <img src={s3}alt="" width="80%" />
                <h3 className="title">photos and events</h3>
                <div className="icons">
                  <a href="#" className="fas fa-heart" />
                  <a href="#" className="fas fa-share" />
                  <a href="#" className="fas fa-eye" />
                </div>
              </div>
              <div className="box">
                <img src={s4} alt="" width="80%" />
                <h3 className="title">photos and events</h3>
                <div className="icons">
                  <a href="#" className="fas fa-heart" />
                  <a href="#" className="fas fa-share" />
                  <a href="#" className="fas fa-eye" />
                </div>
              </div>
              <div className="box">
                <img src={s5} alt="" width="80%" />
                <h3 className="title">photos and events</h3>
                <div className="icons">
                  <a href="#" className="fas fa-heart" />
                  <a href="#" className="fas fa-share" />
                  <a href="#" className="fas fa-eye" />
                </div>
              </div>
              <div className="box">
                <img src={s6} alt="" width="80%" />
                <h3 className="title">photos and events</h3>
                <div className="icons">
                  <a href="#" className="fas fa-heart" />
                  <a href="#" className="fas fa-share" />
                  <a href="#" className="fas fa-eye" />
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}
