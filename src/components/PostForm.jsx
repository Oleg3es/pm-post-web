import React, { useCallback, useEffect, useRef, useState } from 'react';
import InputSelection from './UI/input/InputSelection';
import InputImages from './UI/input/InputImages';
import SaveButton from './UI/button/SaveButton';
import DeleteButton from './UI/button/DeleteButton';
import RemoveImageButton from './UI/button/RemoveImageButton'
import InputTextForm from './UI/input/InputTextForm';


const PostForm = ({ create, editPost, postToEdit, setPostToEdit, modal, remove }) => {
    const [post, setPost] = useState({ title: '', body: [] });
    const [previewImg, setPreviewImg] = useState([]);
    const [files, setFiles] = useState([]);
    const inputRef = useRef();



    useEffect(() => {
        if (postToEdit) {
            setPost({ title: postToEdit.title, body: postToEdit.body });
            setFiles([]);
            setPreviewImg([]);
        } else {
            setPost({ title: '', body: [] });
            setFiles([]);
            setPreviewImg([]);
        }
    }, [postToEdit]);

    useEffect(() => {
        if (!modal) {
            setPost({ title: '', body: [] });
            setPostToEdit(null);
            setPreviewImg([]);
        }
    }, [modal])

    const addOrEditPost = (e) => {
        e.preventDefault();
        if (postToEdit) {
            editPost({ ...post, id: postToEdit.id });
        } else {
            const newPost = {
                ...post, id: Date.now()
            };
            create(newPost);
            setPost({ title: '', body: [] });
        }
    };

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles(newFiles);
        inputRef.current.value = '';
    };

    useEffect(() => {
        if (files.length > 0) {
            const newPreviewMedia = files.map(file => {
                const url = URL.createObjectURL(file);
                return {
                    url: url,
                    type: file.type
                };
            });

            setPreviewImg(newPreviewMedia);
            setPost(prevPost => ({
                ...prevPost,
                body: [
                    ...prevPost.body,
                    ...newPreviewMedia.map(media => ({
                        url: media.url,
                        type: media.type
                    }))
                ]
            }));
        }
    }, [files]);


    const handleTitleChange = useCallback(
        (e) => {
            setPost((post) => ({ ...post, title: e.target.value }));
        },
        [setPost, post]
    );

    const removeImage = (index) => {
        setPost(prevPost => ({
            ...prevPost,
            body: prevPost.body.filter((_, i) => i !== index)
        }));

    };

    return (
        <form onSubmit={addOrEditPost} className='form'>
            <div className='form__input-text'>
                <InputTextForm
                    onChange={handleTitleChange}
                    value={post.title}
                    type="text"
                    placeholder="Описание поста"
                />
            </div>
            <div className='form__media-wrapper'>
                {post.body.map((media, i) => (
                    <div key={i} className='form__media'>
                        <div className='form__media-inner'>
                            <div className='form__media-content'>
                                {media.type.startsWith('video/') ? (
                                    <div className="form__media-content-video">
                                        <video src={media.url} width={104} height={104}>
                                            <span />
                                        </video>
                                    </div>
                                ) : (
                                    <img src={media.url} alt={`preview-${i}`} />
                                )}
                            </div>
                            <div className="form__media-delete-button">
                                <RemoveImageButton type='button' onRemove={removeImage} index={i} />
                            </div>
                        </div>
                    </div>
                ))}
                <InputImages type="file" ref={inputRef} multiple onChange={handleFileChange} setFiles={setFiles} />
            </div>
            <div className="form__btns-wrapper">
                <div className='form__btns'>
                    <DeleteButton type='button' onClick={() => remove(postToEdit)} postToEdit={postToEdit}>Удалить</DeleteButton>
                    <SaveButton onSubmit={addOrEditPost}>{postToEdit ? 'Сохранить' : 'Добавить'}</SaveButton>
                </div>
            </div>
        </form>
    );
};

export default PostForm;