import React from "react";
import { Card } from "../Components/Card";
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Contact } from "./Contact";
import imgCarwash from '../assets/Carwash-Website.png'
import imgSoccer from '../assets/Soocer-Website.png'

export const projects = [
    {
        id: 1,
        title: "RECENT ",
        subtitle: "PROJECTS",
        items: [
            {
                id: "animation",
                title: "CARWASH WEBSITE",
                image: imgCarwash,
                color: " rgb(21, 19, 18)",
                link: "https://autolavado-el-galan.vercel.app/",
            },
            {
                id: "development",
                title: "SOCCERTEAM WEBSITE",
                image: imgSoccer,
                color: " rgb(21, 19, 18)",
                link: "https://ksv-amtshainersdorf.vercel.app/",
            },
        ],
    },
];

export const ProjectCard = ({ title, link, image }) => {
    return (
        <motion.a
            target="_blank"
            href={link}
            className={`group relative block  w-9/12 overflow-hidden  rounded-2xl  p-8`}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(182, 180, 189, 0.2)", }}
            transition={{ duration: 0.2 }} >

            <div className="relative flex h-full ">
                <img className="w-24 h-20 rounded  border-transparent"
                    src={image} />

                <div className="mb-4 flex items-start justify-between flex-1">
                    <h3 className="text-xl font-bold text-white md:text-2xl pl-4 pt-5">{title}</h3>

                    <motion.div
                        className="flex items-center justify-center text-white opacity-0 transition-opacity group-hover:opacity-100"
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                    >

                        <ArrowRight className="h-6 w-6 text-white " />

                    </motion.div>
                </div>
            </div>
        </motion.a >
    )
}

export const ProjectsSection = ({ isHome }) => {

    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
        >
            <div className="flex-1 flex flex-col">
                {projects.map((section) => (
                    <div key={section.id} className="">
                        <div className="mb-12">
                            <div>
                                < h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
                                    <span className="text-white">{section.title}</span>
                                    <br />
                                    <span className="text-gray-600">{section.subtitle}</span>
                                </h1>
                            </div>
                        </div>
                        <div className="grid gap-6 grid-cols-1 ">
                            {section.items.map((project) => (
                                <ProjectCard key={project.id} {...project}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div >
    )
}
export const ProjectsPage = () => {
    return (

        <div className="min-h-screen  px-4 py-8 lg:px-8 lg:py-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-12 lg:gap-20 ">
                    {/* Left Column - Card */}
                    <div className="lg:sticky lg:top-8 lg:self-start hidden lg:block">
                        <Card />
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="space-y-12 ">
                        <ProjectsSection isHome={false} />

                        <div>
                            <Contact />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};
