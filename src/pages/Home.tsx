import { Link } from 'react-router-dom'

export default function Home() {
  const pages = Object.keys(import.meta.glob('./*.tsx'))
    .filter((path) => !path.includes('Home.tsx'))
    .map((path) => path.replace('./', '').replace('.tsx', ''))
    .sort()

  return (
    <div>
      <h1>Puyo Puyo Programming</h1>
      <p>Welcome to Puyo Puyo Programming!</p>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Link to={`/${page.toLowerCase()}`}>{page}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
