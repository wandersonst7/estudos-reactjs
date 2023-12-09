import styles from './EditPost.module.css'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useUpdateDocument} from '../../hooks/useUpdateDocument';
import { useFetchDocument} from '../../hooks/useFetchDocument';

const EditPost = () => {

  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {

    if(post){
      setTitle(post.title)
      setBody(post.body)
      setImage(post.image)

      const textTags = post.tagsArray.join(", ");
      setTags(textTags)
    }

  }, [post])

  const { value: user } = useAuthValue();
  const { updateDocument, response } = useUpdateDocument("posts")

  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("")

    // validate image URL
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    }

    // criar o array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if(!title || !image || !tags ||!body){
      setFormError("Por favor, preencha todos os campos!")
    }

    // checar todos os valores

    if(formError){
      return;
    }

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName 
    }

    updateDocument(data, id)

    // redirect to home page
    redirect("/dashboard")
  }


  return (
    <div className={styles.edit_post}>
      { post && (
        <>
          <h2>Editando Post: {post.title} </h2>
          <p>Altere os dados do post como desejar</p>

          <form onSubmit={handleSubmit}>
            <label>
              <span>Titulo:</span>
              <input type="text" 
              name="title" 
              required 
              placeholder="Pense em um bom título" 
              onChange={(e) => setTitle(e.target.value)} 
              value={title}/>
            </label>

            <label>
              <span>URL da Imagem:</span>
              <input type="text" 
              name="image" 
              required 
              placeholder="Insira uma imagem que representa o seu post" 
              onChange={(e) => setImage(e.target.value)} 
              value={image}/>
            </label>

            <p className={styles.preview_title}>Preview da imagem atual: </p>
            <img className={styles.preview_image} src={post.image} alt={post.title} />

            <label>
              <span>Conteúdo</span>
              <textarea type="text" 
              name="body" 
              required 
              placeholder="Insira o conteúdo do post" 
              onChange={(e) => setBody(e.target.value)} 
              value={body}> </textarea> 
            </label>

            <label>
              <span>Tags:</span>
              <input type="text" 
              name="tags" 
              required 
              placeholder="Insira as tags separadas por vírgula post" 
              onChange={(e) => setTags(e.target.value)} 
              value={tags}/>
            </label>

            {!response.loading && <button className="btn">Salvar</button>} 
            {response.loading && <button className="btn" disabled>Aguarde...</button>}
            { response.error && (<p className='error'>{response.error}</p>)}
            { formError && (<p className='error'>{formError}</p>)}
          </form>
        </>
      )}

    </div>
  )
}

export default EditPost