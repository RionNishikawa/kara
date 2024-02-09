import ReactDOM, { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Karaoke from "./Karaoke"
import Hiragana from './Hiragana'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Karaoke />
    ),
  },
  {
    path: "/hiragana",
    element: <Hiragana />,
  },
])

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
)