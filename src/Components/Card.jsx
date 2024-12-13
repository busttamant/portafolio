import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, Linkedin } from 'lucide-react'
import img1 from "../assets/Logo.png"

const CardItem = motion.a;

export const Card = () => {
    return (
        <div className="sticky top-12">
            <motion.div
                className="bg-[#1A1A1A] rounded-3xl p-8 lg:p-12 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={img1}
                    alt="Daniel"
                    className="w-48 h-48 rounded-full mb-6 border-4 "
                />
                <h2 className="text-3xl font-bold text-white mb-2">DANIEL </h2>
                <p className="text-gray-300 mb-8 max-w-sm mt-8" >
                    Passionate web developer crafting functional, engaging digital experiences. Skilled in React, JavaScript, and responsive design, creating seamless and impactful solutions.
                </p>
                <div className="flex items-center justify-center gap-4 mt-3">
                    <SocialLink href="mailto:busttamantdani@gmail.com" icon={Mail} />
                    <SocialLink href="https://www.instagram.com/busttamant/" icon={Instagram} />
                    <SocialLink href="https://www.linkedin.com/in/daniel-busttamant/" icon={Linkedin} />
                </div>
            </motion.div>
        </div>
    )
}

const SocialLink = ({ href, icon: Icon }) => (
    <CardItem
        href={href}
        target="_blank"
        className="text-gray-400 hover:text-white transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        <Icon size={24} />
    </CardItem>
)

