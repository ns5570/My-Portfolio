import React from "react";
import certifi from "../../assets/home/Untitled design (3).png";
import cfi0 from "../../assets/home/Add a subheading.png";
import "./About.css";
const About = () => {
 // const info = [
   // { text: "Internship", count: "01" },
   // { text: "Completed Projects", count: "03"},
   // { text: "Certificates", count: "06" },
 // ];
  return (
    <section className="About" >
      <div className="text-center mt-8">
        <h3 className="About-con">
          About <span className="text-yellow-400">Me</span>
        </h3>
       
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
          <p className="introduction">My Introduction</p>
          <p className="text ">
               This is Nishant🌝,I am currently a btech (IT) under graduadate  from srm institute of science and tech willing to work on these fab apps  & sites .MY hobbies are playing chess ,reading books,solving puzzles and many more . I have completed varioys leaders role in my collge life from managing a  club  leader to a volunteering various college camps on various colleges too .Last but nit the least I will try my best to serve you the best and promise not to disappoint you at any chance. This is a short demo of my project ,do check out and give your valuable feedback in the comment box ,if you have any doubt or query regarding the same I have provided with the link of my mail to the top buttom of the page do hit it and let me know.
              </p>
              <div className="myskills"> 
              <p className="skills">My skills</p>
              <div className="button-1">
        
        <button className="btn primary-btn">  C  </button>
              
            <button className="btn highlighted-btn">CPP</button>

        <button className="btn primary-btn"> PYTHON  </button>
              
              <button className="btn highlighted-btn">HTML</button>

        <button className="btn primary-btn">  CSS</button>
              
              <button className="btn highlighted-btn">JAVASCRIPT</button>

        <button className="btn primary-btn"> REACTJS</button>
              
              <button className="btn highlighted-btn">SQL</button>

        <button className="btn primary-btn">  PHP   </button>
              
              <button className="btn highlighted-btn">DJANGO</button>

        <button className="btn primary-btn">NODEJS</button>
              
              <button className="btn highlighted-btn">DSA</button>

        </div>
        
              </div>
            <div className="text-gray-300 my-3">
              
              <div className="certificates">
                <h3> My  <span className="text-yellow-400">certificates</span></h3>
                
                <div className="intro">
                <p >Scrolling through certificate section there are n numbers of them can check some of them (Below are my certificates from various platforms and courses throughout my college journey:-</p>
                </div>
                <div  className="cfi">
                <img src={certifi}
                alt=" " />
                </div>
                </div>
     
                <div className="projects">
                    <h3>My <span className="text-yellow">Projects</span></h3>
                    <p >Now,moving to the project section below are some of the projects with their live demonstartion in the site itself do check it out and help me by proving valuable feedback and report on the same</p>
                
              </div>
              <div  className="cfi0">
                <img src={cfi0}
                alt=" " />
                </div>
                
              <br />
              <br />
              
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <div className="border" >
                <h6> Made by nishant with lot of ❤️ </h6>
                <p>DON'T FORGET TO GIVE FEEDBACK ✅,GOOD DAY AHEAD🌐 ;</p>
                <p>✆+91-7905096694</p>
                <p> EMAIL📩 nishant.singh7666@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;