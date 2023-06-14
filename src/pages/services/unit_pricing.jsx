import Banner from "@/components/services/banner";
import Breadcrumb from "@/components/BreadCrumb";
import Form from "@/components/services/pricing/form";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function UnitPricing({}) {
  const path = [{ text: "Home", link: "/" }, { text: "Pricing" }];

  const formik = useFormik({
    initialValues: {
      Type_Apartment: 1,
      Bedrooms: 3,
      Bathrooms: 2,
      Area: 220,
      Furnished_No: 2,
      Level: 2,
      Payment_Option_Cash: 1,
      Delivery_Term_Finished: 1,
      City_maadi: 1,
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid email";
      }

      if (!values.age) {
        errors.age = "Age is required";
      }

      if (!values.gender) {
        errors.gender = "Gender is required";
      }

      // if (values.images.length === 0) {
      //   errors.images = "Images are required";
      // }

      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });
  const [result, setResult] = useState(0);

  return (
    <div className="page container">
      <Banner
        title="Unit Pricing"
        description="You can now add the details of your residential unit, and we will
              calculate its price according to the area and the prices
              recognized in its surrounding"
        breadcrumb={<Breadcrumb path={path} />}
      />
      <Form fc={setResult} />
      <div className="price">
        <span className="fw-bolder">Price:</span>{" "}
        <span>{result.toLocaleString()}</span> E
        <FontAwesomeIcon icon="pound-sign" />
      </div>
    </div>
  );
}
