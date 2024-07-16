import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/Myprofile-1.png";
import AnimatedText from "@/components/AnimatedText";
import AnimatedImage from "@/components/AnimatedImage";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import laptop from "../../public/images/svgs/miscellaneous_icons_1.svg";
import { Laptop } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jay Patel Codes</title>
        <meta
          name="description"
          content="This is a portfolio website designed and built by Jay Patel, A Software Development Student at SAIT, Calgary, AB, CA."
        />
        <meta
          name="keywords"
          content="protfolio, portfolio website, jay patel, Jay Patel, jay patel codes, jay patel portfolio, portfolio website in next.js"
        ></meta>
        <meta name="author" content="Jay Patel"></meta>
      </Head>

      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-0 sm:pt-0">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <AnimatedImage
                src={profilePic}
                alt="Jay Patel"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Engineering Your Visions into Reality"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
              />
              <p className="my-4 text-lg font-medium md:text-sm sm:text-xs">
                As a versatile software developer, I specialize in crafting
                dynamic web applications and cross-platform solutions,
                leveraging my proficiency in Java, C#, MySQL, React.js and React
                Native
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                {/* Add the Resume pdf file here  */}
                <Link
                  href="/ResumeJP.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 
                rounded-lg text-lg font-semibold 
                hover:bg-light hover:text-dark
                border-2 border-solid border-transperant hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base
                "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>

                <Link
                  href="mailto:jayusp.ca0234@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline hover:text-orange-600 hover:scale-105 hover:transition delay-300 dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute bottom-[4rem] right-32 w-48 md:hidden lg:bottom-[6rem]">
          <Laptop
            className="h-auto fill-dark dark:fill-light"
            style={{ width: "200px", transform: "translateY(110%)" }}
          />
        </div>
      </main>
    </>
  );
}
