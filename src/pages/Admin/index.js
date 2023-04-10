import Header from "../../components/Header";
import { Container, List } from "./styles";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
  orderBy,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");
  const [textColorInput, setTextColorInput] = useState("#121212");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const linksRef = collection(db, "links");
    const queryRef = query(linksRef, orderBy("created", "asc"));
    onSnapshot(queryRef, (snapshot) => {
      let lista = [];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().bg,
          color: doc.data().color,
        });
      });
      setLinks(lista);
    });
  }, []);

  async function handleRegister(e) {
    e.preventDefault();
    if (nameInput === "" || urlInput === "") {
      toast.warn("Preencha todos os campos!");
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
        console.log("Link registrado com sucesso!");
        toast.success("Link cadastrado com sucesso!");
      })
      .catch((error) => {
        console.log("Error ao resgistrar " + error);
        toast.error("Ops erro ao salvart o link ");
      });
  }

  async function handleDeleteLink(id) {
    const docRef = doc(db, "links", id);
    await deleteDoc(docRef);
    toast.info("link deletado com sucesso! ");
  }

  return (
    <Container>
      <Header />
      <Logo />
      <form onSubmit={handleRegister}>
        <label>Nome do link</label>
        <Input
          placeholder="Nome do link..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label>Url do link</label>
        <Input
          placeholder="Digite a url..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section>
          <div>
            <label>Fundo link</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>
          <div>
            <label>Cor do link</label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="preview">
            <label>Veja como está ficando 👇</label>
            <List
              style={{
                marginBottom: 8,
                marginTop: 8,
                background: backgroundColorInput,
              }}
            >
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </List>
          </div>
        )}

        <button type="submit">
          Cadastrar
          <MdAddLink size={24} />
        </button>
      </form>

      <h2>Meus links</h2>
      {links.map((item, index) => (
        <List key={index} style={{ background: item.bg, color: item.color }}>
          <p>{item.name}</p>
          <div>
            <button
              className="btn-delete"
              onClick={() => handleDeleteLink(item.id)}
            >
              <FiTrash2 size={18} color="#fff" />
            </button>
          </div>
        </List>
      ))}
    </Container>
  );
}
