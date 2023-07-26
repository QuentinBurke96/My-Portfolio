import Head from "next/head";
import Fade from 'react-reveal/Fade';
import { MdComputer } from "react-icons/md";
import { TbBrandVscode } from "react-icons/tb";
import { 
  AiFillLinkedin, 
  AiFillGithub,
  AiOutlineCamera
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
// import deved from "/public/dev-ed-wave.png";
import Image from "next/image";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web6 from "/public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-green-950 md:px-20 lg:px-40">
      <Fade top distance="20%" duration={1500}>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-poppins text-xl">QBDEV</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li className="transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300">
                <a
                  className="bg-gradient-to-r from-green-800 text- to-green-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#" 
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-green-800 font-medium dark:text-green-500 md:text-6xl">
              Quentin Burke
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="font-extralight text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Perfecting my skills as a Full Stack Developer accustomed to
              working in a fast-paced, result-oriented environment.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
            <div className="mx-auto bg-gradient-to-b from-green-700 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              {/* <Image src={} layout="fill" objectFit="cover" /> */}
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
            

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services including brand design,
              programming and application mockups.
            </p>
          </div>
          
        </section>
        <section>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <SiAdobe className="text-5xl"/>
              <h3 className="text-lg font-medium pt-8 pb-2  ">Design</h3>
              <p className="py-2">
                Crafting sophisticated creations tailored to your requirements
                while adhering to fundamental design principles.
              </p>
              <h4 className="py-4 text-teal-600">Tools</h4>
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
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">C#</p>
              <p className="text-gray-800 py-1">More Skills Listed above </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <AiOutlineCamera className="text-6xl" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Photography</h3>
              <p className="py-2">
              Taking an image, freezing a moment, reveals how rich reality truly is.
              </p>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">Sony A7III</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Affinity</p>
              <p className="text-gray-800 py-1">Lightroom</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="flex justify-center text-3xl py-5 dark:text-white ">PORTFOLIO</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
        </Fade>
      </main>
    </div>
  );
}
