import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Data() {
  const [password, setPassword] = useState(null);
  return (
    <>
      <div className="profile__personal-cont d-flex flex-wrap w-100">
        <div className="mb-3 w-50 px-1">
          <label className="form-label main-color">Email</label>
          <input
            type="text"
            className="form-control"
            value={"nour@akary.com"}
            placeholder="Email"
          />
        </div>
        <div className="mb-3 w-50 px-1">
          <label className="form-label main-color">Passowrd</label>
          <div class="input-group mb-2">
            <div
              class="input-group-prepend h-100"
              onClick={() => setPassword(!password)}
            >
              <div class="input-group-text h-100">
                <FontAwesomeIcon icon="fa-eye" className="fs-4" />
              </div>
            </div>
            <input
              type={password ? "text" : "password"}
              class="form-control"
              id="inlineFormInputGroup"
              placeholder="Password"
              value={"nour_akary_12"}
            />
          </div>
        </div>
        <div className="mb-3 w-50 px-1">
          <label className="form-label main-color">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={"Nour"}
          />
        </div>
        <div className="mb-3 w-50 px-1">
          <label className="form-label main-color">Job</label>
          <input type="text" className="form-control" placeholder="Job" />
        </div>
        <div className="mb-3 w-50 px-1">
          <label className="form-label main-color">Phone</label>
          <input
            type="text"
            className="form-control"
            value={"01115535536, 01114112235"}
            placeholder="Phone"
          />
        </div>
        <div className="mb-3 w-50 px-1">
          <label className="form-label main-color">Role</label>
          <input type="text" value={"user"} className="form-control" disabled />
        </div>
      </div>
    </>
  );
}
