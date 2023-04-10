import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { StyleHeader } from "./styles";
import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

export default function Header() {
  async function handleLogout() {
    toast.success('🖐🤙Áte mais🖐🤙')
    await signOut(auth);
  }
  return (
    <StyleHeader>
      <nav>
        <button onClick={handleLogout}>
          <BiLogOut size={28} color="#db2629" />
        </button>

        <Link to="/admin">Links</Link>
        <Link to="/admin/social">Redes sociais</Link>
      </nav>
    </StyleHeader>
  );
}
