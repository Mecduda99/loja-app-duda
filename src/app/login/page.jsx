"use client";
import { useState } from "react";

export default function LoginUsers() {
<<<<<<< HEAD

    const [msg, setMsg] = useState();

  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const{name,value} = e.target;
    setUsuario({...usuario,[name]:value});
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    //Recuperar o usuário que está em nossa base json.
=======
  //Mensage de STATUS!
  const [msg, setMsg] = useState("");
 
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  //Preenchimento dos Campos!
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  //Envio das informações
  const handleSubmit = async (e) => {

    e.preventDefault();

>>>>>>> 42f1d36be325e0208945e9c9152948e55ca71b4c
    try {
      const response = await fetch(
        "http://localhost:3000/api/base/base-user-api",
        {
<<<<<<< HEAD
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if(response.ok){
            const result = await response.json();

            if(result.status == "ok"){
                setMsg("Login efetuado com sucesso! (Amém)")
                setTimeout(()=>{
                    setMsg("");
                }, 5000);
            }
            else{
                setMsg("Login ou senha incorretos! (AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA :( )")
                setTimeout(()=>{
                    setMsg("");
                }, 5000);
            }
        }
=======
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("VALIDADO!!!!");
        if (result.status == "ok") {
            
            setMsg("Login efetuado com Sucesso!!");
            setTimeout(()=>{
                setMsg("");
            },5000);
        }else{
            setMsg("Login ou Senha incorretos!");
            setTimeout(()=>{
                setMsg("");
            },5000);
        }
      }
>>>>>>> 42f1d36be325e0208945e9c9152948e55ca71b4c
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>IDENTIFICAÇÃO DOS USUÁRIOS</h1>

<<<<<<< HEAD
        <h2>{msg}</h2>
=======
        <h2 className="bg-red-300 text-red-700 text-center text-lg">{msg}</h2>
>>>>>>> 42f1d36be325e0208945e9c9152948e55ca71b4c

      <div className="form-login">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>LOGIN</legend>
            <div>
              <label htmlFor="idEmail">Email:</label>
              <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite seu email."
<<<<<<< HEAD
                value={usuario.email} onChange={handleChange}
=======
                value={usuario.email}
                onChange={handleChange}
>>>>>>> 42f1d36be325e0208945e9c9152948e55ca71b4c
              />
            </div>
            <div>
              <label htmlFor="idSenha">Senha:</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
<<<<<<< HEAD
                placeholder="Digite sua senha." 
                value={usuario.senha} onChange={handleChange}
=======
                placeholder="Digite sua senha."
                value={usuario.senha}
                onChange={handleChange}
>>>>>>> 42f1d36be325e0208945e9c9152948e55ca71b4c
              />
            </div>
            <div>
              <button>LOGIN</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 42f1d36be325e0208945e9c9152948e55ca71b4c
