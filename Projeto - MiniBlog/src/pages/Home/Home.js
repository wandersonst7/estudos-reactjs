import styles from './Home.module.css';

// hooks
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

// components
import PostDetail from '../../components/PostDetail';

const Home = () => {

  const [query, setQuery] = useState("");
  const {documents: posts, loading} = useFetchDocuments("posts");

  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(query) {
      return redirect(`/search?q=${query}`);
    }

  };

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Ou busque por tags..."
        onChange={(e) => setQuery(e.target.value)}/>
        <button className='btn btn-dark'>Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        
        { posts && posts.map((post) => (
          <PostDetail key={post.id} post={post}/>
        ))}
        
        { posts && posts.length === 0 && (
          <div className={styles.noposts}> 
            <p>Não foram encontrados posts</p>
            <Link className='btn' to="/posts/create">Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home