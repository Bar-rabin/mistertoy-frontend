import './assets/style/main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { store } from './store/store.js'
import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { ToyDashboard } from './pages/ToyDashboard.jsx'



export function App() {


  return (
    <Provider store={store}>
      <Router>
        <section className='app'>
          <AppHeader />
          <main className='main-layout'>
            <Routes>
              <Route element={<ToyIndex />} path="/toy" />
              <Route element={<ToyDetails />} path="/toy/:toyId" />
              <Route element={<ToyEdit />} path="/toy/edit/:toyId?" />
              <Route element={<ToyDashboard />} path="/toy/dashboard" />


            </Routes>

          </main>
          <AppFooter />
        </section>
      </Router>


    </Provider>
  )
}

export default App
