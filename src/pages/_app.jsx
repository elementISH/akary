import Layout from "@/components/layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/mainstyle.css";
const { library, config } = require("@fortawesome/fontawesome-svg-core");
import "@fortawesome/fontawesome-svg-core/styles.css";
import { far } from "@fortawesome/free-regular-svg-icons";
config.autoAddCss = false;
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas, far);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout page={<Component {...pageProps} />} />
    </>
  );
}
