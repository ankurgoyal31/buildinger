import React, { useState, useEffect } from "react";
import popupImage from "../assets/img/a1.png";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, settext] = useState("");
  const [data,setdata] =useState([])

  useEffect(() => {
    try {
        fetch("https://back-bulding-code-ofzs.onrender.com/popup").then((res) => res.json()).then((data) => {
            setdata(data);
          })
          .catch((err) => console.log("Error fetching media data:", err));
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    }, []);

  const submit = async () => {
    if (text.trim() === "") {
      alert("Fill the required field");
      return;
    }

    try {
      let res = await fetch(
        "https://back-bulding-code-ofzs.onrender.com/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        }
      );

      if (res.status === 201) {
        alert("Successfully submitted");
        localStorage.setItem("show", JSON.stringify(false));
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const show = JSON.parse(localStorage.getItem("show"));
    let timer;

    if (show === false) {
      return;
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl h-[650px] overflow-hidden rounded-lg shadow-2xl animate-fadeIn max-lg:h-auto">


{
  data.length<=0 ?
  <>
<div className="relative w-full max-w-4xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden animate-fadeIn">

  {/* Left Side */}
  <div className="w-full md:w-1/2 h-64 md:h-auto hidden md:block relative">
    <img
      src={popupImage}
      alt="Newsletter"
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>

  {/* Right Side */}
  <div
    style={{ color: "black" }}
    className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center relative"
  >
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
            <input  style={{border:'solid #0000004d 1px'}}
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

    {/* Tera pura form */}

  </div>

</div></div>

</>
:<>

 <div className="flex flex-col lg:flex-row w-full h-full">

  {/* Left Side */}
  <div className="absolute inset-0 w-full h-full">

    <img
      src={data[0]?.image||popupImage}
      alt="Newsletter"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/40"></div>

<div className="absolute bottom-10 left-8 right-8 text-white max-lg:hidden">
  <div style={{color:'green',fontWeight:'bold',fontFamily:'-moz-initial',width:'45px',textAlign:'center'}}>NEW</div>
      <span className="uppercase tracking-[4px] text-sm">
        Premium {data[0]?.type || "Residential"} Projects
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold mt-3 leading-tight">
        {data[0]?.title||
        "Building The Future"}
      </h2>

      <p className="mt-4 text-sm lg:text-base leading-7 text-gray-200">
     {data[0]?.type || "Residential"}
      </p>

       <p className="mt-4 text-sm lg:text-base leading-7 text-gray-200">
     {data[0]?.location || "Jaipur"}
      </p>

    </div>

  </div>

  {/* Right Side */}
  <div
    style={{ color: "white" }}
className="absolute right-8 top-1/2 -translate-y-1/2 w-[500px] bg-rgb(0 0 0 / 57%) rounded-lg shadow-2xl p-8 md:p-10 z-20
max-lg:relative max-lg:top-auto max-lg:right-auto max-lg:translate-y-0
max-lg:w-[90%] max-lg:mx-auto max-lg:my-6">
    {/* Yaha se tera pura existing form paste karna hai */}

    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center uppercase leading-tight">
      Subscribe To Our
      <br />
      Newsletter
    </h2>

    <div className="space-y-4 mb-8 text-sm md:text-base">
      <div className="flex items-start gap-3">
        <svg
          className="w-5 h-5 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>

        <p>Receive personalised communication and promotions.</p>
      </div>

      <div className="flex items-start gap-3">
        <svg
          className="w-5 h-5 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>

        <p>Discover new products and promotions.</p>
      </div>

      <div className="flex items-start gap-3">
        <svg
          className="w-5 h-5 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>

        <p>Receive updates on our sustainability mission.</p>
      </div>
    </div>

    <form className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email address"
        value={text}
        onChange={(e) => settext(e.target.value)}
        className="w-full px-4 py-3 border border-gray-400 text-black bg-white focus:outline-none"
      />

      <label className="flex items-start gap-3 text-xs md:text-sm">
        <input
          type="checkbox"
          required
          className="mt-1 w-4 h-4 accent-black"
        />

        <span>
          You consent to the processing of your personal data for marketing and
          profiling purposes.
        </span>
      </label>
    </form>

    <div className="text-center mt-8">
      <button style={{color:'white'}}
        onClick={submit}
        type="button"
        className="inline-flex items-center gap-3 text-[16px] uppercase tracking-[0.22em] text-black border-b border-black pb-1 hover:gap-5 transition-all"
      >
        Subscribe
        <span>+</span>
      </button>
    </div>
    </div>

</div>
    </>}



  </div>

</div>
  );
}
