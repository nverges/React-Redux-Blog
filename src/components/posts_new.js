import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    // field property can be given arbitrary properties that you can define in a Field 
    renderField(field) {
        return (
            <div className='form-group'>
                
                <label>{field.label}</label>
                <input
                    className='form-control'
                    type='text'
                    // field.input is an object that contains a bunch of eevent handlers and props (onchange, onblur, onfocus, value, etc...)
                    // the ... says OK, this is an object, and I want all the properties to be communicated as props
                    {...field.input}
                />

                {/* GETS ERROR MESSAGE TO SHOW UP */}
                {/* meta.error is automatically added to that field object from the validate function */}
                {field.meta.error}

            </div>
        )
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {

        // handleSubmit is put on props by redux-form
        const { handleSubmit } = this.props;

        return (
            // whenever the user submits the form, the redux-form 'handleSubmit' function runs, then once it decides its ok, then the
            // app runs our custum onSubmit method that we wrote. Also, bind to this.
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label='Title'
                    name='title'
                    // component property takes in a function (or another comonent) that will be used to display Field component
                    // function that returns some JSX
                    component={this.renderField}
                />
                <Field
                    label='Categories'
                    name='categories'
                    component={this.renderField}
                />
                <Field 
                    label='Post Content'
                    name='content'
                    component={this.renderField}
                />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        )
    }
}

// values is an object that contains all of values that a user has entered into the form
// **** validate function is automatically called when a form is submitted by redux-form *****
function validate(values) {
    // console.log(values) -> { title: 'adf', categories: 'asdlfkj', content: ';lakj' }
    const errors = {};

    // Validate the inputs from the values object
    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if (!values.content) {
        errors.content = "Enter some content!";
    }

    // if errors object is empty, form is free to submit
    // if errors has ANY properties, redux-form assumes form is invalid
    return errors;
}

// when using reduxForm(), you pass a single argument that is a function with configuration options
export default reduxForm({
    // passes validate function to redux-form
    validate, 
    form: 'PostsNewForm'
})(PostsNew);

