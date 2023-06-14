import Breadcrumb from "@/components/BreadCrumb";
import Banner from "@/components/services/banner";
import Form from "@/components/services/selling/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function Sell_unit({ unit }) {
  let path = [{ text: "Home", link: "/" }, { text: "Add Unit" }];
  const [submitted, setSubmitted] = useState(false);
  function handleChange() {
    setSubmitted(false);
  }
  return (
    <div className="page container">
      <Banner
        title="Enlist your unit"
        description="You can now display your unit for sale or rent and view it on our
              website"
        breadcrumb={<Breadcrumb path={path} />}
      />
      {!submitted ? (
        <>
          <div className="d-flex justify-content-center flex-column align-items-center">
            <h1>Unit added successfully</h1>
            <div className="mb-3 w-50 px-1">
              <button className="py-2 w-100" onClick={handleChange}>
                Submit new data
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Form submission={setSubmitted} />
        </>
      )}
    </div>
  );
}
