import { motion } from "framer-motion";
import image from '../public/download (6).jpeg';

const flip = {
  animate: {
    rotateY: 180,             // ✅ number instead of '180deg'
     transition:{
      duration:1
     }
  }
};

const appear = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2
    }
  }
};

export default function Card() {
  return (
    <>
      <>
        <div className=" -translate-y-40 mb-0 mr-40">
         <motion.div
            className="h-80 w-120 border rounded-md bg-transparent" // changed bg-white -> bg-transparent
            variants={flip}
            initial="initial"
            animate="animate"
            style={{ perspective: 800 }}
          >
            <motion.img
              src={image.src}
              alt="buisness image"
              width={500}
              height={550}
              className="ml-10 rounded-md -translate-x-10 "
              variants={appear}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        </div>
      </>
    </>
  );
}