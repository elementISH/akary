import React from "react";
import AllUnitsList from "@/components/AllUnitsList";
import Breadcrumb from "@/components/BreadCrumb";
import connectMongo from "@/utils/connectMongo";
import Unit from "@/models/unitModel";

export default function AllUnits({ units }) {
  let path = [{ text: "Home", link: "/" }, { text: "Units For Sale" }];

  return (
    <div>
      <div className="container section">
        <Breadcrumb path={path} />
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Units</h2>
        </div>
        <AllUnitsList data={units} />
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  try {
    await connectMongo();
    const units = await Unit.find();
    console.log(units);
    return {
      props: {
        units: JSON.parse(JSON.stringify(units)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
