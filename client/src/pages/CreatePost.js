import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

function CreatePost() {
    const initialValues = {
        title: "",
        body: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a title..."),
        body: Yup.string().required("Post body cannot be empty..."),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return(
        <div className='createPostPage'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='formContainer'>
                    <label>Title:</label>
                    <ErrorMessage name="title" component="span" />
                    <Field id="inputCreatePost" name="title" placeholder="title..." />
                    <label>Body:</label>
                    <ErrorMessage name="body" component="span" />
                    <Field id="inputCreatePost" name="body" placeholder="title..." />

                    <button type="submit">Create Post</button>
                </Form>
            </Formik>
        </div>
    )
}
export default CreatePost;