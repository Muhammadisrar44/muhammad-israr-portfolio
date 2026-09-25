import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <span className="not-found-code">404</span>

        <h1>Page not found</h1>

        <p>
          The page you are looking for may have been moved, removed,
          or is no longer available.
        </p>

        <Link to="/" className="not-found-button">
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound