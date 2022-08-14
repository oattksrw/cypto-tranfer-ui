import React from 'react';
import { useRoutes } from 'react-router-dom'
import { defaultRouters } from './router'
import Layout from './components/layouts/Layout';
import 'antd/dist/antd.css'
import './App.css';

function App() {
  return <Layout>
    <PageRender />
  </Layout>
}

const PageRender = () => {
  const routers = defaultRouters
  const ROUTER_SCOPE = useRoutes(routers)
  
  return ROUTER_SCOPE
}

export default App;
