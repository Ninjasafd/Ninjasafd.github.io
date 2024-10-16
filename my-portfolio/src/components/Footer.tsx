import React from 'react';

export default function Footer() {
    return (
        <footer className="py-10 text-white">
            <div className="container mx-auto max-w-7xl px-6 md:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Contact Section */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
                        <p>Email: <a href="mailto:jeffreypan@example.com" className="text-blue-500 hover:underline">jeffreypan@example.com</a></p>
                        <p>Phone: (123) 456-7890</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        {/* <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#work" className="hover:underline">Work</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul> */}
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="https://github.com/Ninjasafd" aria-label="GitHub" className="hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.262.82-.583v-2.16c-3.338.727-4.042-1.616-4.042-1.616-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.204.084 1.837 1.241 1.837 1.241 1.07 1.834 2.807 1.304 3.492.997.107-.774.419-1.304.762-1.604-2.664-.305-5.467-1.334-5.467-5.93 0-1.31.467-2.381 1.235-3.22-.123-.303-.535-1.527.118-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.004-.404 1.02.005 2.047.138 3.005.404 2.292-1.552 3.299-1.23 3.299-1.23.655 1.648.243 2.872.12 3.176.77.839 1.233 1.91 1.233 3.22 0 4.606-2.807 5.623-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .323.218.698.826.58C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/jeffrey-pan" aria-label="LinkedIn" className="hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.543C0 23.225.792 24 1.77 24h20.46C23.207 24 24 23.225 24 22.271V1.729C24 .774 23.207 0 22.23 0zM7.06 20.452H3.564V9.014H7.06v11.438zM5.314 7.698a2.04 2.04 0 01-2.05-2.033 2.041 2.041 0 012.05-2.033 2.041 2.041 0 012.05 2.033 2.04 2.04 0 01-2.05 2.033zm14.69 12.754h-3.5V15.37c0-1.211-.024-2.771-1.691-2.771-1.694 0-1.953 1.323-1.953 2.688v5.164h-3.5V9.014h3.365v1.563h.05c.468-.884 1.61-1.814 3.315-1.814 3.543 0 4.196 2.333 4.196 5.368v6.32z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Jeffrey Pan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
