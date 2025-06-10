import { motion } from 'framer-motion'

const galleryImages = [
  'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/68484ec6ffe61ef7d4c51ae5.jpeg',
  'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/68484ec6f23ad5f5c8fe2863.jpeg',
  'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/68484ec6ffe61e2905c51ae6.jpeg',
]

const adamGallery = [
  'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/6848506affe61e5633c51d89.jpeg',
]

export default function KeynoteSpeakers() {
  return (
    <div className="relative pt-32 min-h-screen bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/855507/855507-hd_1920_1080_25fps.mp4"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for readability */}
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-700 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>FSY4CC 2025 Confirmed Keynote Speakers</span>
        </motion.h1>

        {/* Bro. Henton */}
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-8 mb-12 p-8 rounded-2xl shadow-lg backdrop-blur-md bg-white/30 border border-white/50 hover:bg-white/40 transition-all duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/68484ec76bee950a5cb0f1a7.png" 
            alt="Brownsville Church of Christ Logo" 
            className="w-32 h-32 object-contain rounded-xl border border-white/50 shadow-md bg-white/80 backdrop-blur-sm"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Bro. Harrell L. Henton</h2>
            <p className="text-lg text-gray-700 mb-1">Brownsville Church of Christ (Miami, FL)</p>
          </div>
        </motion.div>

        {/* Gallery - Henton */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-700">Gallery</h3>
          <motion.div 
            className="flex gap-6 justify-center items-center overflow-x-auto pb-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {galleryImages.map((src, idx) => (
              <motion.div
                key={src}
                className="relative group"
                whileHover={{ scale: 1.05, rotate: 2 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
              >
                <img
                  src={src}
                  alt={`Keynote Gallery ${idx+1}`}
                  className="w-64 h-80 object-cover rounded-2xl shadow-lg border border-white/50 backdrop-blur-sm bg-white/20"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bio - Henton */}
        <motion.div 
          className="prose max-w-none mx-auto rounded-xl p-8 shadow mb-16 backdrop-blur-md bg-white/30 border border-white/50 hover:bg-white/40 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-2 text-green-800">About Bro. Harrell L. Henton</h3>
          <div className="text-gray-800">
            <p>Minister Harrell Henton has been working for the Lord for as long as he can remember. Under the guidance of his grandfather, Robert Holt Sr. he has made the grand decision to dedicate his full life to the work of the Lord and His church. He is a graduate of Miami Carol City Senior High School and after finishing there, he matriculated to Florida Memorial College, where studied Communications. Beginning his path toward the work of the church, he became a Christian, being baptized into the body of Christ, on January 10, 1993, at the tender age of 9. From there, continuing to spend time with his grandfather and mentor, Robert Holt Sr., he began to learn an abundance of the Word of God, words of wisdom, and just in general becoming a man. Little did he know at the time, that he was being groomed to one day take over the Ministry of the Brownsville Church of Christ. In August of 2011, Harrell was handed the torch in the delivery of God's word. He was installed as the full-time Minister of the Brownsville Church of Christ on the 22nd day of August. From there, he decided to make it his mission to continue to build the Brownsville congregation as a loving and family-oriented church.</p>
            <p>With the support and encouragement of his family and membership, he has begun to build this church, increasing membership, creating more programs, and strengthening the programs already in existence. As a young man leading a great church, many times it can be difficult, but Minister Henton understands that success does not come without hard work, but he knows that with God all things are possible! Brother Henton is married to a wonderful helpmeet, Kellee, and they have two beautiful kids, Kaleah, and Harrison. With a full-time position as a Chaplain, and a full-time Ministry, Bro. Henton has his plate full. But he is up for the challenge, and having a close relationship with the Lord and living by the Word of God, he knows that he will be blessed, no matter what the situation is. Bro. Henton's encouragement to many, and one of his favorite scriptures, "Trust in the Lord with all thine heart; and lean not unto thine own understanding, In all thy ways acknowledge him and He shall direct thy path (Proverbs 3:5-6). To the youth, remember the race is not given to the swift or the strong, but to those that endure until the end. May God bless everyone."</p>
          </div>
        </motion.div>

        {/* Adam Brinson */}
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-8 mb-12 p-8 rounded-2xl shadow-lg backdrop-blur-md bg-white/30 border border-white/50 hover:bg-white/40 transition-all duration-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://images.squarespace-cdn.com/content/v1/5fa851c3b7eac96fa3f2b016/f89f377e-356e-4c1c-8240-b17e1f44ec7d/ppcc+logo+revisionBlue.png?format=1500w" 
            alt="Pembroke Park Church of Christ Logo" 
            className="w-32 h-32 object-contain rounded-xl border border-white/50 shadow-md bg-white/80 backdrop-blur-sm"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Adam Brinson</h2>
            <p className="text-lg text-gray-700 mb-1">Pembroke Park Church of Christ (Pembroke Park, FL)</p>
          </div>
        </motion.div>

        {/* Gallery - Brinson */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-700">Gallery</h3>
          <motion.div 
            className="flex gap-6 justify-center items-center overflow-x-auto pb-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {adamGallery.map((src, idx) => (
              <motion.div
                key={src}
                className="relative group"
                whileHover={{ scale: 1.05, rotate: 2 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
              >
                <img
                  src={src}
                  alt={`Keynote Gallery Adam Brinson ${idx+1}`}
                  className="w-64 h-80 object-cover rounded-2xl shadow-lg border border-white/50 backdrop-blur-sm bg-white/20"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bio - Brinson */}
        <motion.div 
          className="prose max-w-none mx-auto rounded-xl p-8 shadow mb-16 backdrop-blur-md bg-white/30 border border-white/50 hover:bg-white/40 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-2 text-green-800">About Adam Brinson</h3>
          <div className="text-gray-800">
            <p>Adam Brinson has been faithfully serving the Lord at the Pembroke Park Church of Christ for most of his life, and he began serving in ministry at a young age. He became the youth minister in 2007 and now serves as the senior minister, a role he has held since November 2022. Over the years, Adam has faithfully led and served in various ministries, always striving to give his time, talent, and treasure to the Lord.</p>
            <p>In addition to his ministry work, Adam has a strong background in education. He began teaching in 2004 with Miami-Dade County Public Schools, later serving as a curriculum support specialist at the district level. He now serves as the Senior Vice President of Education at Junior Achievement of Greater Miami, where he helps students develop the skills they need for life beyond the classroom.</p>
            <p>Adam is passionate about helping young people grow spiritually and succeed in every area of life. He's honored to be part of the 2025 Youth 4 Christ Conference and looks forward to encouraging the next generation of believers.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 