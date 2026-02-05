import React from "react";
import Logo from "../assets/Logo2.svg";
import Path1 from "../assets/Path1.png";
import Path2 from "../assets/Path2.png";
import Path3 from "../assets/Path3.png";
import Path4 from "../assets/Path4.png";
function FooterSection() {
    return (
        <>
            <section className="bg-gray-50 py-20 text-center">
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight mb-8">
                    Pellentesque suscipit <br /> fringilla libero eu.
                </h2>

                <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2">
                    Get a Demo <span>→</span>
                </button>
            </section>
            <footer className="bg-[#263238] text-gray-300">
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src={Logo} alt="" />
                        </div>

                        <p className="text-sm mb-6">
                            Copyright © 2020 Nexcent ltd.
                            <br />
                            All rights reserved
                        </p>

                        <div className="flex gap-4">
                            {[Path1, Path2, Path3, Path4].map((icon, index) => (
                                <div
                                    key={index}
                                    className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center hover:bg-green-600 transition cursor-pointer"
                                >
                                    <img
                                        src={icon}
                                        alt="social icon"
                                        className="w-4 h-4 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white cursor-pointer">About us</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                            <li className="hover:text-white cursor-pointer">Contact us</li>
                            <li className="hover:text-white cursor-pointer">Pricing</li>
                            <li className="hover:text-white cursor-pointer">Testimonials</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white cursor-pointer">Help center</li>
                            <li className="hover:text-white cursor-pointer">Terms of service</li>
                            <li className="hover:text-white cursor-pointer">Legal</li>
                            <li className="hover:text-white cursor-pointer">Privacy policy</li>
                            <li className="hover:text-white cursor-pointer">Status</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Stay up to date
                        </h4>
                        <div className="flex items-center bg-gray-600 rounded-md px-4 py-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-transparent outline-none text-sm text-white placeholder-gray-300 flex-1"
                            />
                            <span className="text-white ml-2 cursor-pointer">➤</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterSection;