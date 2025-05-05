import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function SocialFeed() {
  const images = [
    { src: "https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886204e49ce5384dfe852.jpeg", size: "small" },
    { src: "https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d88620c3c1a7764d36b85c.jpeg", size: "small" },
    { src: "https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d88620170b5b806e726cdd.jpeg", size: "large" },
    { src: "https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d886201b97ac32d4040c8e.jpeg", size: "small" },
    { src: "https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d88620fb9169a9e0670e23.jpeg", size: "small" },
  ];

  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-12 w-full">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Follow the Action!
          </motion.h2>
          <div className="text-2xl font-bold text-gray-700 mb-4">@fsy4cc</div>
          <div className="flex gap-4 justify-center">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-600 hover:text-pink-700 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/fsy4cc/" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-700 transition-colors">
              <FaFacebook />
            </a>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg ${
                image.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover aspect-square"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
