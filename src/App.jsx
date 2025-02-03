import './assets/style/main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { store } from './store/store.js'

export function App() {


  return (
    <Provider store={store}>
      <Router>
        <section className='app'>
          <main className='main-layout'>
            <Routes>
              <Route element={<ToyIndex />} path="/toy" />

            </Routes>

          </main>

        </section>
      </Router>


    </Provider>
  )
}

export default App
