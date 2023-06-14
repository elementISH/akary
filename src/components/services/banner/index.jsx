export default function Banner({ title, description, breadcrumb }) {
  return (
    <>
      <div className="section">
        {breadcrumb}
        <div className="selling-header d-md-flex align-items-center gap-3">
          <div className="selling-header__text">
            <h1 className="fw-bold mb-4 line-height-4">{title}</h1>
            <p>{description}</p>
          </div>
          <div className="selling-header__img d-none d-lg-block">
            <img src="/images/asset-2.jpeg" className="w-100" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
