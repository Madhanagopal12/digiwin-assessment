import { Link } from "react-router-dom";

export default function Button({ className = "", to = "" }) {
  return (
    <>
      <Link
        title="MUM digital agency - Luxembourg"
        className={`btn btn-outline ${className} md:text-lg text-[16px]`}
        to={to}
      >
        Votre Projet
      </Link>
    </>
  );
}
