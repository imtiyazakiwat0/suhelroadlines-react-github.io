import React from "react";
export default function AboutUs() {
  // function showAlert() {
  //   document.getElementById("alert-container").style.display = "block";
  // }  
  return (
    <section id="ContactUs">
      <div class="container">
        <h2 class="text-center mb-5">Contact Us</h2>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" class="form-control" id="subject" placeholder="Enter the subject" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" onclick="showAlert()">Submit</button>
        </form>
        {/* <div id="alert-container" style="display: none;">
          <div class="alert alert-success" role="alert">
            Your details have been successfully submitted.
          </div>
        </div> */}
      </div>

    </section>

  )
}