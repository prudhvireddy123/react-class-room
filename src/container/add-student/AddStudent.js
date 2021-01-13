import React from 'react'
import { useFormik } from 'formik'
export default function AddStudent() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            age: '',
            phone: ''
        },
        validate: (values) => {
            console.log(values)
            const errors = {}

            if (values.email.indexOf('@') < 0) {
                errors["email"] = true
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                {console.log(formik.errors)}
                <label htmlFor="name">name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                <label htmlFor="email">email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.errors.email && (<div>Email is required</div>)}
                <label htmlFor="age">age</label>
                <input
                    id="age"
                    name="age"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                <label htmlFor="phone">phone</label>
                <input
                    id="phone"
                    name="phone"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
