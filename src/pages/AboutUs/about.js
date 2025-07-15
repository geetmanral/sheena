
import './about.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
function About() {
  return (
    <div className="about-Us App test">
      <div className='cover-container site-cover'>
        <div className='header-section'>
          <Header />
        </div>
        <div className='main-section'>
          <section class="section mt-50" >
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="d-block w-100 content overflow-hidden">
                    <section class="section" >
                      <div class="container">
                        <div class="row">
                          <div class="col-lg-6 col-12">
                            <div class="d-block w-100 content overflow-hidden">
                              <div class="d-flex justify-content-center">
                                <div>
                                  <div class="about-us-subtext">
                                    <p class="">Sheena Al is an advanced Conversational AI Chatbot developed by PT Teknologi Tujuh Asia, Indonesia. At its core, Sheena utilizes a sophisticated natural language processing (NLP) engine powered by cutting-edge generative AI technology.</p>
                                    <p>Sheena Al's versatility allows seamless integration with various software applications and cloud servers, enabling comprehensive automation across multiple business processes.</p>
                                    <p>The AI's capabilities extend to data analytics for customer profiling, scheduling meetings, facilitating payments through payment gateway integrations, and even generating financial reports by connecting to accounting software via APIs.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-12">
                            <div class="d-block w-100 content overflow-hidden">
                              <div class="content text-center" >
                                <a target="undefined">
                                  <img class="img-fluid sheena-i w-75 image-full" onerror="this.src='http://via.placeholder.com/150x150'" src="https://dev.assistant-cap.com/uploads/sheena6_5fbb90702429b562521e3cdd_1731317063332.png" alt="undefined" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
