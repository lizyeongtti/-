"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function Banner() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-2xl mb-8">
      {/* 배경 패턴 */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-r from-primary-800 to-primary-600"
            : "bg-gradient-to-r from-primary-600 to-primary-400"
        } opacity-90`}
      >
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* 물결 패턴 */}
      <svg
        className="absolute bottom-0 left-0 w-full text-white opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full text-white opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ transform: "translateY(20px)" }}
      >
        <path
          fill="currentColor"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      {/* 배너 내용 */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">이정하</h1>
          <div className="h-1 w-24 bg-white opacity-70 mx-auto mb-3"></div>
          <p className="text-lg md:text-xl opacity-90">영상 콘텐츠 크리에이터 & 그래픽디자이너</p>
        </motion.div>
      </div>

      {/* 장식 요소 */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-white opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-white opacity-30"></div>
    </div>
  )
}
