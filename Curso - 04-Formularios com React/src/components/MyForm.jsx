import { useState } from 'react';
import './MyForm.css';

const MyForm = ({user}) => {
    // 6 - Controlled Input
    //3 - Gerenciamento de Dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState("");

    const [message, setMessage] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    // 5 - Enviando formulário
    const handleSubmit = (event) =>{
        event.preventDefault();
        // Dados do user
        console.log("< DADOS >")
        console.log("Nome: "+name)
        console.log("Email: "+email)
        console.log("Bio: "+bio)
        console.log("Role: "+role)


        // Esvaziando dados do state
        setName('')
        setEmail('')
        setBio('')
        setRole('')
        setMessage('Formulário enviado com sucesso!')
    }
    

  return (
    <div>
        {/*1 - Criação do Form */}
        <p style={{color: "green", fontWeight: "bold"}}>{message && message}</p>
       
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome: </label>
            <input onChange={handleName} type="text" name="nome" id="nome" placeholder="Digite o seu nome" value={name}/>

            {/*2 - label envolvendo input */}
            <label>
                <span>Email:</span>
                {/* 4 - alteração de state inline */}
                <input onChange={ (e) => setEmail(e.target.value) } type="email" name="email" id="email" placeholder="Digite o seu email" value={email}/>
            </label>

            {/* Textarea */}
            <label htmlFor="bio">Bio: </label>
            <textarea onChange={ (e) => setBio(e.target.value)} name="bio" id="bio" cols="30" rows="10" placeholder='Descrição do usuário' value={bio}></textarea>
            
            {/* Select */}
            <label>
                <select name="role" id="role" onChange={ (e) => {setRole(e.target.value)}} value={role}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm