
import './service.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
function Service() {
  return (
    <div className="service_page App">
      <div className='cover-container site-cover'>
        <div className='header-section'>
          <Header />
        </div>
        <section class="main-section">
          <div class="container">
            <div class="row">

              <div class="col-12">

                <div class="d-block w-100 content overflow-hidden">
                </div>
                <div class="d-block w-100 content overflow-hidden">

                  <div class="d-flex justify-content-center">
                    <div >
                      <div class="services-pages starter-template">
                        <h2 class="text-white">Basic Service for FAQ Plan</h2>
                        <p class="lead">Our FAQ Assistant offers an efficient way to create and manage your frequently asked questions using cutting-edge AI technology. Here's how it works:</p>
                        <p>
                          1) Document Upload: Simply upload your existing FAQ document in PDF format to our secure platform.
                        </p>
                        <p>
                          2) AI Processing: Our advanced Generative AI, powered by models like GPT-4 or Claude 3.5, processes your document. It identifies key information and automatically generates a comprehensive set of questions and answers.
                        </p>
                        <p>
                          3) Review and Editing: You'll have full control to review, edit, and refine the AI-generated Q&amp;As through our user-friendly interface. This ensures the content accurately represents your brand voice and specific information.
                        </p>
                        <p>
                          4) Deployment: Once approved, your AI-powered FAQ system is ready to be integrated into your website or customer service platform.
                        </p>
                        <p>
                          5) Continuous Learning: The system can be updated easily by uploading new documents or directly editing the Q&amp;As, allowing your FAQ to evolve with your business.
                        </p>
                      </div>
                      <div class="services-pages starter-template" >
                        <h2 class="text-white">Customized Plan</h2>
                        <p >
                          1) Custom Development: Personalized AI solutions for your unique business needs
                        </p>
                        <p>
                          2) Implementation: Expert guidance for smooth integration and deployment
                        </p>
                        <p>
                          3) Training: Comprehensive programs to maximize your team's use of Sheena AI
                        </p>
                        <p>
                          4) Ongoing Support: 24/7 technical assistance and regular updates
                        </p>
                        <p>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
