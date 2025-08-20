import Image from "next/image";
import styles from "./page.module.css";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Site criado para a disciplina Programação Front-End
      </h1>
      <Profile />
    </div>
  );
}
