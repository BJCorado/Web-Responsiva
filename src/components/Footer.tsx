export default function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-2">Síguenos en redes sociales</p>
        <div className="d-flex gap-3 justify-content-center">
          <a className="text-white text-decoration-none" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a className="text-white text-decoration-none" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a className="text-white text-decoration-none" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <small className="d-block mt-3 text-white-50">
          © {new Date().getFullYear()} Web Responsiva
        </small>
      </div>
    </footer>
  );
}
