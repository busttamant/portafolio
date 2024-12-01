import React from 'react'
import { Card } from '../Components/Card'
import { motion } from 'framer-motion'
import { Code, Figma, Framer, BrainCog, Server, Github } from 'lucide-react'
import { Contact } from './Contact'

const tools = [
    { name: 'React', icon: Code, description: 'Building interactive UIs' },
    { name: 'Figma', icon: Figma, description: 'Design and prototyping' },
    { name: 'Framer Motion', icon: Framer, description: 'Animations and transitions' },
    { name: 'Chat GPT', icon: BrainCog, description: 'AI Assistant' },
    { name: 'Node.js', icon: Server, description: 'Client-side JavaScript' },
    { name: 'Git Hub', icon: Github, description: 'Code, collaboration, version control' },
]

export const ToolCard = ({ name, icon: Icon, description }) => {
    return (
        <motion.div
            className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col items-center text-center "
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            <Icon className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
            <p className="text-gray-400">{description}</p>
        </motion.div>
    )
}

export const Tools = () => {
    return (
        <div className="min-h-screen px-4 py-8 lg:px-8 lg:py-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-12 lg:gap-20">
                    {/* Left Column - Card */}
                    <div className="lg:sticky lg:top-8 lg:self-start hidden lg:block">
                        <Card />
                    </div>

                    {/* Right Column - Tools */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
                                <span className="text-white">MY</span>
                                <br />
                                <span className="text-gray-600">TOOLBOX</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-2xl mb-12">
                                Here are some of the key tools and technologies I use to bring ideas to life.
                                I'm always expanding my skillset and exploring new technologies.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                {tools.map((tool, index) => (
                                    <ToolCard key={index} {...tool} />
                                ))}
                            </div>

                            <div>
                                <Contact />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

