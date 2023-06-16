import  { Component, useState }from 'react'
import NextLink from 'next/link'
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';



export default function Login () {
   
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
  }

 return (
<div >
<section className="flex justify-center items-center h-screen bg-gray-100" >
<div className=" w-auto w-200 h-70 lg:h-50   flex justify-center items-center items-center bg-white  box-border p-4 shadow-custom rounded-[10px]">
<div className="justify-center items-center " >
   <p className=" text-center mt-8 text-[#1F2A3E] font-bold text-2xl "> Connexion </p> 
   <form  onSubmit={handleSubmit} className="w-96 p-6 animate-slide-up">
   <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Adresse e-mail' required 
   className="block w-full px-4 py-2 my-4 border  rounded-[15px] outline-none" 
    
   />
   <input  value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Mot de passe" required
   className="block w-full px-4 py-2 my-4 border  rounded-[15px] outline-none"
   
   />
   <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
    <button type="submit" className="text-base font-normal px-2 py-1 m-0 mr-5 border border-[#FFAA8B] rounded-full cursor-pointer
     flex justify-center items-center transition duration-300 ease-in-out w-[50%] text-[#1F2A3E] bg-[#FFAA8B]" >Se connecter</button>
    </div>
   <p className="text-center my-4 text-[#1F2A3E]">-- ou --</p>
   </form>
   <div >
   <div className="flex justify-center items-center mt-2 rounded-[15px]" >
    <GoogleOAuthProvider clientId='119668984512-qnv8idd72u3gb3jjhlsspk6f3cnf8dtc.apps.googleusercontent.com'>
        <GoogleLogin
            onSuccess={credentialResponse => {
               console.log(credentialResponse);  
               var user = jwt_decode(credentialResponse.credential);
               console.log(user);    
               var email = user.email;
               var name = user.name;
               var picture = user.picture; 
                console.log(email);  
                 console.log(name);  
            }}
            onError={() => {
               console.log('Login Failed');
            }}
/>
</GoogleOAuthProvider>
</div>
</div>
<span className="flex justify-center items-center mt-4" >
  <p className="text-center text-[#1F2A3E] text-sm"> Pas de compte ? </p>
    <NextLink className="text-[#FFAA8B] self-end transition-all duration-500 text-sm hover:text-black" href='/register'> S'inscrire</NextLink>
</span>

</div>
</div>
</section></div>
)
}

