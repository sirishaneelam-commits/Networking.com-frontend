import { motion } from "framer-motion";
import image from '../public/download (5).jpeg';

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
        <div className="mt-30 mr-40">
          <motion.div
            className="h-90 w-120 bg-white border rounded-md"
            variants={flip}
            initial="initial"
            animate="animate"
            style={{ perspective: 800 }}
          >
            <motion.img
              src={image.src}
              alt="buisness image"
              width={500}
              height={530}
              className="ml-10 rounded-md -translate-x-10 translate-y-5"
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