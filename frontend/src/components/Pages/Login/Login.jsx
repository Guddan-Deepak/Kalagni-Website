import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md border border-slate-100"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                        Welcome Back
                    </h2>
                    <p className="text-slate-500 mt-2">Sign in to continue your artistic journey</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-slate-600 cursor-pointer">
                            <input type="checkbox" className="mr-2 rounded text-cyan-500 focus:ring-cyan-400" />
                            Remember me
                        </label>
                        <a href="#" className="text-cyan-600 hover:text-cyan-700 font-medium">Forgot Password?</a>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                    >
                        Sign In
                    </motion.button>
                </form>

                <div className="mt-8 text-center text-slate-500 text-sm">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-cyan-600 font-bold hover:underline">
                        Create Account
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
