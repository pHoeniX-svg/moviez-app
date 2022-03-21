import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { GlobalStyle } from './globals';
import { Home, Missing } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="movies">
            {/* <Route path=":movieId" element={<Movie />} /> */}
          </Route>

          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
