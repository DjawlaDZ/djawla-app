export default function App({ Component, pageProps }) {
  const createUser = async () => {
    try {
      const createdUser = await fetch('/api/Lieux', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: '6471f1dec10e2c46b5d1220b',
        }),
      });
      console.log(createdUser);
    } catch (error) {
      console.log(error);
    }
  };

  const GetLIEUX = async () => {
    try {
      const createdUser = await fetch('/api/Lieux', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button onClick={GetLIEUX}>get Liste Lieu</button>
        <button onClick={createUser}>Creer lieu</button>
      </div>
    </>
  );
}


