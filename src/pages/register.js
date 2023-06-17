import { useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router';



export default function Register() {

  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [wilaya, setWilaya] = useState('Alger');
  const [data, setData] = useState();
  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    fetch('/api/users/', {
      'method': 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, mdp, nom, prenom, wilaya })
    }).then(resp => resp.json()).then(rep => setData(rep.data));
    router.push(`/home?token=${data.token}`);
  }

  return (
    <div >
      <section className="flex justify-center items-center h-screen bg-gray-100" >
        <div className=" w-auto w-200 h-70 lg:h-50   flex justify-center items-center bg-white  box-border p-4 shadow-custom rounded-[10px]">
          <div className="justify-center items-center " >
            <p className=" text-center mt-8 text-[#1F2A3E] font-bold text-2xl "> Inscription </p>
            <form onSubmit={handleSubmit} className="w-96 p-6 animate-slide-up">
              <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" placeholder='Nom' required
                className="block w-full px-4 py-2 my-4 border-1.5 border-gray  rounded-[15px] outline-none"

              />
              <input value={prenom} onChange={(e) => setPrenom(e.target.value)} type="text" placeholder='Prenom' required
                className="block w-full px-4 py-2 my-4 border-1.5 border-gray  rounded-[15px] outline-none"

              />
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Adresse e-mail' required
                className="block w-full px-4 py-2 my-4 border-1.5 border-gray  rounded-[15px] outline-none"

              />
              <input value={mdp} onChange={(e) => setMdp(e.target.value)} type="password" placeholder="Mot de passe" required
                className="block w-full px-4 py-2 my-4 border-1.5 border-gray rounded-[15px] outline-none"
              />
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <button type="submit" className="text-base font-normal px-2 py-1 m-0 mr-5 border border-[#FFAA8B] rounded-full cursor-pointer
     flex justify-center items-center transition duration-300 ease-in-out w-[50%] text-[#1F2A3E] bg-[#FFAA8B]" >S'inscrire</button>
              </div>
            </form>
            <span className="flex justify-center items-center mt-4" >
              <p className="text-center text-[#1F2A3E] text-sm"> Avez-vous n'avez un compte ? </p>
              <NextLink className="text-[#FFAA8B] self-end transition-all duration-500 text-sm hover:text-black" href='/login'> Se connecter</NextLink>
            </span>



          </div>
        </div>
      </section></div>
  )
}


