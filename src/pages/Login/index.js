import { useState } from "react";
import Logo from "../../components/Logo";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Container } from "./styles";
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../components/Input";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("preencha todos os campos");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success(" 🙌🙌 Bem vindo de volta 🙌🙌 ");
        navigate("/admin", { replace: true });
      })
      .catch(() => {
        toast.error("Error ao tentar fazer o login");
        console.log("Error ao vazer seu login");
      });
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha..."
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <HiEye onClick={togglePassword} />
            ) : (
            <HiEyeOff onClick={togglePassword} />
          )}
        </div>
        
        <button type="submit">Acessar</button>
      </form>
    </Container>
  );
}
