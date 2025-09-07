"use client"

import type React from "react"
import emailjs from '@emailjs/browser';
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useLoading } from "./loading-provider"
import { LoadingSkeleton } from "./loading-skeleton"

export function Contact() {
  const { isLoading } = useLoading()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
 
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission here
  //   console.log("Form submitted:", formData)
  // }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'service_pgkd4ap',     
      'template_wtt55kh', 
      //e.currentTarget, //sends the entire form data   
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      },
      'ulww1I9Ge9hu9Dv9G'
    );
    
    alert("✅ Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
    
  } catch (error) {
    alert("❌ Failed to send. Please email me directly.");
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isLoading) {
    return (
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <LoadingSkeleton className="h-12 w-48 mx-auto mb-4" />
            <LoadingSkeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto">
            <LoadingSkeleton className="h-96 w-full" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-6xl font-bold text-white mb-6">Contact.</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">Let's connect and explore opportunities together</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                <p className="text-gray-300 mb-8">
                  I'm always open to discussing new opportunities, innovative projects, and ways to contribute to
                  meaningful solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    {/* <p className="text-white font-medium">(+94) 77 8587 770</p> */}
                    <a href="tel:+94778587770" className="text-white font-medium hover:transition-colors">
                      (+94) 77 8587 770
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    {/* <p className="text-white font-medium">sanjanaumayangi02@gmail.com</p> */}
                    <a
                      href="mailto:sanjanaumayangi02@gmail.com"
                      className="text-white font-medium hover:transition-colors"
                    >
                      sanjanaumayangi02@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Matara, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="What's your web address?"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Phone Number</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="What's your phone number?"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Your Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What you want to say?"
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
