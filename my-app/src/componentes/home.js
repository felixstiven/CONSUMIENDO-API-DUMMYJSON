import React from 'react';  
import Navbar from './navbar.js';

const Dashboard = () => {  
  return (  
    <div className="container mt-5">  
       <Navbar/>
      <h1>Bienvenido al Panel de Gestión de Órdenes</h1>  
      <div className="row">  
        <div className="col-md-4">  
          <div className="card mb-4">  
            <div className="card-header">  
              <h5>Órdenes Pendientes</h5>  
            </div>  
            <div className="card-body">  
              <p>Total: 10</p>  
              <button className="btn btn-primary">Ver Órdenes</button>  
            </div>  
          </div>  
        </div>  
        <div className="col-md-4">  
          <div className="card mb-4">  
            <div className="card-header">  
              <h5>Órdenes Completadas</h5>  
            </div>  
            <div className="card-body">  
              <p>Total: 25</p>  
              <button className="btn btn-success">Ver Órdenes</button>  
            </div>  
          </div>  
        </div>  
        <div className="col-md-4">  
          <div className="card mb-4">  
            <div className="card-header">  
              <h5>Órdenes Canceladas</h5>  
            </div>  
            <div className="card-body">  
              <p>Total: 5</p>  
              <button className="btn btn-danger">Ver Órdenes</button>  
            </div>  
          </div>  
        </div>  
      </div>  
      <div className="row">  
        <div className="col-md-12">  
          <div className="card">  
            <div className="card-header">  
              <h5>Últimas Órdenes</h5>  
            </div>  
            <div className="card-body">  
              {/* Aquí puedes agregar una tabla o lista de órdenes */}  
              <ul>  
                <li>Orden #001 - En Proceso</li>  
                <li>Orden #002 - Completada</li>  
                <li>Orden #003 - Cancelada</li>  
                {/* Más órdenes... */}  
              </ul>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Dashboard;



