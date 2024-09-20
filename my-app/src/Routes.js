import JerseysPage from './Componets/JerseysPage';
// import About from "./components/About";
import App from "./App";
// import List from "./components/List";
// import ContactUs from "./components/ContactUs";
// import Form from "./components/Form";



const routes = [
   {
    path: '/',
    element: <App/>,
    errorElement: <h1> An Error coccured</h1>
   }
   
   ,{
        path: "/jerseyspage",
        element: <JerseysPage/>
     }
    // {
    //     path: "/list",
    //     element: <List/>
    //   },{
    //     path: "/contact",
    //     element: <ContactUs/>
    //   },{
    //     path: "/form/:id",
    //     element: <Form/>
    //   }
    ]

export default routes