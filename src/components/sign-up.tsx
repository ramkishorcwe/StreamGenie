import {Formik} from 'formik';
import {useRef} from 'react';
import resource from "../resource";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../services/firebase";
import {useNavigate, Link} from 'react-router-dom'


const Signup = () => {
    const email = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()

    const handleSignup = async (values)=>{
        try{
            const result = await createUserWithEmailAndPassword( auth, values.email, values.password)
            console.log(result)
            navigate("/")
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/8200f58…ve_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg')]">
            <div className="p-10 max-w-md min-h-fit bg-gray-900 text-white p-6 rounded-sx opacity-70 shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 text-white">
                    {resource.signUpHeadingText}
                </h1>
                <Formik
                    className="space-y-4 max-w-md"
                    initialValues={{email: '', password: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            // errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            // errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        handleSignup(values)
                        // setTimeout(() => {
                        //     alert(JSON.stringify(values, null, 2));
                        //     setSubmitting(false);
                        // }, 400);
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                ref={email}
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className="w-full focus:ring-blue-500 p-2 my-2 border border-gray-300 rounded-md shadow-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                ref = {password}
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className="w-full focus:ring-blue-500 p-2 my-2 border rounded-md shadow-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-200 transition"

                            />
                            {errors.password && touched.password && errors.password}
                            <div>
                                <button type="submit" disabled={isSubmitting}
                                        className="bg-blue-600 my-4 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                                    {resource.signUpHeadingText}
                                </button>
                                <Link to={"/login"}>
                                    Signin
                                </Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default Signup;