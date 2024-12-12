import React, { useRef } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, ArrowRight, Mail, Twitter, Instagram, Dribbble } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Card } from '../Components/Card'



export const Contact = ({ isHome }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState({
        type: null,
        message: '',
    })

    const form = useRef();


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus({ type: null, message: '' })

        try {
            await emailjs.sendForm(
                'service_yipl0p2',
                'template_xngrym3',
                form.current, {
                publicKey:
                    'KoVDS5phXVc_-eXLj',
            })

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.',
            })
            e.target.reset()
        } catch (error) {

            console.error('EmailJS error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.',
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (

        <div className="text-white" >
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}>

                <div>
                    < h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
                        <span className="text-white">LET´S WORK</span>
                        <br />
                        <span className="text-gray-600">TOGHETER</span>
                    </h1>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6 mt-3 ml-3">
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="relative"
                    >
                        <p className='mb-0.5 ml-3'>Name</p>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                            className="w-full bg-transparent border border-gray-800 rounded-lg p-4  focus:outline-none focus:border-white transition-colors"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative"
                    >
                        <p className='mb-0.5 ml-3'>Email</p>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your@email.com"
                            required
                            className="w-full bg-transparent border border-gray-800 rounded-lg p-4 focus:outline-none focus:border-white transition-colors"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative"
                    >
                        <p className='mb-0.5 ml-3'> Message</p>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            rows={5}
                            className="w-full bg-transparent border border-gray-800 rounded-lg p-4  focus:outline-none focus:border-white transition-colors resize-none"
                        />
                    </motion.div>
                    <motion.button
                        type="submit"
                        value="Send"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white text-black rounded-lg p-4 font-medium   flex items-center justify-center gap-2 disabled:opacity-50"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <Send className="w-5 h-5 animate-pulse" />
                                Sending...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                Send Message
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        )}
                    </motion.button>
                    {status.type && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-center p-3 rounded-lg ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                                }`}
                        >
                            {status.message}
                        </motion.div>
                    )}
                </form>
            </motion.div>
        </div>

    )
}


export const ContactPage = () => {
    return (
        <div className="min-h-screen  px-4 py-8 lg:px-8 lg:py-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-12 lg:gap-20">
                    {/* Left Column - Card */}
                    <div className="lg:sticky lg:top-8 lg:self-start hidden lg:block">
                        <Card />
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="space-y-12">
                        <Contact isHome={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}


