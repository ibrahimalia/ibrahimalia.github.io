import { Blob } from "@components";
import "../assets/home.css";
import { LoaderLayout } from "@layouts";
import { motion } from "framer-motion";
import { fadeIn } from "../utils";
import { homePage } from "@db";

function Home() {
  return (
    <div className="home h-full bg-primary/60 grid grid-cols-2 w-full relative">
      <LoaderLayout>
        <div className="container mx-auto relative">
          <Blob />
        </div>
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat w-full  h-full absolute mix-blend-color-dodge "
        >
          <motion.img
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            src={homePage.personal_image}
            width={737}
            height={678}
            className="absolute right-0 bottom-2 h-[80%]"
          />
          <div className="wrapper">
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </motion.div>
      </LoaderLayout>
    </div>
  );
}

export default Home;
