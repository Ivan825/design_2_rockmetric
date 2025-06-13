'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  BarChart3, 
  Brain, 
  LineChart, 
  PieChart, 
  Rocket, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Star, 
  Users,
  Zap,
  Shield,
  Globe,
  ChevronRight,
  Play,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [demoMetric, setDemoMetric] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const incrementMetric = () => {
    setDemoMetric(prev => Math.min(prev + 25, 100))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDemoMetric(35)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-white origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-black" strokeWidth={2} />
              </div>
              <span className="text-xl font-bold">Rockmetric</span>
            </motion.div>
            
            <div className="hidden md:flex items-center gap-8">
              <motion.a 
                href="#features" 
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                whileHover={{ y: -2 }}
              >
                Features
              </motion.a>
              <motion.a 
                href="#demo" 
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                whileHover={{ y: -2 }}
              >
                Demo
              </motion.a>
              <motion.a 
                href="#testimonials" 
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                whileHover={{ y: -2 }}
              >
                Reviews
              </motion.a>
            </div>

            <div className="flex items-center gap-4">
              <motion.button 
                className="hidden md:block text-gray-400 hover:text-white transition-colors text-sm font-medium"
                whileHover={{ y: -2 }}
              >
                Sign In
              </motion.button>
              <motion.button 
                className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 z-30 md:hidden"
        >
          <div className="px-6 py-8 space-y-6">
            <a href="#features" className="block text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#demo" className="block text-gray-400 hover:text-white transition-colors">Demo</a>
            <a href="#testimonials" className="block text-gray-400 hover:text-white transition-colors">Reviews</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Sign In</a>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6" ref={heroRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">AI-Powered Analytics Platform</span>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-7xl font-bold leading-tight mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Data Intelligence
              <br />
              <span className="text-gray-500">Redefined</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transform raw data into actionable insights with our next-generation AI platform. 
              Built for modern businesses that demand precision.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16" 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 text-white placeholder-gray-500 min-w-[300px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <motion.button 
                  className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center gap-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div 
            className="mt-20 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <TrendingUp className="w-8 h-8 mb-4 text-green-400" strokeWidth={1.5} />
                  <h3 className="font-semibold mb-2">Real-time Analytics</h3>
                  <p className="text-sm text-gray-400">Live data processing with instant insights</p>
                </motion.div>
                <motion.div 
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <Brain className="w-8 h-8 mb-4 text-blue-400" strokeWidth={1.5} />
                  <h3 className="font-semibold mb-2">AI Predictions</h3>
                  <p className="text-sm text-gray-400">Machine learning powered forecasting</p>
                </motion.div>
                <motion.div 
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <Shield className="w-8 h-8 mb-4 text-purple-400" strokeWidth={1.5} />
                  <h3 className="font-semibold mb-2">Enterprise Security</h3>
                  <p className="text-sm text-gray-400">Bank-grade encryption and compliance</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-white/10">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10K+", label: "Active Users" },
              { value: "99.9%", label: "Uptime" },
              { value: "50M+", label: "Data Points" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Interactive Demo */}
      <section className="py-32 px-6" id="demo">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              See It In Action
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience real-time data analysis with our interactive demo
            </motion.p>
          </div>

          <motion.div 
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Revenue Prediction Model</h3>
                <p className="text-gray-400">Real-time AI analysis of your business metrics</p>
              </div>
              <motion.button 
                onClick={incrementMetric}
                className="mt-4 md:mt-0 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4" />
                Run Analysis
              </motion.button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Analysis Progress</span>
                <span className="text-white">{demoMetric}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${demoMetric}%` }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${demoMetric}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              {demoMetric > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
                >
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="text-green-400 text-sm font-medium">Revenue Growth</div>
                    <div className="text-2xl font-bold">+23.5%</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="text-blue-400 text-sm font-medium">Conversion Rate</div>
                    <div className="text-2xl font-bold">4.2%</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="text-purple-400 text-sm font-medium">Churn Risk</div>
                    <div className="text-2xl font-bold">Low</div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6" id="features" ref={featuresRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Built for Scale
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Enterprise-grade features designed for modern data teams
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Process millions of data points in real-time with our optimized infrastructure"
              },
              {
                icon: Brain,
                title: "AI-Powered",
                description: "Advanced machine learning algorithms that learn and adapt to your business patterns"
              },
              {
                icon: Shield,
                title: "Secure by Design",
                description: "Enterprise-grade security with end-to-end encryption and compliance certifications"
              },
              {
                icon: Globe,
                title: "Global Scale",
                description: "Distributed architecture that scales automatically with your business growth"
              },
              {
                icon: BarChart3,
                title: "Visual Analytics",
                description: "Beautiful, interactive dashboards that make complex data easy to understand"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Share insights, create reports, and collaborate seamlessly across your organization"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <feature.icon className="w-8 h-8 mb-6 text-white" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6" id="testimonials">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Trusted by Leaders
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              See what industry leaders are saying about Rockmetric
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Chief Data Officer",
                company: "TechCorp",
                text: "Rockmetric transformed how we approach data analysis. The AI insights have been game-changing for our decision-making process."
              },
              {
                name: "Michael Rodriguez",
                role: "VP of Analytics",
                company: "DataFlow Inc",
                text: "The real-time processing capabilities are incredible. We've reduced our analysis time from hours to minutes."
              },
              {
                name: "Emily Watson",
                role: "Head of Business Intelligence",
                company: "InnovateLabs",
                text: "The predictive models are remarkably accurate. We've improved our forecasting accuracy by over 40%."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white/5 border border-white/10 rounded-2xl p-16 backdrop-blur-sm relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Data?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 mb-10 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of businesses already using Rockmetric to unlock their data potential
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button 
                className="border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-black" strokeWidth={2} />
                </div>
                <span className="text-xl font-bold">Rockmetric</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Next-generation AI platform for data intelligence and business analytics.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-3 text-sm">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Features</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">API</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Documentation</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-3 text-sm">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-3 text-sm">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Security</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Compliance</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500">© 2025 Rockmetric. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <BarChart3 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  )
}