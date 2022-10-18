import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useNavigate } from "react-router-dom"
import * as Yup from 'yup';
import Logo from '../components/Logo';
import { loginUser } from '../firebase-functions';
// import { loginUser } from '../firebase-functions';
export default function LoginPage() {

  let goTo = useNavigate()
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, "Password should be atleast 6 letter long").required('Password is required'),
  });
  return (
    <div className='min-h-full'>
      <div className='relative flex min-h-full justify-center md:px-12 lg:px-0'>

        <div className="relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28 min-h-screen">
          <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0" >
            <div className='flex flex-col'>
              <Logo />
              <div className='mt-20' >
                <h2 className='text-lg font-semibold text-gray-900' >Sign in to your account</h2>
                <p onClick={() => goTo("/register")} className='mt-2 text-sm text-gray-700'>Don’t have an account? <button className='font-medium text-blue-600 hover:underline'>Sign up</button> for a free trial.</p>
              </div>
            </div>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={LoginSchema}
              onSubmit={
                values => {
                  loginUser(values.email,values.password).then((res)=>console.log(res)).catch(err=>console.log(err))
                }
              }
            >
              {({ errors, touched }) => (
                <Form className='mt-10 grid grid-cols-1 gap-y-8'>
                  <div className='col-span-full'>

                  </div>
                  <div className='col-span-full'>
                    <div className='mb-3 block text-sm font-medium text-gray-700' >Email Address</div>
                    <Field className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" name="email" type="email" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                  </div>
                  <div className='col-span-full'>
                    <div className='mb-3 block text-sm font-medium text-gray-700'>Password</div>
                    <Field className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" name="password" type="password" />
                  </div>
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                  <button className='group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full' type='submit' >Sign in →</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className='hidden sm:contents lg:relative lg:block lg:flex-1'>
          <img src="/sidepic.jpg" width="1664" height="1866" decoding="async" data-nimg="future" className="absolute inset-0 h-full w-full object-cover" loading="lazy" alt='bluish-gradient' />
        </div>
      </div>
    </div>

  )
}
