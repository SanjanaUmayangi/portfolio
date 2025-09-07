"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"
import { useLoading } from "./loading-provider"
import { LoadingSkeleton } from "./loading-skeleton"

export function Education() {
  const { isLoading } = useLoading()

  const educationData = [
    {
      degree: "B.Sc. (Hons) in Information Technology",
      institution: "University of Moratuwa",
      period: "2022 - PRESENT",
      status: "Third-year undergraduate",
      description:
        "Currently pursuing a comprehensive IT degree with focus on software engineering, web development, and emerging technologies.",
    }, 
    {
      degree: "G.C.E Advanced Level",
      institution: "Mahindha Rajapaksha College Matara",
      period: "2021 (2022)",
      status: "Physical Science Stream",
      grades: [
        { subject: "Combined Maths", grade: "A" },
        { subject: "Physics", grade: "A" },
        { subject: "Chemistry", grade: "B" },
      ],
    },
    {
      degree: "G.C.E Ordinary Level",
      institution: "Gunarathana Central College Matara",
      period: "2018",
      status: "Excellent Performance",
      description: "Achieved outstanding results with 8 A grades and 1 B grade",
    },
  ]

  if (isLoading) {
    return (
      <section id="education" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <LoadingSkeleton className="h-12 w-48 mx-auto mb-4" />
            <LoadingSkeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <LoadingSkeleton key={i} className="h-32 w-full" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="education" className="py-20 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-white mb-6">Education</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">My academic journey and achievements</p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-white/10">
                      <GraduationCap className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white mb-1">{edu.degree}</CardTitle>
                      <p className="text-blue-200 font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Badge variant="secondary" className="mb-2 bg-blue-500/20 text-blue-300 border-blue-500/30">
                    {edu.status}
                  </Badge>

                  {edu.description && <p className="text-gray-300 leading-relaxed">{edu.description}</p>}

                  {edu.grades && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-white">Results:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.grades.map((grade, gradeIndex) => (
                          <Badge
                            key={gradeIndex}
                            variant="outline"
                            className={`${
                              grade.grade === "A"
                                ? "border-green-400 text-green-300 bg-green-500/10"
                                : "border-blue-400 text-blue-300 bg-blue-500/10"
                            }`}
                          >
                            {grade.subject}: {grade.grade}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
