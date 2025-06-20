"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MoonIcon, SunIcon, GithubIcon, MailIcon } from "lucide-react"
import { motion } from "framer-motion"
import { saveGuestbookEntry, getGuestbookEntries } from "@/lib/guestbook"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { ProjectCard } from "./project-card"
import { Banner } from "./banner"
import { projects } from "@/data/projects"
import { skills } from "@/data/skills"

export default function PortfolioSite() {
  const [guestbookEntries, setGuestbookEntries] = useState<string[]>([])
  const [entry, setEntry] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Load guestbook entries on mount
  useEffect(() => {
    const loadEntries = async () => {
      const entries = await getGuestbookEntries()
      setGuestbookEntries(entries)
    }

    loadEntries()
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (entry.trim()) {
      setIsSubmitting(true)
      try {
        await saveGuestbookEntry(entry)
        setGuestbookEntries([...guestbookEntries, entry])
        setEntry("")
      } catch (error) {
        console.error("Failed to save entry:", error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        "bg-[#F0F9F6] text-gray-800 dark:bg-gray-900 dark:text-gray-100",
      )}
    >
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        {/* Header with theme toggle */}
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {mounted && theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </div>

        {/* 배너 */}
        <Banner />

        {/* 소개 섹션 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-6"
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/profile-photo.png"
            alt="프로필 사진"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary dark:border-primary-400"
          />
          <div className="text-center md:text-left space-y-3">
            <h1 className="text-3xl font-bold text-primary dark:text-primary-400">이정하</h1>
            <p className="text-gray-700 dark:text-gray-300">
              안녕하세요! 저는 <strong>연성대학교 영상콘텐츠학과 22학번</strong> 이정하입니다. 사용자 경험을 중요하게
              생각하며, 직관적이고 감각적인 콘텐츠를 만드는 것을 좋아합니다.
            </p>

            <div className="flex flex-wrap gap-2 my-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="mailto:jee5879@naver.com"
                className="flex items-center gap-2 text-primary dark:text-primary-400 hover:underline"
              >
                <MailIcon size={16} />
                <span>jee5879@naver.com</span>
              </a>
              <a
                href="https://github.com/lizyeongtti?tab=projects"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary dark:text-primary-400 hover:underline"
              >
                <GithubIcon size={16} />
                <span>github.com/lizyeongtti</span>
              </a>
            </div>
          </div>
        </motion.section>

        {/* 작품 섹션 */}
        <motion.section variants={container} initial="hidden" animate="show">
          <h2 className="text-2xl font-bold mb-8 text-center text-primary dark:text-primary-400">작품 소개</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 타임라인 섹션 */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-10"
        >
          <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary-400">학습 여정</h2>
          <div className="space-y-4">
            <TimelineItem
              year="2022"
              title="연성대학교 입학"
              description="영상콘텐츠학과에 입학하여 기초 디자인 및 영상 제작 기술을 배우기 시작했습니다."
            />
            <TimelineItem
              year="2023"
              title="첫 팀 프로젝트"
              description="학과 내 팀 프로젝트를 통해 단편 영상을 제작하고 편집 기술을 향상시켰습니다."
            />
            <TimelineItem
              year="2024"
              title="포트폴리오 웹사이트 제작"
              description="개인 작품을 효과적으로 선보이기 위한 웹 포트폴리오를 구축했습니다."
            />
          </div>
        </motion.section>

        {/* 방명록 섹션 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-10"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-400">방명록</h2>
          <form onSubmit={handleSubmit} className="mb-6">
            <Textarea
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 dark:bg-gray-700"
              placeholder="방명록에 한마디 남겨주세요!"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              rows={3}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-3 bg-primary hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600 text-white"
            >
              {isSubmitting ? "등록 중..." : "등록하기"}
            </Button>
          </form>
          <motion.div className="space-y-3" variants={container} initial="hidden" animate="show">
            {guestbookEntries.length > 0 ? (
              guestbookEntries.map((msg, idx) => (
                <motion.div key={idx} variants={item} className="bg-primary-50 dark:bg-gray-700 p-4 rounded-lg">
                  {msg}
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-center italic">
                아직 방명록이 없습니다. 첫 번째 메시지를 남겨보세요!
              </p>
            )}
          </motion.div>
        </motion.section>

        {/* Footer */}
        <footer className="text-center text-gray-600 dark:text-gray-400 pt-8 pb-4">
          <p>© {new Date().getFullYear()} 이정하. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

function TimelineItem({ year, title, description }: { year: string; title: string; description: string }) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary dark:bg-primary-500 text-white text-sm font-semibold">
          {year}
        </div>
        <div className="w-px h-full bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div className="pb-8">
        <h3 className="text-lg font-semibold text-primary dark:text-primary-400">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}
