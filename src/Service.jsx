import React from 'react'

export default function Service() {
  return (
    <div>
        <section className="services" id="services">
            <h1 className="heading">
                our <span>services</span>
            </h1>
            <div className="box-container">
            <div className="box">
              <i className="fas fa-map-marker-alt" />
              <h3>venue selection</h3>
              <p>
              Find the perfect venue tailored to your event's needs and preferences.
              </p>
          </div>
          <div className="box">
              <i className="fas fa-envelope" />
              <h3>invitation card</h3>
              <p>
              Create customized and stylish invitation cards for your event.
              </p>
          </div>
            <div className="box">
              <i className="fas fa-music" />
              <h3>entertainment</h3>
              <p>
              Arrange the best entertainment options to engage your guests.
              </p>
            </div>
            <div className="box">
              <i className="fas fa-utensils" />
              <h3>food and drinks</h3>
              <p>
              Plan catering with a wide range of food and drink choices.
              </p>
            </div>
            <div className="box">
              <i className="fas fa-photo-video" />
              <h3>photos and videos</h3>
              <p>
              Capture your event with professional photography and videography.
              </p>
            </div>
            <div className="box">
              <i className="fas fa-birthday-cake" />
              <h3>custom food</h3>
              <p>
              Offer personalized catering options to match specific dietary needs.
              </p>
            </div>
          </div>
        </section>
    </div>
  )
}
