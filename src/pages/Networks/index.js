import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container } from "../Admin/styles";
import { Title } from "./styles";
import { MdAddLink } from "react-icons/md";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { toast } from "react-toastify";
export default function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");

  useEffect(() => {
    function loadingLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data().facebook);
          setInstagram(snapshot.data().instagram);
          setLinkedin(snapshot.data().linkedin);
        }
      });
    }
    loadingLinks();
  });

  async function handleSave(e) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      linkedin: linkedin,
    })
      .then(() => {
        setFacebook("");
        setInstagram("");
        setLinkedin("");
        toast.success("Links salvos com sucesso");
      })
      .catch((error) => {
        toast.error("Erro ao salva links " + error);
      });
  }
  return (
    <Container>
      <Header />
      <Title>Suas redes sociais</Title>
      <form onSubmit={handleSave}>
        <label>Link do Facebook</label>
        <Input
          placeholder="Digite a url Facebook"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label>Link do Instagram</label>
        <Input
          placeholder="Digite a url do Instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label>Link do linkedin</label>
        <Input
          placeholder="Digite a url do Linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <button type="submit">
          Salvar link <MdAddLink />
        </button>
      </form>
    </Container>
  );
}
