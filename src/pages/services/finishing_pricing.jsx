import Breadcrumb from "@/components/BreadCrumb";
import Banner from "@/components/services/banner";
import Form from "@/components/services/finishing/form";

export default function Finishing_pricing() {
  let path = [{ text: "Home", link: "/" }, { text: "Finishing Quantity" }];

  return (
    <div className="page container">
      <Banner
        title="Calculation of finishing quantity"
        description="You can now add the details of your residential unit, and we will
              calculate its price accordinng to the area and the prices
              recognized in its surrounding"
        breadcrumb={<Breadcrumb path={path} />}
      />
      <Form />
    </div>
  );
}
