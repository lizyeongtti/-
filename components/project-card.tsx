"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ExternalLinkIcon, InfoIcon } from "lucide-react"
import type { Project } from "@/types/project"

export function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 rounded-2xl h-full flex flex-col dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="relative overflow-hidden group">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <Button
              variant="outline"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800"
              onClick={() => setIsOpen(true)}
            >
              <InfoIcon className="mr-2 h-4 w-4" />
              상세보기
            </Button>
          </div>
        </div>
        <CardContent className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-primary dark:text-primary-400">{project.title}</h3>
            <span className="text-xs bg-primary-50 dark:bg-gray-700 px-2 py-1 rounded-full text-primary-700 dark:text-primary-300">
              {project.category}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-primary-50 dark:bg-gray-700 rounded-full text-primary-700 dark:text-primary-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl text-primary dark:text-primary-400">{project.title}</DialogTitle>
            <DialogDescription className="text-gray-500 dark:text-gray-400">
              {project.category} | {project.date}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />

            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">{project.fullDescription}</p>

              {project.tools && (
                <div>
                  <h4 className="font-medium mb-2">사용 도구</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-50 dark:bg-gray-700 rounded-full text-sm text-primary-700 dark:text-primary-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.link && (
                <Button variant="outline" className="mt-4" onClick={() => window.open(project.link, "_blank")}>
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  프로젝트 보기
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
