import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
export default function Main() {
  return (
    <main id="main" className="py-5">
      <div className="container text-center">
        <h1 className="display-5 fw-bold mb-3">Diseño Responsivo con React + TypeScript</h1>
        <p className="lead text-muted mx-auto main-intro">
          Esta aplicación demuestra un diseño adaptable en móvil, tableta y escritorio utilizando
          utilidades responsivas de Bootstrap y media queries personalizadas.
        </p>
      </div>
    </main>
  );
}
