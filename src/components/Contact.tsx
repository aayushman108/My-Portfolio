"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-black/30">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>

                <div className="flex justify-center gap-8 mb-12">
                     <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all duration-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="mailto:hello@example.com" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-red-400 transition-all duration-300">
                        <FaEnvelope size={24} />
                    </a>
                    <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all duration-300">
                        <FaTwitter size={24} />
                    </a>
                </div>

                <a
                    href="mailto:hello@example.com"
                    className="inline-block px-8 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold"
                >
                    Say Hello
                </a>
                
                 <footer className="mt-20 pt-8 border-t border-white/5 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Aayushman Sharma. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
