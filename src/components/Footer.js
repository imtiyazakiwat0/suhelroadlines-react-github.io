import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="bg-secondary py-3">
        <div class="container">
          <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <a class="btn btn-social-icon btn-facebook mx-3" href="https://www.facebook.com/suhel.akiwat">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-social-icon btn-twitter mx-3" href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-social-icon btn-instagram mx-3" href="https://www.instagram.com/suhail.akiwat/">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="btn btn-social-icon btn-linkedin mx-3" href="https://wa.me/+919449718874">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
            <div class="d-flex align-items-center">
              <div class="custom-control custom-switch mx-3"></div>
              <form class="form-inline my-2 my-lg-0 mx-3">
                <input class="form-control" type="email" placeholder="Email" />
                <button class="btn btn-primary" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
