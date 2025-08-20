import React from "react";

const Profile = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img 
        src="/profile.jpeg" 
        alt="Minha Foto" 
        style={{ width: "150px", borderRadius: "50%" }} 
      />
      <h2>Marielly de Araújo Silva</h2>
      <p>Sou dev em formação e adoro programar em Java!</p>
      <p>Estou aprendendo React e Next.js para construir interfaces modernas.</p>
    </div>
  );
};

export default Profile;
