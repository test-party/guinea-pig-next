'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
//http://localhost:3000/login
export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      router.push('/all-tests');
    } else {
      setError('Invalid credentials.');
    }
  };



  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
      <form
        onSubmit={handleLogin}
        style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
        />

        {error && <p style={{ color: 'red', fontSize: '0.875rem', marginBottom: '1rem' }}>{error}</p>}

        <button
          type="submit"
          style={{ width: '100%', padding: '0.75rem', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold' }}
        >
          Log In
        </button>
      </form>
    </div>
  );
}
