import Head from "next/head"
// import { motion, useScroll, useSpring } from "framer-motion";
import Fade from "react-awesome-reveal";
import { MdComputer } from "react-icons/md";
import { TbBrandVscode } from "react-icons/tb";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineCamera,
} from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiSass,
  DiBootstrap,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiJira,
  SiPython,
  SiJetbrains,
  SiPostgresql,
  SiAdobe,
} from "react-icons/si";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import QAvatarlast from "/public/QAvatarlast.png";
import Image from "next/image";
import QK from "/public/QK.jpg";
import FullMock from "/public/FullMock.jpg";
import QBDEV from "/public/QBDEV.jpg";
import Green from "/public/GreenCard.jpg";
import Buster from "/public/Buster.jpg";
import Alle from "/public/Alle.jpg";




export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta property="og:title" content="My Portfolio"/>
        <meta property="og:image" content="https://i.ibb.co/yPWBMDz/thumb.jpg"/>
        <meta property="og:description" content="Portfolio"/>
        <meta property="og:url" content="URL OF YOUR WEBSITE"/>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-green-950 md:px-20 lg:px-40">
 <div className="fixed top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
  <div className="fixed bottom-20 -left-1 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
  <div className="fixed bottom-20 -right-1 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
  <div className="fixed -bottom-20 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
 </div>
        <Fade distance="20%" duration={1500}>
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="font-poppins text-xl">QBDEV</h1>
              <ul className="flex items-center">
                <li className="transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300">
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </li>
                <li className="transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300">
                  <a
                    className="bg-gradient-to-r from-green-800 text- to-green-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="Qres.pdf"
                    download="Quentin-Burke-Resume"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className=" text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-green-800 font-medium dark:text-green-500 md:text-6xl">
                Quentin Burke
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Full Stack Developer
              </h3>
              <p className="font-extralight text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl  ">
                Perfecting my skills as a Full Stack Developer accustomed to
                working in a fast-paced, result-oriented environment.
              </p>

              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
                  href="https://github.com/QuentinBurke96?tab=overview&from=2023-07-01&to=2023-07-27"
                >
                  <AiFillGithub />
                </a>
                <a
                  className="transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
                  href="https://www.linkedin.com/in/quentin-burke-57a606126/"
                >
                  <AiFillLinkedin />
                </a>
              </div>
              <div
                style={{ position: "relative" }}
                className=" mx-auto bg-gradient-to-b from-green-700 rounded-full w-40 h-40 mt-20  md:h-96 md:w-96"
              >
                  <Image
                    src={QAvatarlast}
                    layout="fill"
                    objectFit="cover"
                  />
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="flex justify-center text-3xl py-1 dark:text-white ">
                SKILLS
              </h3>
              <section
                class="skills-section"
                role="contentinfo"
                aria-labelledby="skills"
              >
                <div className="text-5xl grid grid-cols-5 gap-5 py-16 text-gray-600 dark:text-gray-400">
                  <div class="flex justify-center">
                    <DiJavascript1 />
                  </div>
                  <div className=" flex justify-center">
                    <DiReact />
                  </div>
                  <div className=" flex justify-center">
                    <SiNextdotjs />
                  </div>
                  <div className=" flex justify-center">
                    <DiSass />
                  </div>
                  <div className="flex justify-center">
                    <DiBootstrap />
                  </div>
                  <div className=" flex justify-center">
                    <SiTailwindcss />
                  </div>
                  <div className=" flex justify-center">
                    <SiExpress />
                  </div>
                  <div className=" flex justify-center">
                    <DiNodejsSmall />
                  </div>
                  <div className=" flex justify-center">
                    <DiMongodb />
                  </div>
                  <div className=" flex justify-center">
                    <DiGithubBadge />
                  </div>
                  <div className=" flex justify-center">
                    <SiJira />
                  </div>
                  <div className=" flex justify-center">
                    <SiPython />
                  </div>
                  <div className=" flex justify-center">
                    <TbBrandVscode />
                  </div>
                  <div className=" flex justify-center">
                    <SiJetbrains />
                  </div>
                  <div className=" flex justify-center">
                    <SiPostgresql />
                  </div>
                </div>
              </section>

              <p className="font-thin flex justify-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                "Skill is the foundation of every great achievement." - Ralph
                Waldo Emerson
              </p>
              <p className="flex justify-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer a range of services including application mockups,
                programming and photography.
              </p>
            </div>
          </section>
          <section>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <SiAdobe className="text-5xl" />
                <h3 className="text-lg font-medium pt-8 pb-2  ">Design</h3>
                <p className=" py-2">
                  Crafting sophisticated creations tailored to your needs while
                  adhering to fundamental design principles.
                </p>
                <h4 className="py-4 text-green-800">Tools</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Affinity</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Illustrator</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <MdComputer className="text-6xl" />
                <h3 className="text-lg font-medium pt-8 pb-2 ">Development</h3>
                <p className="py-2">
                  Got a brilliant idea for your next website? Let's bring it to
                  life!
                </p>
                <h4 className="py-4 text-green-800">Tools</h4>
                <p className="text-gray-800 py-1">React</p>
                <p className="text-gray-800 py-1">Javascript</p>
                <p className="text-gray-800 py-1">Tailwind</p>
                <p className="text-gray-800 py-1">More Skills Listed above </p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <AiOutlineCamera className="text-6xl" />
                <h3 className="text-lg font-medium pt-8 pb-2 ">Photography</h3>
                <p className="py-2">
                  Taking an image, freezing a moment, reveals how rich reality
                  truly is.
                </p>
                <h4 className="py-4 text-green-800">Tools</h4>
                <p className="text-gray-800 py-1">Sony A7III</p>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Affinity</p>
                <p className="text-gray-800 py-1">Lightroom</p>
              </div>
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3 className="flex justify-center text-3xl py-5 dark:text-white ">
                PROJECTS
              </h3>
              <p className="flex justify-center font-extralight text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
                "A developer portfolio serves as a powerful tool to showcase
                proficiency and creativity." - Dev community
              </p>
              <p className="flex justify-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Click on the images below to view the live site/source code!
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 basis-1/3 flex-1 ">
                <a href="http://www.qkspacephotography.com">
                  <Image
                    className=" rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={QK}
                  />
                </a>
              </div>
              <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 basis-1/3 flex-1">
              <a href="http://www.qkspacephotography.com"> 
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={FullMock}
                />
              </a>
              </div>
              <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 basis-1/3 flex-1">
              <a href="https://qbdev.dev/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={Green}
                />
              </a>
              </div>
              <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 basis-1/3 flex-1">
              <a href="https://qbdev.dev/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={QBDEV}
                />
              </a>
              </div>
              
              <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 basis-1/3 flex-1">
              <a href="https://github.com/Allergy-Busters/frontend"> 
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={Buster}
                />
              </a>
              </div>
              <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 basis-1/3 flex-1">
              <a href="https://github.com/Allergy-Busters/frontend"> 
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={Alle}
                />
              </a>
              </div>
            </div>
          </section>
        </Fade>
      </main>
    </div>
  );
}
