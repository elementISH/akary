export default function Services() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="section__header mb-4">Services</h2>
          <div className="services__list row">
            <div className="services__item col-6 col-lg-3 mb-3">
              <div className="services__item-content">
                <img
                  className="services__img w-100"
                  src="images/home-1622401_640.png"
                  alt="home"
                />
                <div className="services__item-overlay"></div>
                <div className="services__item-text fs-3 w-100">
                  unit pricing
                </div>
              </div>
            </div>
            <div className="services__item col-6 col-lg-3 mb-3">
              <div className="services__item-content">
                <img
                  className="services__img w-100"
                  src="images/kitchen-2400367_640.png"
                  alt="kitchen"
                />
                <div className="services__item-overlay"></div>
                <div className="services__item-text fs-3 w-100">finishing</div>
              </div>
            </div>
            <div className="services__item col-6 col-lg-3 mb-3">
              <div className="services__item-content">
                <img
                  className="services__img w-100"
                  src="images/bathroom-1336164_640.png"
                  alt="bathroom"
                />
                <div className="services__item-overlay"></div>
                <div className="services__item-text fs-3 w-100">sell units</div>
              </div>
            </div>
            <div className="services__item col-6 col-lg-3 mb-3">
              <div className="services__item-content">
                <img
                  className="services__img w-100"
                  src="images/bathroom-1336164_640.png"
                  alt="bathroom"
                />
                <div className="services__item-overlay"></div>
                <div className="services__item-text fs-3 w-100">
                  view all units
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
