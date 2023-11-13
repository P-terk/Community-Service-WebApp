import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";


import 'bootstrap/dist/css/bootstrap.min.css';
import BasicAccordion from "./accordion";
import PagesList from "./pageMovement";



export default function App() {
  return (
    <html>
      <head>
        <Links />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>
      </head>
      <body>
      <div class="p-3 mb-2 bg-primary text-white">
         <h1>CGPS COMMUNITY SERVICE </h1>
      </div>
       
        <Outlet />
        <Scripts />
        <LiveReload />

         <PagesList/>

         <div class="p-3 mb-2 bg-primary text-white"></div>
     

        <BasicAccordion />
        
       

      </body>
    </html>
  );}