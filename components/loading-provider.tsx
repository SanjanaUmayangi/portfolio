"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

const LoadingContext = createContext<{
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}>({
  isLoading: true,
  setIsLoading: () => {},
})

export const useLoading = () => useContext(LoadingContext)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100)
    return () => clearTimeout(timer)
  }, [])

  return <LoadingContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoadingContext.Provider>
}
 