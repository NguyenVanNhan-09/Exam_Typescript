import { Product } from '@/interfaces/Products'
import instance from '@/services'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

type Props = {
  onEdit: (product: Product) => void
}

const productSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().allow(null, '')
})

const UpdateProduct = ({ onEdit }: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    })()
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Product>({ resolver: joiResolver(productSchema) })
  const onSubmit = (data: Product) => {
    onEdit({ ...data, id })
  }
  return (
    <div>
      <form className='max-w-sm mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>title</label>
          <input
            type='text'
            id='email'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='name@flowbite.com'
            {...register('title', { required: true, minLength: 6 })}
            defaultValue={product?.title}
          />
          {errors.title && <span className='text-red-600'>{errors.title.message}</span>}
        </div>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>price</label>
          <input
            type='number'
            id='password'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            {...register('price', { required: true, min: 0 })}
            defaultValue={product?.price}
          />
          {errors.price && <span className='text-red-600'>{errors.price.message}</span>}
        </div>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>description</label>
          <input
            type='text'
            id='repeat-password'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            {...register('description')}
            defaultValue={product?.description}
          />
          {errors.description && <span className='text-red-600'>{errors.description.message}</span>}
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default UpdateProduct
