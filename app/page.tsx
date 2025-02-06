"use client";

import { motion } from "framer-motion";
import {
  ChevronDown,
  LineChart,
  Brain,
  Lightbulb,
  Target,
  ArrowRight,
  ChartBar,
  TrendingUp,
  PieChart,
  Zap,
  TrendingDown,
  Users,
  BarChart4,
  LineChart as LineChart3,
  Activity,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "../components/defined/Footer";

export default function Home() {
  const futureApplications = [
    {
      text: "AI-driven predictions for market trends",
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
    },
    {
      text: "Optimized automation for businesses",
      icon: <Activity className="w-5 h-5 text-primary" />,
    },
    {
      text: "Scalable solutions for future industries",
      icon: <Rocket className="w-5 h-5 text-primary" />,
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const visualizations = [
    {
      title: "Time Series Analysis",
      icon: <TrendingUp className="w-6 h-6" />,
      overview:
        "Analysis of temporal patterns in our dataset revealed significant trends over the past year.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      takeaways: [
        "Peak activity observed during Q2 2023",
        "15% increase in overall metrics",
        "Seasonal patterns identified in user behavior",
      ],
    },
    {
      title: "Distribution Analysis",
      icon: <ChartBar className="w-6 h-6" />,
      overview:
        "Statistical distribution of key metrics showing the spread and concentration of data points.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800",
      takeaways: [
        "Normal distribution observed in user metrics",
        "Significant outliers in the upper quartile",
        "Cluster formation around mean values",
      ],
    },
    {
      title: "Demographic Breakdown",
      icon: <PieChart className="w-6 h-6" />,
      overview:
        "Segmentation analysis revealing key demographic patterns and user characteristics.",
      image: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?w=800",
      takeaways: [
        "Dominant user segment identified",
        "Geographic concentration in urban areas",
        "Age distribution peaks at 25-34 range",
      ],
    },
  ];

  const insights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Metrics",
      content:
        "85% improvement in system efficiency after implementing optimizations",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Cost Reduction",
      content:
        "Identified potential for 30% cost reduction through process improvements",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Behavior",
      content: "Discovered key user segments with distinct usage patterns",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: <BarChart4 className="w-6 h-6" />,
      title: "Market Analysis",
      content:
        "Identified 3 major market opportunities through data correlation",
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      icon: <LineChart3 className="w-6 h-6" />,
      title: "Growth Trends",
      content: "Projected 40% growth in target metrics over next quarter",
      color: "from-violet-500/20 to-purple-500/20",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Focus",
      content: "Data suggests focusing on mobile platform optimization",
      color: "from-cyan-500/20 to-blue-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-background/50 to-accent/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Data Analysis Project
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-primary/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Uncovering insights through comprehensive data analysis
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary/80"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-accent/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-primary">
              <Target className="w-8 h-8" />
              Problem Statement
            </h2>
            <Card className="p-6 mb-8 hover:shadow-lg transition-shadow border-primary/20 bg-background/60 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-primary/80">
                [Your problem statement goes here. Explain what motivated you to
                work on this project and why it's important.]
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="py-20 bg-gradient-to-b from-accent/20 to-background/80">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-primary">
              <LineChart className="w-8 h-8" />
              Analysis Process
            </h2>

            {/* Enhanced Visualization Cards */}
            <div className="space-y-12">
              {visualizations.map((viz, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-8 hover:shadow-2xl transition-all duration-500 border-primary/20 bg-background/60 backdrop-blur-sm group">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Content Side */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                            {viz.icon}
                          </div>
                          <h3 className="text-2xl font-semibold text-primary">
                            {viz.title}
                          </h3>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-medium text-primary/90 mb-2">
                              Overview
                            </h4>
                            <p className="text-primary/80 leading-relaxed">
                              {viz.overview}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-lg font-medium text-primary/90 mb-2">
                              Key Takeaways
                            </h4>
                            <ul className="space-y-2">
                              {viz.takeaways.map((takeaway, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center gap-2 text-primary/80"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                  {takeaway}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Image Side */}
                      <div className="relative overflow-hidden rounded-xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <motion.img
                          src={viz.image}
                          alt={viz.title}
                          className="w-full h-full object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Insights Section */}
      <section className="py-20 bg-accent/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 text-primary">
              <Brain className="w-8 h-8" />
              Key Insights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <Card className="group relative overflow-hidden p-6 hover:shadow-2xl transition-all duration-500 border-primary/20 bg-background/60 backdrop-blur-sm">
                    {/* Animated background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                    />

                    {/* Content wrapper */}
                    <div className="relative z-10">
                      {/* Icon with animated background */}
                      <motion.div
                        className="mb-4 inline-block"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                          {insight.icon}
                        </div>
                      </motion.div>

                      {/* Title with animated underline */}
                      <div className="relative mb-2">
                        <h3 className="text-xl font-semibold text-primary">
                          {insight.title}
                        </h3>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/30 group-hover:w-full transition-all duration-500" />
                      </div>

                      {/* Content with fade-in effect */}
                      <motion.p
                        className="text-primary/80 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {insight.content}
                      </motion.p>

                      {/* Hover indicator */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-primary/60" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {/* Section Heading */}
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary">
              <Lightbulb className="w-8 h-8 text-yellow-500" />
              Conclusions & Impact
            </h2>

            {/* Main Card */}
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20 bg-background/60 backdrop-blur-md rounded-2xl">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
              >
                <motion.p
                  className="text-lg leading-relaxed text-primary/80"
                  variants={fadeIn}
                >
                  The findings of this project highlight significant
                  advancements in [your field]. These results pave the way for
                  innovative applications, improving efficiency and
                  decision-making across various industries.
                </motion.p>

                {/* Future Applications Section */}
                <motion.div
                  className="pt-6 border-t border-primary/20"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-primary" />
                    Future Applications
                  </h3>
                  <ul className="space-y-3">
                    {futureApplications.map((app, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition duration-300 cursor-pointer"
                        variants={fadeIn}
                      >
                        {app.icon}
                        <span className="text-primary/80">{app.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}
