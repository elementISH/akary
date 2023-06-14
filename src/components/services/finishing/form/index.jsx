import { useState } from "react";
import NewRooms from "../../newRooms";
import FinishingPriceData from "@/pages/services/finishing_price_data";

export default function HandleForm() {
  const [viewing, setViewing] = useState(false);
  const [rooms, setRooms] = useState([
    {
      id: Math.random(),
      init: "Bedroom",
      type: "bedroom",
      width: 0,
      height: 0,
      length: 0,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setViewing(true);
  };

  return (
    <>
      {viewing ? (
        <>
          <h3 className="text-center secondary-color mb-5">
            Here is the amount needed to finish your unit
          </h3>
          <FinishingPriceData height="50" rooms={rooms} />
          <div
            className="mb-3 w-100 px-1 d-flex justify-content-center"
            onClick={() => {
              setViewing(false);
            }}
          >
            <button className="w-50 py-2">Try new data</button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center secondary-color mb-5">
            To find out the amount needed to finish your unit, please fill the
            following form
          </h3>
          <form
            className="selling-form d-flex justify-content-center flex-wrap"
            onSubmit={handleSubmit}
          >
            <div className="divider"></div>

            <NewRooms rooms={rooms} setter={setRooms} />

            <div className="mb-3 w-100 px-1">
              <button type="submit" className="w-100">
                Calculate
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}
