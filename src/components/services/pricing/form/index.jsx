import { useFormik } from "formik";
import { useState } from "react";

export default function Form(props) {
  const formik = useFormik({
    initialValues: {
      unitType: "",
      finishRatio: "",
      payment: "",
      furnished: "",
      area: "",
      rooms: "",
      bathrooms: "",
      city: "",
      level: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.unitType) {
        errors.unitType = "Required";
      }
      if (!values.finishRatio) {
        errors.finishRatio = "Required";
      }
      if (!values.finishRatio) {
        errors.payment = "Required";
      }
      if (!values.furnished) {
        errors.furnished = "Required";
      }
      if (!values.area) {
        errors.area = "Required";
      } else if (isNaN(values.area)) {
        errors.area = "Must be a number";
      }
      if (!values.rooms) {
        errors.rooms = "Required";
      } else if (isNaN(values.rooms)) {
        errors.rooms = "Must be a number";
      }
      if (!values.bathrooms) {
        errors.bathrooms = "Required";
      } else if (isNaN(values.bathrooms)) {
        errors.bathrooms = "Must be a number";
      }
      if (!values.city) {
        errors.city = "Required";
      }
      if (!values.level) {
        errors.level = "Required";
      } else if (isNaN(values.level)) {
        errors.level = "Must be a number";
      }
      return errors;
    },
    onSubmit: async (values) => {
      const payload = {
        Type: values.unitType,
        Furnished: values.furnished,
        Payment_Option: values.payment,
        Delivery_Term: values.finishRatio,
        Bedrooms: parseInt(values.rooms),
        Bathrooms: parseInt(values.bathrooms),
        Area: parseInt(values.area),
        Level: parseInt(values.level),
        City: values.city,
      };
      const res = await fetch("/api/price/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      props.fc(data.value);
    },
  });

  const cities = [
    "Stone Residence",
    "Taj City",
    "New Cairo - El Tagamoa",
    "Garden Hills",
    "Nakheel",
    "6th of October",
    "October Plaza Sodic",
    "The Brooks",
    "Mountain View iCity",
    "Beverly Hills",
    "Trio Gardens",
    "Sun Capital",
    "Sheikh Zayed",
    "Nasr City",
    "EL Patio Casa",
    "Asafra",
    "Zahraa Al Maadi",
    "Seyouf",
    "Madinaty",
    "Century City",
    "Murooj",
    "Sidi Beshr",
    "Al Maqsad",
    "Badr City",
    "Sidi Gaber",
    "Hadayek al-Ahram",
    "Smoha",
    "Roushdy",
    "Fifth Square",
    "Shorouk City",
    "Alma",
    "Gianaclis",
    "New Capital City",
    "Hadayek 6th of October",
    "90 Avenue",
    "Village West",
    "Haram",
    "Mandara",
    "Rehab City",
    "Obour City",
    "Hyde Park New Cairo",
    "Faisal",
    "Zed East",
    "Uptown Cairo",
    "Ashgar City",
    "Monte Napoleon",
    "Montazah",
    "Maadi",
    "Laurent",
    "New Giza",
    "Heliopolis",
    "Saba Pasha",
    "Mountain View Chillout Park",
    "Joulz",
    "Isola",
    "Sarai",
    "Galleria Moon Valley",
    "Agami",
    "Dokki",
    "Raml Station",
    "Capital Gardens",
    "Mivida",
    "Haptown",
    "Sheraton",
    "El Khamayel",
    "El Fardous",
    "Mohandessin",
    "Capital Heights 2",
    "L’Avenir",
    "Tala",
    "VYE Sodic",
    "Giza District",
    "Degla Gardens",
    "The Estates",
    "Al Ibrahimiyyah",
    "EL Patio 5",
    "Degla Palms",
    "The Waterway Compound",
    "Palm Hills New Cairo",
    "Green Square",
    "Stanley",
    "Midtown",
    "Badya Palm Hills",
    "Midtown Sky",
    "Venia",
    "Kenz",
    "El Ashgar District",
    "Moharam Bik",
    "Mountain View Hyde Park",
    "Glim",
    "Azarita",
    "De Joya",
    "The Loft",
    "ZED Towers",
    "ABHA",
    "Zizinia El Mostakbal",
    "Atika",
    "The Icon Residence",
    "Palm Parks",
    "Kardia",
    "Mokattam",
    "Vinci",
    "Miami",
    "Al Hadrah",
    "Kafr Abdo",
    "Victoria",
    "Villette",
    "Hexa",
    "West Somid",
    "Eastown",
    "San Stefano",
    "Amorada",
    "Tiba Gardens",
    "Camp Caesar",
    "Kanarya",
    "Tag Sultan",
    "Rock Eden",
    "Karmell",
    "AZAD",
    "Mena Garden City",
    "Kayan",
    "Al Burouj",
    "O West",
    "Italian Square",
    "Cairo Gate",
    "Sky Condos Sodic",
    "Park View",
    "Maamoura",
    "EL Patio 7",
    "One Kattameya",
    "Hadayek Helwan",
    "Dreamland",
    "Zayed 2000",
    "Zezenia",
    "Bolkly",
    "Swan Lake",
    "Mountain View 1",
    "Lake view Residence",
    "Bloomfields",
    "New Heliopolis",
    "Pyramids Hills",
    "Terrace Smouha",
    "Bedaya",
    "Aeon",
    "Borg al-Arab",
    "Mostakbal City",
    "IL Bosco",
    "Gesr Al Suez",
    "IL Bosco City",
    "Zayed Dunes",
    "Jewar",
    "Mountain View - October Park",
    "Sodic East",
    "Katameya",
    "Shubra",
    "Sarayat El Kattameya",
    "Etapa",
    "Stau",
    "Andalus",
    "Bahray - Anfoshy",
    "Maryotaya",
    "Dar Misr",
    "Galleria",
    "Lake View",
    "Porto October",
    "Maadi V",
    "Rock Vera",
    "Sporting",
    "EL Patio ORO",
    "Floria",
    "Eco West",
    "Jayd",
    "District 5 Compound",
    "Gardenia",
    "Helmeyat El Zaytoun",
    "Baet El Masria",
    "Sun Gate",
    "Zayed Regency",
    "Regents Park",
    "Cleopatra",
    "Zamalek",
    "Odyssia",
    "Helwan",
    "The Village",
    "Next Point",
    "OIA",
    "Hadayek al-Kobba",
    "Manshiyya",
    "Cleopatra Palace",
    "Agouza",
    "Al Manial",
    "Sephora Heights",
    "Keeva",
    "Village Gate",
    "Beta Greens",
    "La Mirada",
    "Sodic Westown",
    "Maadi View",
    "Ain Shams",
    "Joya",
    "Palm View",
    "Beit Al Watan",
    "The Median",
    "Imbaba",
    "Karma Kay",
    "Mountain View - Giza Plateau",
    "Shatby",
    "Granda",
    "Belle Vie",
    "New Nozha",
    "El Karma",
    "Creek Town",
    "Fleming",
    "Opera City",
    "VGK",
    "Noor City",
    "Green Yard",
    "Amreya",
    "Midtown Condo",
    "Allegria",
  ].sort();
  return (
    <>
      <h3 className="text-center secondary-color mb-5">
        To know the price of your unit please enter the following data
      </h3>
      <form
        className="selling-form d-flex justify-content-center flex-wrap"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div className="mb-3 w-100 px-1">
          <label htmlFor="area-input" className="form-label main-color">
            Area
          </label>
          <input
            type="text"
            className={`form-control ${
              formik.touched.area && formik.errors.area ? "is-invalid" : ""
            }`}
            id="area-input"
            name="area"
            placeholder="Area"
            value={formik.values.area}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="invalid-feedback">{formik.errors.area}</div>
        </div>
        <div className="mb-3 w-50 px-1">
          <label htmlFor="level-input" className="form-label main-color">
            level
          </label>
          <input
            type="text"
            className={`form-control ${
              formik.touched.level && formik.errors.level ? "is-invalid" : ""
            }`}
            id="level-input"
            name="level"
            placeholder="Level"
            value={formik.values.level}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="invalid-feedback">{formik.errors.level}</div>
        </div>
        <div className="mb-3 w-50 px-1">
          <label htmlFor="unit-type-input" className="form-label main-color">
            Unit Type
          </label>
          <select
            id="unit-type-input"
            className={`form-select ${
              formik.touched.unitType && formik.errors.unitType
                ? "is-invalid"
                : ""
            }`}
            name="unitType"
            value={formik.values.unitType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select a unit type</option>
            <option value="Apartment">Apartment</option>
            <option value="Duplex">Duplex</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Studio">Studio</option>
          </select>
          <div className="invalid-feedback">{formik.errors.unitType}</div>
        </div>
        <div className="mb-3 w-50 px-1">
          <label htmlFor="finish-ratio-input" className="form-label main-color">
            Finish Ratio
          </label>
          <select
            id="finish-ratio-input"
            className={`form-select ${
              formik.touched.finishRatio && formik.errors.finishRatio
                ? "is-invalid"
                : ""
            }`}
            name="finishRatio"
            value={formik.values.finishRatio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select a finish ratio</option>
            <option value="Finished">Finished</option>
            <option value="Semi Finished">Semi Finished</option>
            <option value="Not Finished">Not Finished</option>
            <option value="Core & Shell">Core & Shell</option>
          </select>
          <div className="invalid-feedback">{formik.errors.finishRatio}</div>
        </div>
        <div className="mb-3 w-50 px-1">
          <label htmlFor="payment-input" className="form-label main-color">
            Payment Option
          </label>
          <select
            id="payment-input"
            className={`form-select ${
              formik.touched.payment && formik.errors.payment
                ? "is-invalid"
                : ""
            }`}
            name="payment"
            value={formik.values.payment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select a payment option</option>
            <option value="Cash">Cash</option>
            <option value="Installment">Installments</option>
          </select>
          <div className="invalid-feedback">{formik.errors.payment}</div>
        </div>
        <div className="mb-3 w-50 px-1">
          <label htmlFor="furnished-input" className="form-label main-color">
            Furnished
          </label>
          <select
            id="furnished-input"
            className={`form-select ${
              formik.touched.furnished && formik.errors.furnished
                ? "is-invalid"
                : ""
            }`}
            name="furnished"
            value={formik.values.furnished}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select a furnished option</option>
            <option value="Yes">Fully Furnished</option>
            <option value="No">Unfurnished</option>
          </select>
          <div className="invalid-feedback">{formik.errors.furnished}</div>
        </div>
        <div className="mb-3 w-50 px-1">
          <label htmlFor="rooms-input" className="form-label main-color">
            Number of Rooms
          </label>
          <input
            type="text"
            className={`form-control ${
              formik.touched.rooms && formik.errors.rooms ? "is-invalid" : ""
            }`}
            id="rooms-input"
            name="rooms"
            placeholder="Number of Rooms"
            value={formik.values.rooms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="invalid-feedback">{formik.errors.rooms}</div>
        </div>
        <div className="mb-3 w-50 px-1">
          <label htmlFor="bathrooms-input" className="form-label main-color">
            Number of Bathrooms
          </label>
          <input
            type="text"
            className={`form-control ${
              formik.touched.bathrooms && formik.errors.bathrooms
                ? "is-invalid"
                : ""
            }`}
            id="bathrooms-input"
            name="bathrooms"
            placeholder="Number of Bathrooms"
            value={formik.values.bathrooms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="invalid-feedback">{formik.errors.bathrooms}</div>
        </div>
        <div className="mb-3 w-50 px-1">
          <label htmlFor="city-input" className="form-label main-color">
            City
          </label>
          <select
            id="city-input"
            className={`form-select ${
              formik.touched.city && formik.errors.city ? "is-invalid" : ""
            }`}
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {cities.map((city) => {
              return (
                <option key={city} value={city}>
                  {city}
                </option>
              );
            })}
          </select>
          <div className="invalid-feedback">{formik.errors.city}</div>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto mt-3">
          <button type="submit" className="p-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
