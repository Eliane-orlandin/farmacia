import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import ListaProdutos from "./components/produto/listaprodutos/ListaProdutos"
import FormProduto from "./components/produto/formproduto/FormProduto"
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	return (
		<>
			<ToastContainer />
			<BrowserRouter>
				<Navbar />
				<div className="min-h-[80vh]">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/categoria" element={<ListaCategorias />} />
						<Route path="/cadastrarcategoria" element={<FormCategoria />} />
						<Route path="/editarcategoria/:id" element={<FormCategoria />} />
						<Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />	
						<Route path="/produtos" element={<ListaProdutos />} />
                        <Route path="/cadastrarproduto" element={<FormProduto />} />
                        <Route path="/editarproduto/:id" element={<FormProduto />} />
                        <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App