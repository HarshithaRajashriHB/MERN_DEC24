import React from "react";

const AboutUs=()=>{
    return (
        <div className="container my-5 d-flex align-items-center justify-content-center" style={{ minHeight: "90vh" }}>
          <div className="row align-items-center">
            {/* Left Side - Image Section */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Restaurant Overview"
                className="img-fluid rounded shadow-lg"
              />
            </div>
      
            {/* Right Side - Text Content */}
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-4 text-center">About Us</h1>
              <p className="lead">
                Welcome to our restaurant, a place where we blend tradition with modern culinary arts. Since our humble beginnings, we have strived to create a dining experience that is both memorable and delightful.
              </p>
              <p>
                Our chefs are experts in creating dishes that not only taste great but also tell a story. Using the freshest local ingredients, we bring a unique twist to classic recipes, offering a menu that caters to all taste preferences.
              </p>
              <p>
                Our restaurant’s ambiance is designed to be a haven for food lovers, providing a cozy and welcoming environment for every occasion. Whether you're here for a quick bite or a family celebration, we ensure that every meal is a memorable experience.
              </p>
              <h5 className="mt-4">What Makes Us Special?</h5>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">Locally sourced, high-quality ingredients</li>
                <li className="list-group-item">Signature dishes crafted by top chefs</li>
                <li className="list-group-item">Relaxed, family-friendly atmosphere</li>
                <li className="list-group-item">Catering and event services for special occasions</li>
              </ul>
      
              {/* Social Media Links */}
              <div className="d-flex justify-content-center mt-4">
                <a href="#" className="me-3">
                  <i className="bi bi-twitter fs-3"></i>
                </a>
                <a href="#" className="me-3">
                  <i className="bi bi-facebook fs-3"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram fs-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default AboutUs