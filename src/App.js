import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import DefaultLayout from './layouts/default/Default';
function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;
          if(route.layout !== null) {
            Layout = route.layout;
          }
          return (
            <Route
                key={index}
                path={route.path}
                element={
                    <Layout>
                        <Page />
                    </Layout>
                }
            />
        );
        })}
      </Routes>
    </Router>
  );
}

export default App;
