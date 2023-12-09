import styles from './Dashboard.module.css'

import { Link, useNavigate } from 'react-router-dom';

// hooks
import { useAuthValue}  from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';

const Dashboard = () => {

  const { value: user } = useAuthValue();
  const uid = user.uid;

  const redirect = useNavigate();

  // posts do usuario
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid)

  const { deleteDocument } = useDeleteDocument("posts");

  const handleDelete = (id) => {
    deleteDocument(id)
    redirect("/")
  }

  if(loading){
    return <p>Carregando posts...</p>
  }

  return (

    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>

      {posts && posts.length === 0 ? (
        <div className={styles.noposts}> 
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">Criar primeiro post</Link>
        </div>
      ): (

        <>
          <div className={styles.post_header}> 
            <span>Titulo</span>
            <span>Ações</span>
          </div>

          {posts && posts.map((post) => (
            <div className={styles.post_row} key={post.id}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ver</Link>
                  <Link to={`/posts/edit/${post.id}`} className='btn btn-outline'>Editar</Link>
                  <button onClick={() => handleDelete(post.id)} className='btn btn-outline btn-danger'>Excluir</button>
                </div>
            </div>
          ))}
        </>
      )}
    </div>

  )
}

export default Dashboard