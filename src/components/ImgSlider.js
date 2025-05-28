import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function ImgSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  const timer = useRef(null);

  useEffect(() => {
    if (!instanceRef.current) return;

    timer.current = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Buat array image dari 1.jpg sampai 27.jpg
  const images = Array.from({ length: 27 }, (_, i) => {
    const n = i + 1;
    const ext = [1, 10, 20, 23].includes(n) ? "JPG" : "jpg";
    return `/${n}.${ext}`;
  });
  return (
    <div className=" bg-pink-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full mx-auto pt-10 px-4"
      >
        <div
          ref={sliderRef}
          className="keen-slider rounded-xl overflow-hidden shadow-lg"
        >
          {images.map((src, index) => (
            <div key={index} className="keen-slider__slide">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ImgSlider;
