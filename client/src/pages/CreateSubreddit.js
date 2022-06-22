import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios"; 

function CreateSubreddit() {
    const initialValues = {
        name: "",
        description: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("You must input a subreddit name..."),
        description: Yup.string().required("Subreddit description is required..."),
    });

    const onSubmit = (data) => {
        //console.log(data);
        axios.post("http://localhost:3001/subreddits", data).then((response) => {
            console.log("subreddit created...");
        });
    };

    return(
        <div className='createPostPage'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='formContainer'>
                    <label>Subreddit Name:</label>
                    <ErrorMessage name="name" component="span" />
                    <Field id="inputCreatePost" name="name" placeholder="Subreddit name..." />
                    <label>Description:</label>
                    <ErrorMessage name="description" component="span" />
                    <Field id="inputCreatePost" name="description" placeholder="Quick description about this subreddit..." />

                    <button type="submit">Create Subreddit</button>
                </Form>
            </Formik>
        </div>
    )
}
export default CreateSubreddit;