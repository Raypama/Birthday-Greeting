import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion"; // ✅ BENAR
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function BirthdayCard() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);
  const { scrollYProgress } = useScroll();

 

  const handleOpen = () => {
    setOpened(true);
    audioRef.current.play(); // memutar lagu saat tombol ditekan
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center p-4 transition-all duration-500 ">
      <audio ref={audioRef} src="/lagu.mp3" preload="auto" />

      {!opened ? (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          onClick={handleOpen}
          className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-pink-600 transition ease-in-out"
        >
          🎁 Happy Birthday's Sayangg, di klik dongg ...
        </motion.button>
      ) : (
        <div className="w-full overflow-x-hidden ">
          <div className="min-h-screen flex flex-col items-center text-center justify-center w-full max-w-sm mx-auto  ">
            <motion.div
              id="scroll-indicator"
              style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 10,
                originX: 0,
                backgroundColor: "#ff0088",
              }}
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} // sudah diperbaiki ke 1
              transition={{ duration: 5 }}
              src="10.JPG"
              alt="Birthday Cake"
              className="w-40 h-40 mb-4 rounded-sm"
            />
            <h1 className="text-2xl font-bold text-pink-700 mb-2">
              Selamat Ulang Tahun ke-19 yawss sengkuhh!
            </h1>
            <p className="text-base  text-pink-600">
              Sebelumnya semoga harimu penuh kebahagiaan dan cinta 🎉💖 <br />{" "}
              geser kebawah dulu yukk ada ucapan ari rayii gantengg.
            </p>
          </div>

          <div className="">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="py-7 "
            >
              Sayang, selamat ulang tahun yaa! 🥳 Hari ini tuh bukan cuma
              harimu, tapi juga hari yang spesial banget buat aku — karena hari
              ini orang yang paling aku sayang dilahirkan ke dunia. Aku
              bersyukur banget bisa jadi bagian dari hidupmu dan nemenin kamu di
              hari spesial ini. Kadang masih suka nggak percaya aja, kok bisa
              aku seberuntung ini dapet kamu. perjlnan tahun ini cukup berat yah
              buat kamu sayangg, di umur kamu yang 19 tahun ini menurut aku kamu
              tuh hebat banget sayangg. walaupun kamu kehilangan sesuatu yang
              paling berharga belakangan ini, kamu tetep bisa kuat lanjutin ini
              semua dengan senyumann.. i love uu ssayang akuu disini kok gak
              kemana mana.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="py-7"
            >
              Aku tahu, perjalanan kita nggak selalu mulus. Kadang ada cekcok
              kecil, beda pendapat, atau hal-hal receh yang bikin kita kesel.
              Tapi dari semua itu, aku belajar satu hal: kamu tetap jadi rumah
              yang paling nyaman buat aku pulang. Kamu tetap jadi tempat paling
              aman buat aku cerita, ngambek, atau sekadar diem bareng tanpa
              kata-kata.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="py-7"
            >
              Semoga di usiamu yang sekarang ini, kamu selalu dikelilingi
              hal-hal baik. Doa aku buat kamu tuh banyak — tapi yang paling
              utama, semoga kamu sehat terus, bahagia terus, dan makin dekat
              sama apa pun yang kamu cita-citain. Kalau capek, jangan lupa
              istirahat. Dan kalau butuh sandaran, kamu tahu ke mana harus
              balik, kan? 🙂
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="py-7"
            >
              Aku mungkin belum jadi pasangan yang sempurna. Masih banyak
              kurangnya, masih sering nyebelin. Tapi aku janji bakal terus
              belajar jadi lebih baik. Aku pengen terus ada di samping kamu —
              bukan cuma pas seneng-senengnya aja, tapi juga pas kamu lagi males
              ngomong, lagi butuh space, atau lagi ngerasa dunia berat banget.
              Kita jalanin bareng-bareng, ya?
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl text-pink-500 mb-10"
          >
            🎂
          </motion.div>
          <a
            href="https://app.u.shopeepay.co.id/u/4vL2zFG1r5592oN77L9n5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-pink-600 transition ease-in-out inline-block"
          >
            kado nya kamu pilih sendiri yawss butuhnya apa mwehehe
          </a>
        </div>
      )}
    </div>
  );
}

export default BirthdayCard;
