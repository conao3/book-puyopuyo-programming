import { Link } from 'react-router-dom';

export default function Home() {
  const pages = Object.keys(import.meta.glob('./*/page.tsx'))
    .map((path) => path.replace('./', '').replace('/page.tsx', ''))
    .sort();

  return (
    <div>
      <h1>Puyo Puyo Programming</h1>
      <p>Welcome to Puyo Puyo Programming!</p>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Link to={`/${page}`}>{page}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
