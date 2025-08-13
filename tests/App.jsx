import { Routes, Route, Link } from '#self/router'

// Test app for Smaragdi
const App = () => {
  return (
    <>
      <Link to='/'>Say Hello</Link>
      <br />
      <Link to='/about'>Say Hi</Link>
      <p>
        <Routes>
          <Route path='/'>Hello</Route>
          <Route path='/about'>Hi</Route>
        </Routes>
      </p>
    </>
  )
}

export default App