<template>
  <div>
    <div>

      <!-- ======= Header ======= -->
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">

          <div class="logo mr-auto">
            <h1 class="text-light"><a href="index.html"><span>Socio.al</span></a></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html"><img src="img/logo.png" alt="" class="img-fluid"></a>-->
          </div>

          <nav class="nav-menu d-none d-lg-block">
            <ul>
              <li class="get-started"><a href="#about">Get Started</a></li>
            </ul>
          </nav><!-- .nav-menu -->

        </div>
      </header><!-- End Header -->

      <!-- ======= Hero Section ======= -->
      <section id="hero" class="d-flex align-items-center">

        <div class="container">
          <div class="row">
            <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Easy Social Media Automation!</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">Schedule posts to Facebook, LinkedIn, Twitter, Instagram (reminders) and VKontakte! With our post scheduler you can manage social networks, schedule posts and engage your audiences.</h2>
              <div data-aos="fade-up" data-aos-delay="800">
                <a href="#about" class="btn-get-started scrollto">Get Started</a>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
              <img src="img/hero-img.png" class="img-fluid animated" alt="">
            </div>
          </div>
        </div>

      </section><!-- End Hero -->

      <div id="main">

        <!-- ======= Clients Section ======= -->
        <section id="clients" class="clients clients">
          <div class="container">

            <div class="row">

              <div class="col-lg-2 col-md-4 col-6">
                <img src="img/clients/client-1.png" class="img-fluid" alt="" data-aos="zoom-in">
              </div>

              <div class="col-lg-2 col-md-4 col-6">
                <img src="img/clients/client-2.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100">
              </div>

              <div class="col-lg-2 col-md-4 col-6">
                <img src="img/clients/client-3.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200">
              </div>

              <div class="col-lg-2 col-md-4 col-6">
                <img src="img/clients/client-4.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300">
              </div>

              <div class="col-lg-2 col-md-4 col-6">
                <img src="img/clients/client-5.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400">
              </div>

              <div class="col-lg-2 col-md-4 col-6">
                <img src="img/clients/client-6.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500">
              </div>

            </div>

          </div>
        </section><!-- End Clients Section -->

        <!-- ======= Contact Section ======= -->
        <section id="contact" class="contact">
          <div class="container">

            <div class="section-title" data-aos="fade-up">
              <h2>Contact Us</h2>
            </div>

            <div class="row">

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="contact-about">
                  <h3>Socio.al</h3>
                  <p>Tell your brand’s story and grow your audience with a publishing, analytics, and engagement platform you can trust.</p>
                  <div class="social-links">
                    <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
                    <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
                    <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                <div class="info">
                  <div>
                    <i class="ri-map-pin-line"></i>
                    <p>Mumbai, INDIA</p>
                  </div>

                  <div>
                    <i class="ri-mail-send-line"></i>
                    <p>akhilesh@ayzom.com</p>
                  </div>

                  <div>
                    <i class="ri-phone-line"></i>
                    <p>+91-70216-00076</p>
                  </div>

                </div>
              </div>

              <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div class="validate"></div>
                  </div>
                  <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section><!-- End Contact Section -->

      </div><!-- End #main -->

      <!-- ======= Footer ======= -->
      <footer id="footer">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6 text-lg-left text-center">
              <div class="copyright">
                &copy; Copyright <strong>Socio.al</strong>. All Rights Reserved
              </div>
              <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/Socio.al-free-bootstrap-template/ 
                Designed by <a href="https://bootstrapmade.com/">Socio.al</a>-->
              </div>
            </div>
            <div class="col-lg-6">
              <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href="#intro" class="scrollto">Home</a>
              </nav>
            </div>
          </div>
        </div>
      </footer><!-- End Footer -->
      
    </div>    
  </div>
</template>

<script>

export default {
  data: () => ({
  }),
  mounted() {

      this.loadScript("vendor/jquery/jquery.min.js");
      this.loadScript("vendor/bootstrap/js/bootstrap.bundle.min.js");
      this.loadScript("vendor/jquery.easing/jquery.easing.min.js");
      this.loadScript("vendor/php-email-form/validate.js");
      this.loadScript("vendor/waypoints/jquery.waypoints.min.js");
      this.loadScript("vendor/counterup/counterup.min.js");
      this.loadScript("vendor/owl.carousel/owl.carousel.min.js");
      this.loadScript("vendor/isotope-layout/isotope.pkgd.min.js");
      this.loadScript("vendor/venobox/venobox.min.js");
      this.loadScript("vendor/aos/aos.js");
      this.loadScript("js/main.js");

  },
  methods: {
    loadScript(srclink){
        let recaptchaScript = document.createElement('script');
        recaptchaScript.setAttribute('src', srclink);
        document.head.appendChild(recaptchaScript);
    }

  }
}

</script>

<style scoped>

  @import '../assets/vendor/bootstrap/css/bootstrap.min.css';
  @import '../assets/vendor/icofont/icofont.min.css';
  @import '../assets/vendor/remixicon/remixicon.css';
  @import '../assets/vendor/boxicons/css/boxicons.min.css';
  @import '../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
  @import '../assets/vendor/venobox/venobox.css';
  @import '../assets/vendor/aos/aos.css';
  @import '../assets/css/style.css';

</style>