
import './company.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
function Company() {
  return (

    <div className="company">
      <div className='cover-container site-cover'>
        <div className='header-section'>
          <Header />
        </div>
        <div className='main-section'>
          <section class="section home-banner1">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="d-block w-100 content overflow-hidden">
                    <div class="d-flex justify-content-center">
                      <div class="home-banner">
                        <section class="py-5 text-center home-title-text">
                          <div class="container">
                            <h1>Empowering Conversation
                              <br /> Automating Intelligence
                            </h1>
                            <p class="lead" >Transform customer interaction, automate complex task and gain unparalleled insight with our generative AI technology</p>
                          </div>
                          <div class="request-demo1">
                            <button _ngcontent-c2="" class="btn btn-lg btn-primary btn-block" translate="" type="submit">
                              <a href="https://sheena-ai.com/public/form/679781630c994c3dc5cfa441/demo">Request a Demo</a>
                            </button>
                          </div>
                        </section>
                      </div>
                    </div>

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

export default Company;
