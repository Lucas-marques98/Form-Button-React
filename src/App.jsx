import { useState } from "react";
import Nome from "./Components/Nome"

export default function App() {

const [aluno, setAluno] = useState('Lucas rodrigues')

const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [idade, setIdade] = useState('')

const [user, setUser] = useState({})



function funcMudarNome(nome){
  setAluno(nome)
}
function MudarNome(){
  setAluno('Milena Lopes')
}

function Register(e){
  e.preventDefault()
  alert('Registrado com Sucesso')
  setUser({
    nome: nome,
    email: email,
    idade: idade,
  })
}
  return (
    <div>
      <h1>Olá Mundo, Já me livrei da Maldição </h1> <br/>
      <h2>Olá {aluno}</h2>
      <button onClick={() => funcMudarNome ('Lucas Marques') }>Mudar nome</button><br/>
      <button onClick={MudarNome}>Aperte Aqui para mudar o nome novamente </button><br/>
      <Nome aluno="Leandro Pereira" idade={30}/><br/>
    
    <form onSubmit={Register}>
      <h1>Cadastrando o Úsuario</h1>
      
      <label>
        Nome:
      </label><br/>
        <input 
        placeholder="Digite seu Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value) }/><br/>

        <label>
        Email
      </label><br/>
        <input 
        placeholder="Digite seu Email"
        value={email}
        onChange={(e) => setEmail(e.target.value) }/><br/>

        <label>
        Idade
      </label><br/>
        <input placeholder="Digite sua Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value) }/><br/>

        <button type="submit">Registrar</button>

    </form>
    <br/> <br/>

    <div>

    </div>
    <strong>Bem vindo:{user.nome}</strong><br/>
    <strong>Email:{user.email}</strong><br/>    
    <strong>idade:{user.idade}</strong><br/>   
    </div>
  );
};



