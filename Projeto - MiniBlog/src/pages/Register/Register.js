import { useAuthValue } from '../../context/AuthContext';
import { useAuthentication } from '../../hooks/useAuthentication';
import styles from './Register.module.css'; 
import { useState, useEffect } from 'react';

const Register = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: authError, loading} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setError("");

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword){
            setError("As senhas precisam coincidir.")
            return;
        }

        const response = await createUser(user);

        console.log(response)
    }

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    }, [authError])


  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" 
                name="displayName"
                required
                value={displayName} 
                placeholder="Digite o seu nome" onChange={(e) => setDisplayName(e.target.value)}/>
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email" 
                name="email"
                required 
                value={email} 
                placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" 
                name="password"
                required 
                value={password} 
                placeholder="Digite uma senha" onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
                <span>Confirmação Senha:</span>
                <input type="password" 
                name="confirmPassword"
                required 
                value={confirmPassword} 
                placeholder="Confirme a sua senha" onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
            {!loading && <button className="btn">Cadastrar</button>} 
            {loading && <button className="btn" disabled>Aguarde...</button>}
            { error && (<p className='error'>{error}</p>)}
        </form>
    </div>
  )
}


export default Register