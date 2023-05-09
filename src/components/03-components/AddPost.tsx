/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { usePostStore } from '../../store/postStore';
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputForm, TextForm } from '../01-atoms/Input';
import Button from '../01-atoms/Button';
import  {Post} from '../../types/interfaces';

// interface SubmitHandler<T> {
//     (data: T): Post;
// }

const AddPost: React.FC = () => {
    const navigate = useNavigate();
    const { postId } = useParams<{ postId?: string }>();
    const { reset, register, handleSubmit, formState: { errors } } = useForm<Post>();

    const { addPost, getPost, editPost} = usePostStore();

    const onSubmit= (data:Post) => {
        if (postId) {
            data.updatedAt = JSON.stringify(new Date());
            editPost(data);
        } else {
            data.createdAt = JSON.stringify(new Date());
            addPost(data);
        }
        reset();
        navigate('/posts');
    };

    useEffect(() => {
        if (postId) {
            const fetchData = async () => {
                const data = await getPost(postId);
                reset({ ...data });
            };
            fetchData();
        }

    }, []);


    return (
        <div className="my-4">
            <h2 className="text-2xl font-bold mb-4">{postId ? 'Edit' : 'Add' } Post</h2>

            <form >
                <InputForm {...register('title', {
                    required: {
                        value: true,
                        message: 'This field is required'
                    }
                }
                )}
                    placeholder='Title'
                    errors={errors['title']}
                    label="Title"
                />
                <InputForm {...register('videoUrl', {
                    required: {
                        value: true,
                        message: 'This field is required'
                    }
                }
                )}
                    placeholder='Video Url'
                    label="Video Url (Ej: MBVdHoRwxz8)"
                    errors={errors['videoUrl']} />
                <InputForm {...register('imageUrl', {
                    required: {
                        value: true,
                        message: 'This field is required'
                    }
                }
                )}
                    placeholder='Image Url'
                    label="Image Url (Ej: loremflickr.com/320/240 )"
                    errors={errors['imageUrl']} />
                <InputForm {...register('author', {
                    required: {
                        value: true,
                        message: 'This field is required'
                    },

                }
                )}
                    placeholder='Author'
                    label="Author"
                    errors={errors['author']} />
                <TextForm {...register('content', {
                    required: {
                        value: true,
                        message: 'This field is required'
                    }
                }
                )}
                    label="Content"
                    errors={errors['content']} />

                <Button
                    handleClick={handleSubmit(onSubmit)}
                    type="submit"
                    label="Save"
                />
            </form>
        </div>
    );
};

export default AddPost;
TextForm