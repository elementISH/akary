import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  const handleClickHome = () => {
    router.push("/");
  };
  const handleClickContact = () => {
    router.push("/contact");
  };
  return (
    <>
      <div className="section text-center">
        <h1 className="text-gold mb-5">
          404
          <br />
          Page Not Found
        </h1>
        <div className="w-50 align-self-center mx-auto d-flex gap-3 mb-5">
          <button
            className="w-50"
            style={{ padding: "6px" }}
            onClick={handleClickHome}
          >
            Go Home
          </button>
          <button
            className="w-50"
            style={{ padding: "6px" }}
            onClick={handleClickContact}
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
}
