
import './partnership.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
function Partnership() {
  return (

    <div className="partnership App">
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
                              <div class="content text-center" >
                                <a target="undefined">
                                  <img class="img-fluid sheena-i w-75 image-full" onerror="this.src='http://via.placeholder.com/150x150'" src="https://dev.assistant-cap.com/uploads/demosheenai_5c27650d8454c03804c4af2e_1592031343312_5c27650d8454c03804c4af2e_1604388121256.png" alt="undefined" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-12 content">
                            <div class="d-block w-100 content overflow-hidden">
                              <div class="d-flex justify-content-center">
                                <div class="d-block w-100 f20" >
                                  <h3 class="mb-3" >Partnership</h3>
                                  <p >Our platform of conversational AI chatbot and voice bot is customizable and using with other AI technology. We can build AI platforms to meet clients need using NLP/NLU but also our technology of face recognition/detection, computer vision and OCR. This can be applied to many scenario applications, such as AI HR Recruitment Assistant, AI Customer Service Assistant, AI Sales Assistant and others. This solution can have multiple channel such as Whatsapp, FB Messenger, Telegram, Google Documents, Microsoft and integration with client server.</p>
                                </div>
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

export default Partnership;
