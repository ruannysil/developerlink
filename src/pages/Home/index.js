import { Container } from "./style";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Social from "../../components/Social";
import React, { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  orderBy,
  query,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { Title } from "../Networks/styles";
export default function Home() {
  const [links, setLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
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
    }
    loadLinks();
  }, []);

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data().facebook,
            instagram: snapshot.data().instagram,
            linkedin: snapshot.data().linkedin,
          });
        }
      });
    }
    loadSocialLinks();
  }, []);

  return (
    <Container>
      <Title>Ruan Programador</Title>
      <span>👇Veja meus links!👇</span>

      <main>
        {links.map((item) => (
          <section style={{ backgroundColor: item.bg }}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <p style={{ color: item.color }}>{item.name}</p>
            </a>
          </section>
        ))}
      </main>

      {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
        <footer>
          <Social url={socialLinks?.facebook}>
            <FaFacebook size={35} color="#fff" />
          </Social>
          <Social url={socialLinks?.instagram}>
            <FaInstagram size={35} color="#fff" />
          </Social>
          <Social url={socialLinks?.linkedin}>
            <FaLinkedin size={35} color="#fff" />
          </Social>
        </footer>
      )}
    </Container>
  );
}
