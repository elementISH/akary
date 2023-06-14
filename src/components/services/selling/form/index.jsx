import { useFormik } from "formik";
import { useState } from "react";
import NewRooms from "../../newRooms";

export default function HandleForm(props) {
  let setSubmitted = props.submission;
  const [rooms, setRooms] = useState([
    {
      id: Math.random(),
      init: "room",
      type: "",
      width: 0,
      height: 0,
      length: 0,
    },
  ]);

  const formik = useFormik({
    initialValues: {
      finishing: "",
      area: "",
      title: "",
      description: { short: "", long: "" },
      location: { text: "", link: "" },
      rooms: [],
    },
    validate: (values) => {
      const errors = {};

      if (!values.finishing && touched.finishing) {
        errors.finishing = "Condition is required";
      }

      if (!values.area && touched.area) {
        errors.area = "Space is required";
      } else if (isNaN(Number(values.area))) {
        errors.area = "Space must be a number";
      }

      if (!values.title && touched.title) {
        errors.title = "Title is required";
      }

      if (!values.description.short && touched.description?.short) {
        errors.description = {
          ...errors.description,
          short: "Short description is required",
        };
      } else if (
        values.description.short.length > 150 &&
        touched.description?.short
      ) {
        errors.description = {
          ...errors.description,
          short: "Short description must be at most 150 characters",
        };
      }

      if (!values.description.long && touched.description?.long) {
        errors.description = {
          ...errors.description,
          long: "Long description is required",
        };
      } else if (
        values.description.long.length < 200 &&
        touched.description?.long
      ) {
        errors.description = {
          ...errors.description,
          long: "Long description must be at least 200 characters",
        };
      } else if (
        values.description.long.length > 500 &&
        touched.description?.long
      ) {
        errors.description = {
          ...errors.description,
          long: "Long description must be at most 500 characters",
        };
      }

      if (!values.location.text && touched.location?.text) {
        errors.location = {
          ...errors.location,
          text: "Location is required",
        };
      }

      if (
        values.location.link &&
        !/https?:\/\/(www\.)?google\.com\/maps\/?/.test(values.location.link)
      ) {
        errors.location = {
          ...errors.location,
          link: "Location link must be a valid Google Maps link",
        };
      }

      return errors;
    },
    onSubmit: async (values) => {
      const payload = {
        ...values,
        rooms,
      };
      const res = await fetch("/api/unit/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log(data);
      setSubmitted(true);
    },
  });

  const { touched } = formik;

  return (
    <form
      className="selling-form d-flex justify-content-center flex-wrap"
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-3 w-50 px-1">
        <label htmlFor="unit-conditio-input" className="form-label main-color">
          Unit Condition
        </label>
        <select
          id="unit-conditio-input"
          className={`form-select ${
            touched.finishing && formik.errors.finishing ? "is-invalid" : ""
          }`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.finishing}
          name="finishing"
        >
          <option>Semi Finished</option>
          <option>Not Finished</option>
          <option>Core & Shell</option>
        </select>
        {touched.finishing && formik.errors.finishing ? (
          <div className="invalid-feedback">{formik.errors.finishing}</div>
        ) : null}
      </div>
      <div className="mb-3 w-50 px-1">
        <label htmlFor="space-input" className="form-label main-color">
          Area
        </label>
        <input
          type="text"
          className={`form-control ${
            (touched.area && formik.errors.area) ||
            isNaN(Number(formik.values.area))
              ? "is-invalid"
              : ""
          }`}
          id="space-input"
          placeholder="Area"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.area}
          name="area"
        />
        {touched.area && formik.errors.area ? (
          <div className="invalid-feedback">{formik.errors.area}</div>
        ) : null}
        {isNaN(Number(formik.values.area)) ? (
          <div className="invalid-feedback">Area must be a number</div>
        ) : null}
      </div>
      <div className="mb-3 w-100 px-1">
        <label htmlFor="title-input" className="form-label main-color">
          Title
        </label>
        <input
          type="text"
          className={`form-control ${
            touched.title && formik.errors.title ? "is-invalid" : ""
          }`}
          id="title-input"
          placeholder="Title"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.title}
          name="title"
        />
        {touched.title && formik.errors.title ? (
          <div className="invalid-feedback">{formik.errors.title}</div>
        ) : null}
      </div>
      <div className="mb-3 w-100 px-1">
        <label htmlFor="short-desc-input" className="form-label main-color">
          Short Description
        </label>
        <textarea
          className={`form-control ${
            (touched.description?.short && formik.errors.description?.short) ||
            formik.values.description?.short?.length > 150
              ? "is-invalid"
              : ""
          }`}
          id="short-desc-input"
          rows="2"
          placeholder="Short description"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.description?.short}
          name="description.short"
        />
        {touched.description?.short && formik.errors.description?.short ? (
          <div className="invalid-feedback">
            {formik.errors.description.short}
          </div>
        ) : null}
        {formik.values.description?.short?.length > 150 ? (
          <div className="invalid-feedback">
            Short description must be at most 150 characters
          </div>
        ) : null}
        <div className="text-end">
          <span>{formik.values.description?.short?.length || 0}</span>/150
        </div>
      </div>
      <div className="mb-3 w-100 px-1">
        <label htmlFor="long-desc-input" className="form-label main-color">
          Long Description
        </label>
        <textarea
          className={`form-control ${
            (touched.description?.long && formik.errors.description?.long) ||
            formik.values.description?.long?.length < 200 ||
            formik.values.description?.long?.length > 500
              ? "is-invalid"
              : ""
          }`}
          id="long-desc-input"
          rows="4"
          placeholder="Long description"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.description?.long}
          name="description.long"
        />
        {touched.description?.long && formik.errors.description?.long ? (
          <div className="invalid-feedback">
            {formik.errors.description.long}
          </div>
        ) : null}
        {formik.values.description?.long?.length < 200 ? (
          <div className="invalid-feedback">
            Long description must be at least 200 characters
          </div>
        ) : null}
        {formik.values.description?.long?.length > 500 ? (
          <div className="invalid-feedback">
            Long description must be at most 500 characters
          </div>
        ) : null}
        <div className="text-end">
          <span>{formik.values.description?.long?.length || 0}</span>/500
        </div>
      </div>
      <div className="mb-3 w-50 px-1">
        <label htmlFor="location-text-input" className="form-label main-color">
          Location Text
        </label>
        <input
          type="text"
          className={`form-control ${
            touched.location?.text && formik.errors.location?.text
              ? "is-invalid"
              : ""
          }`}
          id="location-text-input"
          placeholder="Location Text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.location?.text}
          name="location.text"
        />
        {touched.location?.text && formik.errors.location?.text ? (
          <div className="invalid-feedback">{formik.errors.location.text}</div>
        ) : null}
      </div>
      <div className="mb-3 w-50 px-1">
        <label htmlFor="location-link-input" className="form-label main-color">
          Location Link
        </label>
        <input
          type="text"
          className={`form-control ${
            formik.errors.location?.link ? "is-invalid" : ""
          }`}
          id="location-link-input"
          placeholder="Location Link"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.location?.link}
          name="location.link"
        />
        {formik.errors.location?.link ? (
          <div className="invalid-feedback">{formik.errors.location.link}</div>
        ) : null}
      </div>
      <NewRooms formik={formik} setter={setRooms} rooms={rooms} />
      <div className="mb-3 w-100 px-1">
        <button type="submit" className="py-2 w-100">
          Submit
        </button>
      </div>
    </form>
  );
}
