import React, { useState, useEffect } from "react";
import popupImage from "../assets/img/a1.png"; // Replace with appropriate image

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const[text,settext] = useState("")

  // useEffect(() => {
  //   // Check if the user has already seen the popup
  //   const hasSeenPopup = localStorage.getItem("hasSeenNewsletterPopup");
    
  //   if (!hasSeenPopup) {
  //     // Show popup after 2 seconds of landing
  //     const timer = setTimeout(() => {
  //       setIsOpen(true);
  //     }, 2000);
      
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

const submit = async()=>{
  // const show = JSON.parse(localStorage.getItem("show"));
 
  if(text.trim()===""){
    alert("fill the required field")
    return
  }
    try{
      console.log(text)
     let res =  await fetch("https://back-bulding-code.onrender.com/subscribe",{
        method:'post',
        headers:{ "Content-Type": "application/json"},
        body:JSON.stringify({text})
      })
if (res.status === 201) {
  alert("successfully submitted");
localStorage.setItem("show",JSON.stringify(false))
window.location.reload();
}
     }catch(err){
console.log(err)
    }
  }

  useEffect(() => {
    const show = JSON.parse(localStorage.getItem("show"));
    let timer;
    if(show===false){
     return ;
    }

   timer = setTimeout(() => {
    setIsOpen(true);
  }, 1000);

  return () => clearTimeout(timer);
}, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenNewsletterPopup", "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Newsletter form submitted");
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden animate-fadeIn">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto hidden md:block relative">
          <img 
            src={popupImage} 
            alt="Newsletter" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div style={{color:'black'}} className="w-full md:w-1/2 bg-white text-white p-8 md:p-12 flex flex-col justify-center">
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-zinc-600 hover:text-black transition-colors z-10 p-2"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center leading-tight uppercase">
            Subscribe To Our<br/>Newsletter
          </h2> 

          <div className="space-y-3 mb-8 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <p>Receive personalised communication and promotions.</p>
            </div> 
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <p>Discover new products and promotions</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <p>Receive update on our sustainability mission</p>
            </div>
          </div>

          <form  className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Email address" 
              required
              className="w-full px-4 py-3 text-black focus:outline-none placeholder-gray-500"
              value={text}
              onChange={(e)=>settext(e.target.value)}
            />
            
            <label className="flex items-start gap-3 text-xs md:text-sm cursor-pointer mt-2">
              <input type="checkbox" required className="mt-1 flex-shrink-0 w-4 h-4 accent-black" />
              <span className="opacity-90 leading-tight">
                You consent to the processing of your personal data for marketing and profiling purposes, as described in our <a href="/privacy" className="underline hover:text-black">Privacy Policy</a>
              </span>
            </label>
        
       
          </form>
           <div style={{textAlign:'center',width:'100%'}} className="mt-6">
        <button  onClick={submit}     
         type="submit"

           className="inline-flex items-center gap-3 text-[16px] uppercase tracking-[0.22em] text-black border-b border-black pb-1 hover:gap-4 transition-all duration-300"
        >
          Subscribe
          <span>+</span>
        </button>
      </div>
        </div>

      </div>
    </div>
  );
}
