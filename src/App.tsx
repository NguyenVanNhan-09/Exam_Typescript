import { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Product } from './interfaces/Products'
import AddProduct from './pages/AddProduct'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UpdateProduct from './pages/UpdateProduct'
import instance from './services'

function App() {
  const navi = useNavigate()
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get('/products')
      setProducts(data)
    })()
  }, [])
  const handleDelete = (id: number) => {
    ;(async () => {
      const isConfrim = confirm('bạn có chắc xóa không')
      if (isConfrim) {
        await instance.delete(`/products/${id}`)
        setProducts(products.filter((item) => item.id !== id && item))
      }
    })()
  }
  const handleCreate = (product: Product) => {
    ;(async () => {
      const { data } = await instance.post('/products', product)
      setProducts([...products, data])
      navi('/')
    })()
  }
  const handleUpdate = (product: Product) => {
    ;(async () => {
      const { data } = await instance.put(`/products/${product.id}`, product)
      setProducts(products.map((i) => (i.id === data.id ? data : i)))
      navi('/')
    })()
  }

  return (
    <>
      <header>
        <div className='flex flex-1 items-center justify-end md:justify-between'>
          <nav aria-label='Global' className='hidden md:block'>
            <ul className='flex items-center gap-6 text-sm'>
              <li>
                <Link to={'/'} className='text-gray-500 transition hover:text-gray-500/75'>
                  home
                </Link>
              </li>

              <li>
                <Link to={'/login'} className='text-gray-500 transition hover:text-gray-500/75'>
                  login
                </Link>
              </li>

              <li>
                <Link to={'/register'} className='text-gray-500 transition hover:text-gray-500/75'>
                  register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route index element={<Home onDel={handleDelete} product={products} />} />
        <Route path='/add' element={<AddProduct onAdd={handleCreate} />} />
        <Route path='/edit/:id' element={<UpdateProduct onEdit={handleUpdate} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
