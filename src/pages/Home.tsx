import { Product } from '@/interfaces/Products'
import { Link } from 'react-router-dom'

type Props = {
  product: Product[]
  onDel: (id: number) => void
}

const Home = ({ product, onDel }: Props) => {
  return (
    <div>
      <div className='text-gray-900 bg-gray-200 '>
        <div className='p-4 flex'>
          <h1 className='text-3xl'>Admin</h1>
        </div>
        <Link
          to={'/add'}
          type='button'
          className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        >
          Add Product
        </Link>
        <div className='px-3 py-4 flex justify-center'>
          <table className='w-full text-md bg-white shadow-md rounded mb-4'>
            <thead>
              <tr className='border-b'>
                <th className='text-left p-3 px-5'>Name</th>
                <th className='text-left p-3 px-5'>price</th>
                <th className='text-left p-3 px-5'>description</th>
                <th className='flex justify-center p-3 px-5'>Action</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item) => (
                <tr className='border-b hover:bg-orange-100 bg-gray-100'>
                  <td className='p-3 px-5'>{item.title}</td>
                  <td className='p-3 px-5'>{item.price}</td>
                  <td className='p-3 px-5'>{item.description}</td>
                  <td className='p-3 px-5 flex justify-end'>
                    <Link to={`/edit/${item.id}`}>
                      <button
                        type='button'
                        className='mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline'
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => onDel(Number(item.id))}
                      type='button'
                      className='text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
