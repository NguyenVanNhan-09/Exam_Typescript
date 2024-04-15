import { User } from '@/interfaces/User'
import instance from '@/services'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

const userSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required().min(6)
})
const Login = () => {
  const navi = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({ resolver: joiResolver(userSchema) })
  const onSubmit = (user: User) => {
    ;(async () => {
      const { data } = await instance.post('/login', user)
      if (data.user) {
        // localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('accessToken', data.accessToken)
        const isConfirm = confirm('login successfully, go to login now ?')
        if (isConfirm) {
          navi('/')
        }
      }
    })()
  }
  return (
    <div>
      <section className='bg-gray-50 dark:bg-gray-900 w-full'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <a href='#' className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
            <img
              className='w-8 h-8 mr-2'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
              alt='logo'
            />
            Login
          </a>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black'>
                Create an account
              </h1>
              <form className='space-y-4 md:space-y-6' action='#' onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                    Your email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    {...register('email', { required: true })}
                  />
                  {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
                </div>
                <div>
                  <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    {...register('password', { required: true })}
                  />
                  {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                </div>

                <button
                  type='submit'
                  className='w-full bg-slate-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Create an account
                </button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Already have an account?{' '}
                  <Link to={'/register'} className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                    register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
