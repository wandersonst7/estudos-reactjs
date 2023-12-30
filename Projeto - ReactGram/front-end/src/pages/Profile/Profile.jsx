import "./Profile.css"

import { uploads } from "../../utils/config";

// Components
import Message from "../../components/Message";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";

// Hooks
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux
import { getUserDetails } from "../../slices/userSlice";
import { publishPhoto, resetMessage, getUserPhotos, deletePhoto, updatePhoto } from "../../slices/photoSlice";

const Profile = () => {

    const { id } = useParams()

    const dispatch = useDispatch();

    const { user, loading } = useSelector((state) => state.user)
    const { user: userAuth } = useSelector((state) => state.auth);
    const { 
        photos, 
        loading: loadingPhoto, 
        message: messagePhoto, 
        error: errorPhoto } = useSelector((state) => state.photo);

    // states
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const [editId, setEditId] = useState("");
    const [editTitle, setEditTitle] = useState("");
    const [editImage, setEditImage] = useState("");

    // New form and edit form refs
    const newPhotoForm = useRef();
    const editPhotoForm = useRef();


    // loading user data
    useEffect(() => {

        dispatch(getUserDetails(id))
        dispatch(getUserPhotos(id))

    }, [dispatch, id])

    if(loading){
        return <p>Carregando...</p>
    }

    const resetComponentMessage = () => {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const photoData = {
            title,
            image
        }

        // build form data
        const formData = new FormData();

        const photoFormData = Object.keys(photoData).forEach((key) => formData.append(key, photoData[key]));

        formData.append("photo", photoFormData);

        await dispatch(publishPhoto(formData));

        setTitle("")

        resetComponentMessage();

    }

    const handleFile = (e) => {
        // image preview
        const image = e.target.files[0];
        setImage(image)
    };

    // Delete a photo
    const handleDelete = (id) => {
        dispatch(deletePhoto(id))

        resetComponentMessage();
    }

    // Show or hide forms
    const hiderOrShowForms = () => {
        newPhotoForm.current.classList.toggle("hide")
        editPhotoForm.current.classList.toggle("hide")
    }

    // Update a photo
    const handleUpdate = (e) => {
        e.preventDefault();

        const photoData = {
            title: editTitle,
            id: editId
        }

        dispatch(updatePhoto(photoData));
        resetComponentMessage();
    }

    const handleCancelEdit = () => {
        hiderOrShowForms();
    }

    const handleEdit = (photo) => {
        if(editPhotoForm.current.classList.contains("hide")){
            hiderOrShowForms();
        }

        setEditId(photo._id);
        setEditTitle(photo.title);
        setEditImage(photo.image);
    }

  return (
    <div id="profile">
        <div className="profile-header">
            {
                user.profileImage && (
                    <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
                )
            }
            <div className="profile-description">
                <h2>{ user.name }</h2>
                <p>{ user.bio }</p>
            </div>
        </div>
        { id === userAuth._id && (
            <>
                <div className="new-photo" ref={newPhotoForm}>
                    <h3>Compartilhe algum momento seu:</h3>
                    <form onSubmit={ handleSubmit }>
                        <label>
                            <span>Titulo para a foto: </span>
                            <input type="text" placeholder="Insira um título" onChange={(e) => setTitle(e.target.value)} value={title || ""}/>
                        </label>
                        <label>
                            <span>Imagem: </span>
                            <input type="file" onChange={ handleFile }/>
                        </label>
                        { !loadingPhoto && <input type="submit" value="Postar" />}
                        { loadingPhoto && <input type="submit" value="Aguarde..." disabled />}
                    </form>
                </div>
                <div className="edit-photo hide" ref={editPhotoForm}>
                    <p>Editando:</p>
                    {editImage && (
                        <img src={`${uploads}/photos/${editImage}`} alt={editTitle} />
                    )}
                    <form onSubmit={ handleUpdate }>
                        <input type="text" onChange={(e) => setEditTitle(e.target.value)} value={editTitle || ""} placeholder="Insira o novo título" />
                       
                        <input type="submit" value="Atualizar" />
                        <button type="button" className="cancel-btn" onClick={handleCancelEdit}>Cancelar edição</button>
                    </form>
                </div>
                { errorPhoto && <Message msg={errorPhoto} type="error" />}
                { messagePhoto && <Message msg={messagePhoto} type="success" />}
            </>
        )}
        <div className="user-photos">
            <h2>Fotos publicadas: </h2>
            <div className="photos-container">
                { photos && photos.map((photo) => (
                    <div className="photo" key={photo._id}>
                        { photo.image && (
                            <img 
                            src={`${uploads}/photos/${photo.image}`} 
                            alt={photo.title} />
                        )}

                    {id === userAuth._id ? (
                        <div className="actions">
                            <Link to={`/photos/${photo._id}`}> <BsFillEyeFill /> </Link>
                            <BsPencilFill onClick={ () => handleEdit(photo)}/>
                            <BsXLg onClick={() => handleDelete(photo._id)}/>
                        </div>
                    ) : (
                        <Link className="btn" to={`/photos/${photo._id}`}>Ver</Link>
                    )}

                    </div>
                ))}
                { photos.length === 0 && <p>Ainda não há fotos publicadas.</p> }
            </div>
        </div>
    </div>
  )
}

export default Profile