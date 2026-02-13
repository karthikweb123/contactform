(async () => {
  try {
    const root = await fetch('http://localhost:5000/');
    console.log('GET / status:', root.status);
    console.log('GET / body:', await root.text());

    const res = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname: 'ScriptTest', lastname: 'User' }),
    });
    const text = await res.text();
    console.log('POST /api/users status:', res.status);
    console.log('POST /api/users body:', text);
  } catch (err) {
    console.error('Request error:', err.message || err);
    process.exit(1);
  }
})();
