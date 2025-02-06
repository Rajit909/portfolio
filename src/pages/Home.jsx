import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Github from "../components/Github/Github";
import Navbar from "../components/Navbar/Navbar";
import Skills from "../components/Skills/Skills";
import { motion } from 'framer-motion'



const Home = ({theme}) => {
  return (
    <>
      <Navbar theme={theme} url1={"/blogs"} text1={"blogs"} url2={"/projects"} text2={"projects"} url3={"/achievements"} text3={"achievements"} url4={"/contact"} text4={"contact"}  />
      <About />
      <Skills />
      <div className="my-6">
        <h1 className="text-center font-zen text-3xl bold dark:text-white ">Github Activity :</h1>

        <motion.div
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5 }}
        >

      <Github username={"Rajit909"}/>

        </motion.div>
        </div>
      
      <Footer />
    </>
  )
} 

export default Home;