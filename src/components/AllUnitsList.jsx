import React from "react";
import UnitCard from "./UnitCard";

export default function AllUnitsList({ data }) {
  const arrayOfObjects = data;

  const arrayOfNames = arrayOfObjects.map((obj) => obj.title);

  console.log(arrayOfNames);
  return (
    <div className="row">
      {arrayOfObjects.map((obj) => {
        return (
          <UnitCard
            img={obj.img || "/images/asset-2.jpeg"}
            price={obj.price || 350000}
            title={obj.title || "شقه للبيييييع الحق العرض"}
            fav
            desc={
              obj.description.short ||
              "This unit is very good you have to buy it now!"
            }
            location={obj.location.text || "5 Mosaddak, dokki"}
            bedrooms={
              obj.rooms.map((room) => room.type == "bedroom").length || 2
            }
            bathrooms={
              obj.rooms.map((room) => room.type == "bathroom").length || 2
            }
            size={obj.area || 2}
          />
        );
      })}
    </div>
  );
}
