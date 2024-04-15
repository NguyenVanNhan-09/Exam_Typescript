# table admin

```
    <div className='text-gray-900 bg-gray-200 '>
        <div className='p-4 flex'>
          <h1 className='text-3xl'>Admin</h1>
        </div>
        <a
          href="#"
          type='button'
          className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        >
          Add Product
        </a>
        <div className='px-3 py-4 flex justify-center'>
          <table className='w-full text-md bg-white shadow-md rounded mb-4'>
            <thead>
              <tr className='border-b'>
                <th className='text-left p-3 px-5'>Name</th>
                <th className='text-left p-3 px-5'>description</th>
                <th className='text-left p-3 px-5'>price</th>
                <th className='text-left p-3 px-5'>images</th>
                <th className='flex justify-center p-3 px-5'>Action</th>
              </tr>
            </thead>
            <tbody>

                 <tr className='border-b hover:bg-orange-100 bg-gray-100'>
                  <td className='p-3 px-5'>xxx</td>
                  <td className='p-3 px-5'>xxx</td>
                  <td className='p-3 px-5'>xxx</td>
                  <td className='p-3 px-5 flex justify-end'>
                    <a href='#'>
                      <button
                        type='button'
                        className='mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline'
                      >
                        Edit
                      </button>
                    </a>
                    <button
                      type='button'
                      className='text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline'
                    >
                      Delete
                    </button>
                  </td>
                </tr>

            </tbody>
          </table>
        </div>
      </div>
```

# register/login

```
      <section className='bg-gray-50 dark:bg-gray-900 w-full'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <a href='#' className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
            <img
              className='w-8 h-8 mr-2'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
              alt='logo'
            />
            Register
          </a>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black'>
                Create an account
              </h1>
              <form className='space-y-4 md:space-y-6' action='#'>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
                    Your email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                  />
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
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-slate-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Create an account
                </button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Already have an account?{' '}
                  <a href='' className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
```

# add/update product

```
    <h1 className='text-center'>Add product</h1>
    <form className='max-w-sm mx-auto'>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>title</label>
          <input
            type='text'
            id='email'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='name@flowbite.com'
          />
        </div>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>price</label>
          <input
            type='number'
            id='password'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            required
          />
        </div>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>description</label>
          <input
            type='text'
            id='repeat-password'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            required
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Add
        </button>
      </form>
```

# list product

```
<section className='py-10 bg-gray-100'>
      <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

          <div
            key={item.id}
            className='rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 '
          >
            <a href="#">
              <div className='flex items-end overflow-hidden rounded-xl w-[226px] h-[127px]'>
                <div
                  className='bg-contain bg-center bg-no-repeat'
                  style={{
                    backgroundImage: `url(.....)`,
                    width: '100%', // Đảm bảo div lấp đầy khu vực cha
                    height: '100%' // Đảm bảo div lấp đầy khu vực cha
                  }}
                ></div>
              </div>

              <div className='mt-1 p-2 flex flex-col justify-between'>
                <h4 className='text-slate-700 overflow-hidden whitespace-nowrap text-ellipsis min-h-10'>
                  xxxx
                </h4>
                <div className='mt-3 flex items-end'>
                  <p className='text-lg font-bold text-blue-500'>
                    xxxx <span>$</span>
                  </p>
                </div>
                <p className='mt-1 text-sm text-slate-400 overflow-hidden line-clamp-3 min-h-24'>xxxx</p>
              </div>
              <button
                type='button'
                className='justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                <svg
                  className='w-3.5 h-3.5 me-2'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 18 21'
                >
                  <path d='M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z' />
                </svg>
                Add to cart
              </button>
            </a>
          </div>
      </div>
    </section>
```

# detail product

```
<section className='text-gray-700 body-font overflow-hidden bg-white'>
      <div className='container flex justify-center px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex'>
          <div className=' w-[488px] h-[466px]'>
            <div
              className='bg-contain bg-center bg-no-repeat'
              style={{
                backgroundImage: `url(xxx)`,
                width: '100%', // Đảm bảo div lấp đầy khu vực cha
                height: '100%' // Đảm bảo div lấp đầy khu vực cha
              }}
            ></div>
          </div>
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h2 className='text-sm title-font text-gray-500 tracking-widest'>BRAND NAME</h2>
            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>xxx</h1>
            <div className='flex mb-4'>
              <span className='flex items-center'>
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-4 h-4 text-red-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                </svg>
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-4 h-4 text-red-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                </svg>
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-4 h-4 text-red-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                </svg>
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-4 h-4 text-red-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                </svg>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-4 h-4 text-red-500'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                </svg>
                <span className='text-gray-600 ml-3'>4 Reviews</span>
              </span>
              <span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-200'>
                <a className='text-gray-500'>
                  <svg
                    fill='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                  </svg>
                </a>
                <a className='ml-2 text-gray-500'>
                  <svg
                    fill='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                  </svg>
                </a>
                <a className='ml-2 text-gray-500'>
                  <svg
                    fill='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className='leading-relaxed'>xxx</p>
            <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'>
              <div className='flex'>
                <span className='mr-3'>Color</span>
                <button className='border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none'></button>
                <button className='border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
                <button className='border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none'></button>
              </div>
              <div className='flex ml-6 items-center'>
                <span className='mr-3'>Size</span>
                <div className='relative'>
                  <select className='rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10'>
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-4 h-4'
                      viewBox='0 0 24 24'
                    >
                      <path d='M6 9l6 6 6-6'></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className='flex'>
              <span className='title-font font-medium text-2xl text-gray-900'>
                xxx <span>$</span>
              </span>
              <button className='flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'>
                Buy
              </button>
              <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
                <svg
                  fill='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
```
