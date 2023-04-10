import { Link } from "react-router-dom";
import { StyleLogo } from "./styles";

export default function Logo() {
  return (
    <Link to={"/"}>
      <StyleLogo>
        Developer<span>Link</span>
      </StyleLogo>
    </Link>
  );
}
