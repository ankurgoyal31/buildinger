import React from "react";

import imgMain from "../assets/img/blogdetail1.png";
import imgA from "../assets/img/blogdetail2.png";
import imgB from "../assets/img/blogdetail2.png";
import imgC from "../assets/img/blogdetail2.png";
import imgD from "../assets/img/blogdetail3.png";
import imgE from "../assets/img/blogdetail4.png";
import Header from "../Header";
import Footer from "../Footer";
import AutoReveal from "./AutoReveal";
import InstagramSection from "./InstagramSection";
import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
export default function BlogDeatil() {
const [blogDetails, setBlogDetails] = useState(null);
    const {id} = useParams();
    console.log("Blog ID from URL:", id);
    useEffect(() => {
        try {
            fetch(`https://back-bulding-code.onrender.com/blogs/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log("Fetched blog details:", data);
                    setBlogDetails(data);
                })
                .catch((err) => console.log("Error fetching blog details:", err));
        } catch (error) {
            console.error("Error in useEffect:", error);
        }
    }, [id]);

  return (
    <>
    <Header/>
      <div style={{marginTop:'120px'}} className="w-full px-6 pt-30">
        <div className="grid items-center max-w-full grid-cols-1 gap-10 mx-auto md:grid-cols-2">
          <div className="px-4 text-left">
            <h2 className="text-5xl font-light leading-relaxed tracking-wide">
              {blogDetails?.title || "Woods recommended for double-doors"}
              <br/>
            </h2>
            {/* <br></br> */}
          {/* show date */}
          <div>
  {/* <h2>content</h2> */}
  <p className="max-w-2xl " style={{ letterSpacing: "1px" }}>
    {blogDetails?.content || "Content for the blog post."}
   </p>
</div>
          {/* <h3>Date</h3> */}
            <p style={{ letterSpacing: "4px",marginTop:'20px' }} className="text-sm text-gray-500">
              {new Date(blogDetails?.createdAt).toLocaleDateString()|| "Date for the blog post."}
            </p>
           </div>

          <div>
            <img src={blogDetails?.main_blog_image || imgMain} className="object-cover w-full" alt="" />
          </div>
        </div>

 
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h2 className="mb-4 text-3xl font-light">
            Why is real estate booming in India?
          </h2> 

          <p
            className="mb-3 text-lg font-medium"
            style={{ letterSpacing: "1px" }}
          >
            The Evolution of Real Estate Marketing
          </p>

          <p className="text-sm leading-relaxed text-gray-600">
            The landscape of real estate marketing in India has undergone
            significant transformation over the last decade. Increasing
            urbanization, rising disposable incomes, and the desire for premium
            lifestyle amenities have shifted consumer expectations. Today,
            homebuyers seek more than properties—they seek experiences.
          </p>
        </div>

<div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto mt-16 md:grid-cols-3"> 
        {blogDetails?.images.length>0 && blogDetails.images.map((image, index) => (
             <img src={image} className="w-full" alt="" />
         ))} 
</div>
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <p className="mb-3 text-lg font-medium uppercase">
            Experience Over Exposure  
          </p>

          <p className="text-sm leading-relaxed text-gray-600">
            Modern real estate marketing goes beyond brochures and billboards.
            People today connect more deeply with visual storytelling,
            thoughtful architecture, and experiences that reflect their
            aspirations. Developers now focus on building trust, offering
            clarity, and creating meaningful buyer journeys.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h2 className="text-4xl font-light leading-relaxed">
            Every structure we build tells a story — of people, purpose, and a
            city that inspires.
          </h2>
        </div>

<div className="mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 mt-16">
          <img src={blogDetails?.project_detail_image_1|| imgMain} className="object-cover w-full h-full" alt="" />
          <img src={blogDetails?.project_detail_image_2|| imgE} className="object-cover w-full h-full" alt=""/>
         </div>

        <div className="max-w-2xl mx-auto mt-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase">
            The Future — Purpose Driven Marketing
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            As homebuyers evolve, so do their expectations. Real estate brands
            that prioritize transparency, innovation, and emotional connection
            will lead the future. The market is shifting towards
            community-driven development that resonates with lifestyles of
            tomorrow.
          </p>
        </div>
      </div>
      <AutoReveal>
        <InstagramSection />
      </AutoReveal>
      <Footer />
    </>
  );
}
