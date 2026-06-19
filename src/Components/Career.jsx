import React, { useState ,useEffect} from "react";
import Header from "../Header";
import Footer from "../Footer";
import AutoReveal from "./AutoReveal";
import InstagramSection from "./InstagramSection";

const heroImage =
  "https://images.pexels.com/photos/13812421/pexels-photo-13812421.jpeg";

const jobsData = [
  {
    title: "Sales Executive",
    department: "Sales",
    experience: "1 to 3 years",
   content:
      "Drive lead conversion, client engagement, and site visit coordination for residential projects.",
  },
  {
    title: "Channel Sales Manager",
    department: "Sales",
    experience: "4 to 7 years",
   content:
      "Manage channel partner networks, relationships, and partner-driven business development.",
  },
  {
    title: "CRM Executive",
    department: "Customer Relations",
    experience: "1 to 3 years",
   content:
      "Handle customer communication, follow-ups, documentation, and support across buyer journeys.",
  },
  {
    title: "Site Engineer",
    department: "Execution",
    experience: "2 to 5 years",
   content:
      "Supervise site activities, coordinate teams, and ensure quality and timeline adherence.",
  },
  {
    title: "Civil Engineer",
    department: "Construction",
    experience: "2 to 6 years",
   content:
      "Support structural execution, planning, site coordination, and material management.",
  },
  {
    title: "Architect",
    department: "Design",
    experience: "3 to 6 years",
   content:
      "Contribute to planning, design detailing, layout refinement, and project visualization.",
  },
  {
    title: "Project Manager",
    department: "Project Management",
    experience: "6 to 10 years",
   content:
      "Lead project timelines, teams, execution strategy, and cross-functional coordination.",
  },
  {
    title: "Marketing Executive",
    department: "Marketing",
    experience: "1 to 4 years",
   content:
      "Support campaigns, media coordination, branding initiatives, and project promotions.",
  },
  {
    title: "Accounts Executive",
    department: "Finance",
    experience: "1 to 4 years",
   content:
      "Handle billing, records, reconciliations, reporting, and finance-related documentation.",
  },
  {
    title: "Admin",
    department: "Administration",
    experience: "1 to 3 years",
   content:
      "Manage office administration, support operations, and maintain workflow coordination.",
  },
  {
    title: "Other (Specify)",
    department: "General",
    experience: "Open",
   content:
      "Share your profile and area of expertise if you do not see a suitable role listed above.",
  },
];


 
 

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showAll, setShowAll] = useState(false);
const[data,setdata] = useState([])

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  experience: "",
});

const [cv, setCv] = useState(null);

const jobsData = [
  {
    title: "Sales Executive",
    department: "Sales",
    experience: "1 to 3 years",
   content:
      "Drive lead conversion, client engagement, and site visit coordination for residential projects.",
  },
  {
    title: "Channel Sales Manager",
    department: "Sales",
    experience: "4 to 7 years",
   content:
      "Manage channel partner networks, relationships, and partner-driven business development.",
  },
  {
    title: "CRM Executive",
    department: "Customer Relations",
    experience: "1 to 3 years",
   content:
      "Handle customer communication, follow-ups, documentation, and support across buyer journeys.",
  },
  {
    title: "Site Engineer",
    post: "Execution",
    experience: "2 to 5 years",
    content:
      "Supervise site activities, coordinate teams, and ensure quality and timeline adherence.",
  },
  {
    title: "Civil Engineer",
    department: "Construction",
    experience: "2 to 6 years",
   content:
      "Support structural execution, planning, site coordination, and material management.",
  },
  {
    title: "Architect",
    department: "Design",
    experience: "3 to 6 years",
   content:
      "Contribute to planning, design detailing, layout refinement, and project visualization.",
  },
  {
    title: "Project Manager",
    department: "Project Management",
    experience: "6 to 10 years",
   content:
      "Lead project timelines, teams, execution strategy, and cross-functional coordination.",
  },
  {
    title: "Marketing Executive",
    department: "Marketing",
    experience: "1 to 4 years",
   content:
      "Support campaigns, media coordination, branding initiatives, and project promotions.",
  },
  {
    title: "Accounts Executive",
    department: "Finance",
    experience: "1 to 4 years",
   content:
      "Handle billing, records, reconciliations, reporting, and finance-related documentation.",
  },
  {
    title: "Admin",
    department: "Administration",
    experience: "1 to 3 years",
   content:
      "Manage office administration, support operations, and maintain workflow coordination.",
  },
  {
    title: "Other (Specify)",
    department: "General",
    experience: "Open",
   content:
      "Share your profile and area of expertise if you do not see a suitable role listed above.",
  },
];

const visibleJobs = showAll ?  data[0]?.dynamicSections : data[0]?.dynamicSections.slice(0, 6);

useEffect(() => {
  try{
fetch("https://back-bulding-code-ofzs.onrender.com/careers").then((res) => res.json()).then((data) => {
          console.log("Fetched media data:", data);
          // let reverse_data = data.reverse()
           setdata(data);
        })  }catch(err){
    console.log(err)
  }
}, [])

const whyJoin = [
  {
    title: "Career Growth",
    text: data[0]?.content1 || "Long-term career growth opportunities with meaningful leadership exposure.",
    icon: "▣",
  },
  {
    title: "Work Culture",
    text: data[0]?.content2||"Collaborative and supportive teams driven by shared ambition and execution.",
    icon: "✦",
  },
  {
    title: "Learning & Development",
    text: data[0]?.content3 || "Continuous learning programs and professional development pathways.",
    icon: "◈",
  },
];



const expectations = [
  {
    title: "Ownership",
    text:data[0]?.content5 || "People who take responsibility and move work forward with confidence.",
  },
  {
    title: "Integrity",
    text: data[0]?.content6 || "Professionals who value trust, ethics, and long-term credibility.",
  },
  {
    title: "Creativity",
    text:data[0]?.content7 || "Fresh thinkers who can solve challenges with smart practical ideas.",
  },
  {
    title: "Execution",
    text:data[0]?.content8 || "Individuals who believe in discipline, delivery, and consistency.",
  },
  {
    title: "Collaboration",
    text: data[0]?.content9 ||"Team players who communicate clearly and work well across functions.",
  },
];

const lifeAtUB =  data[0]?.Side_Sections?.length > 0 ? data[0].Side_Sections : [
  {
    title: "Life",
    content: "A collaborative environment where teams across design, sales, and execution grow together while shaping meaningful real estate projects.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Culture",
    content: "A culture built on trust, collaboration, and shared ambition, where people grow while contributing to impactful real estate projects.",
   image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Training",
    content: "Continuous development through real project exposure, planning discussions, site learning, and hands-on industry experience.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop",
  },
];


const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("experience", formData.experience);
  data.append("job", selectedJob.name || selectedJob.title);
  data.append("post", selectedJob.post || selectedJob.department);
  data.append("cv", cv);

  try {
    const response = await fetch("https://back-bulding-code-ofzs.onrender.com/apply", {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to submit application");
    }

    alert("Application Submitted Successfully");

    setSelectedJob(null);

    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
    });

    setCv(null);
  } catch (err) {
    console.log(err);
    alert("Something went wrong. Ensure backend server is running on port 3000.");
  }
};

  return (
    <>
      <Header />

      <main className="w-full bg-[#f6f4f0] text-[#171717]">
        {/* HERO */}
        <section
          className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden pt-24 md:pt-28"
          style={{ backgroundImage:  `url(${data[0]?.heroImage})`||`url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.68),rgba(0,0,0,0.16),rgba(0,0,0,0.32))]"></div>

          <div className="relative z-10 flex items-end min-h-screen px-6 md:px-10 lg:px-16 pb-16 md:pb-20">
            <div className="max-w-4xl">
              <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-white/65">
                Careers at Unique Builders
              </p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-light leading-[0.94] mb-6">
               {data[0]?.title|| "Build your future with a team that values ambition, growth, and excellence."}
              </h1>
              <p className="max-w-2xl text-white/80 text-[15px] md:text-[17px] leading-8">
                {data[0]?.content||"Join a workplace where design, construction, execution, and business come together through a culture of trust, learning, and long-term opportunity."}
              </p>
            </div>
          </div>
        </section>

        {/* WHY JOIN */}
        <section className="py-20 md:py-28 bg-[#efefef]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="text-center mb-14 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-light leading-[1.05] text-[#171717] mb-4">
                Why Join Unique Builders
              </h2>
              <p className="max-w-2xl mx-auto text-[15px] md:text-[16px] leading-7 text-black/55">
                A premium work environment built on strong culture, high
                ownership, and real career progression.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyJoin.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-black/8 px-8 py-10 text-center shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
                >
                  <div className="text-3xl text-black/70 mb-5">{item.icon}</div>
                  <h3 className="text-[20px] font-light text-[#171717] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-7 text-black/55">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIFE AT UB */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="text-center mb-14">
              <h2 className="text-2xl md:text-4xl font-light leading-[1.05] text-[#171717] mb-4">
                Life at UB
              </h2>
              <p className="max-w-2xl mx-auto text-[15px] md:text-[16px] leading-7 text-black/50">
                A glimpse into the people, culture, events, and learning moments
                that shape life inside the organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lifeAtUB.map((item, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden border border-black/8 bg-[#f5f5f5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[380px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/45 transition-all duration-500"></div>

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="bg-white/95 border border-black/8 px-5 py-5 transition-all duration-500 group-hover:bg-white">
                        <h3 className="text-[20px] font-light text-[#171717] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[14px] leading-6 text-black/55">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE ARE LOOKING FOR */}
        <section className="py-20 md:py-28 bg-[#f3f3f3]">
          <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-black/40 mb-4">
                  What we are looking for
                </p>
                <h2 className="text-2xl md:text-4xl font-light leading-[1.06] text-[#171717] mb-5">
                 {data[0]?.title1 || "What you can expect and what we value."}
                </h2>
                <p className="text-[15px] md:text-[16px] leading-8 text-black/55">
                 {data[0]?.content4 || "We look for professionals who combine sharp thinking with strong execution, value trust and are ready to contribute to landmark developments with seriousness and intent."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {expectations.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-black/8 px-6 py-7 min-h-[220px]"
                  >
                    <div className="w-11 h-11 border border-black/10 bg-[#f3efe8] flex items-center justify-center text-lg mb-5">
                      ✦
                    </div>
                    <h3 className="text-[18px] font-light text-[#171717] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-7 text-black/55 break-all">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* JOB OPENINGS */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="text-center mb-14 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-light leading-[1.05] text-[#171717] mb-4">
                Job Openings
              </h2>
              <p className="max-w-2xl mx-auto text-[15px] md:text-[16px] leading-7 text-black/55">
                Explore current opportunities and find a role aligned with your
                experience and ambition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {visibleJobs?.length>0 ?visibleJobs?.map((job, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedJob(job)}
                  className="text-left bg-[#fbfbfb] border border-black/8 p-7 transition-all duration-300 hover:shadow-[0_14px_40px_rgba(0,0,0,0.06)] hover:bg-white"
                >
                  <h3 className="text-[22px] font-light text-[#0097e6] mb-3">
                    {job.name}
                  </h3>

                  <p className="text-[11px] uppercase tracking-[0.24em] text-black/45 mb-4">
                    {job.post}
                  </p>

                  <div className="w-24 h-px bg-black/30 mb-4"></div>

                  <p className="text-[13px] uppercase tracking-[0.18em] text-black/45 mb-4">
                    {job.experience}
                  </p>

                  <p className="text-[15px] leading-7 text-black/55">
                    {job.content}
                  </p>
                </button>
              )):<><div style={{position:'absolute',textAlign:'center',width:'80%'}} className=""><p>Currently No Jobs Available</p></div></>}
            </div>

            {jobsData.length > 6 && (
              <div className="flex justify-center mt-14">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-10 py-3 border border-black text-[17px] tracking-[0.22em] uppercase hover:bg-black hover:text-white transition-all duration-300"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45 mb-4">
              Join the team
            </p>
            <h2 className="text-2xl md:text-4xl font-light leading-[1.06] mb-5">
              Didn’t find a suitable role?
            </h2>
            <p className="text-white/70 text-[15px] md:text-[16px] leading-8 mb-8 max-w-2xl mx-auto">
              Share your resume with us. We are always open to meeting talented
              people who can contribute to our future projects and business
              growth.
            </p>
            <button
              onClick={() =>
                setSelectedJob({
                  title: "General Application",
                  department: "Open Application",
                  experience: "Open",
                 content: "Submit your profile for future opportunities.",
                })
              }
              className="border border-white/30 px-8 py-3 text-sm uppercase tracking-[0.18em] hover:bg-white hover:text-black transition-all duration-300"
            >
              Submit Resume
            </button>
          </div>
        </section>
      </main>

      {/* MODAL */}
   {selectedJob && (
  <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-4 py-8">
    <div className="relative w-full max-w-5xl bg-white border border-black/10 shadow-[0_25px_80px_rgba(0,0,0,0.25)] max-h-[90vh] overflow-y-auto">
      
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSelectedJob(null)}
        className="absolute top-4 right-4 text-black/45 hover:text-black text-2xl z-20"
      >
        ✕
      </button>

      <div className="grid md:grid-cols-2">
        
        {/* 🔹 LEFT SIDE - JOB DETAILS */}
        <div className="bg-[#f8f8f8] p-8 md:p-10 border-r border-black/10">
          <p className="text-[11px] uppercase tracking-[0.24em] text-black/40 mb-3">
            Job Details
          </p>

          <h2 className="text-2xl md:text-3xl font-light text-[#171717] mb-4">
            {selectedJob.name}
          </h2>

          <div className="mb-6">
            <p className="text-[12px] uppercase tracking-[0.2em] text-black/40 mb-1">
              Department
            </p>
            <p className="text-[15px] text-black/70">
              {selectedJob.post}
            </p>
          </div>

          <div className="mb-6">
            <p className="text-[12px] uppercase tracking-[0.2em] text-black/40 mb-1">
              Experience
            </p>
            <p className="text-[15px] text-black/70">
              {selectedJob.experience}
            </p>
          </div>

          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-black/40 mb-2">
             content
            </p>
            <p className="text-[15px] leading-7 text-black/65">
              {selectedJob.content}
            </p>
          </div>
        </div>

        {/* 🔹 RIGHT SIDE - FORM */}
        <div className="p-8 md:p-10">
          <p className="text-[11px] uppercase tracking-[0.24em] text-black/40 mb-3">
            Application Form
          </p>

          <h2 className="text-2xl md:text-3xl font-light text-[#171717] mb-6">
            Apply Now
          </h2>

<form className="space-y-5" onSubmit={handleSubmit}>
              {/* <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-black/15 px-0 py-3 outline-none text-[15px]"
            />
            <input 
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-black/15 px-0 py-3 outline-none text-[15px]"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border-b border-black/15 px-0 py-3 outline-none text-[15px]"
            />
            <input
              type="text"
              value={selectedJob.title}
              readOnly
              className="w-full border-b border-black/15 px-0 py-3 outline-none text-[15px] bg-transparent"
            />

            <textarea
              placeholder="Tell us briefly about your experience"
              rows={4}
              className="w-full border border-black/12 px-4 py-4 outline-none text-[15px] resize-none"
            /> */}

<input
  type="text"
  placeholder="Full Name"
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  className="w-full border-b border-black/15 px-0 py-3 outline-none text-[15px]"
/>

<input
  type="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  className="w-full border-b border-black/15 px-0 py-3 outline-none text-[15px]"
/>

<input
  type="tel"
  placeholder="Mobile Number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
  className="w-full border-b border-black/15 px-0 py-3 outline-none text-[15px]"
/>

<textarea
  placeholder="Tell us briefly about your experience"
  rows={4}
  value={formData.experience}
  onChange={(e) =>
    setFormData({ ...formData, experience: e.target.value })
  }
  className="w-full border border-black/12 px-4 py-4 outline-none text-[15px] resize-none"
/>

            {/* <label className="w-full flex flex-col items-center justify-center border border-dashed border-black/20 p-8 cursor-pointer hover:border-black transition-all duration-300">
              <input type="file" className="hidden" />
              <p className="text-sm text-black/55">
                Click to upload your CV (PDF, DOC, DOCX)
              </p>
            </label> */}


<label className="w-full flex flex-col items-center justify-center border border-dashed border-black/20 p-8 cursor-pointer hover:border-black transition-all duration-300">
  <input
    type="file"
    className="hidden"
    accept=".pdf,.doc,.docx"
    onChange={(e) => setCv(e.target.files[0])}
  />

  <p className="text-sm text-black/55">
    {cv ? cv.name : "Click to upload your CV (PDF, DOC, DOCX)"}
  </p>
</label>

            <button className="w-full bg-black text-white py-4 text-sm uppercase tracking-[0.18em] hover:opacity-90 transition">
              Submit Application
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
)}
      <AutoReveal>
        <InstagramSection />
      </AutoReveal>
      <Footer />
    </>
  );
}
