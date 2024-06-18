 fetch("http://localhost:3000/user", {
      method: 'POST',
      header: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(useData)
    });
    if (!Response.ok) {
      throw new Error('Signup failed');
    }