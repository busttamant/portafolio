import React from 'react'
import { Code2, Layers } from 'lucide-react'
import { Card } from '../Components/Card'
import { motion } from 'framer-motion';
import { ProjectsSection } from '../Pages/Projects'
import { Contact } from './Contact';
import { Link } from 'react-router-dom';





const SkillCard = ({ title, icon: Icon, color }) => (
    <Link to="/projects" className="block w-full h-full">
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`relative overflow-hidden rounded-xl p-6 ${color} group cursor-pointer w-full h-full`}
        >
            <div className="flex flex-col h-full justify-between">
                <div>
                    <Icon className="h-8 w-8 text-white mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-bold text-white max-w-[200px]">{title}</h3>
                </div>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_40%,rgba(255,255,255,0.1))] pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 L0,0 Z" fill="currentColor" />
                </svg>
            </div>
        </motion.div>
    </Link>
)

export const Home = () => {


    return (
        <div className="min-h-screen  px-4 py-8 lg:px-8 lg:py-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-12 lg:gap-20" >
                    {/* Left Column - Card */}
                    <div className="lg:sticky lg:top-12 lg:self-start">
                        <Card />
                    </div>

                    {/* Right Column - Content */}
                    <motion.div
                        className="space-y-20 animate-in"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}>
                        {/* Main content */}
                        <div>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
                                <span className="text-white">WEB</span>
                                <br />
                                <span className="text-gray-600">DEVELOPER</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-2xl">
                                I am a web developer passionate about creating unique and functional digital experiences.
                                I specialize in React and JavaScript and am constantly learning new technologies to enhance my skills.
                            </p>
                        </div>




                        {/* Skill cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SkillCard
                                title="DYNAMIC ANIMATION, MOTION DESIGN"
                                icon={Layers}
                                color="bg-[#ff5c28]"


                            />
                            <SkillCard
                                title="REACT, TAILWIND, FRAMER MOTION"
                                icon={Code2}
                                color="bg-[#b4ff32]"
                            />
                        </div>

                        {/* Projects Section */}
                        <div>
                            <ProjectsSection isHome={true} />
                        </div>

                        {/* Contact Section */}
                        <div>
                            <Contact isHome />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

