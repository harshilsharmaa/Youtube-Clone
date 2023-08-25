import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResults from './components/SearchResults';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <><Head /><Body /></>,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "/watch",
      element: <WatchPage />
    },
    {
      path: "/results",
      element: <SearchResults />
    }
  ]
}])

function App() {

  return (
    // <div className='bg-[#0f0f0f]'>
    <Provider store={store}>
      <div>
      
      <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
