
import React from "react";

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 flex items-center justify-center py-12 px-4">
			<div className="max-w-3xl w-full bg-gray-950/80 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 border border-gray-800">
				<div className="flex-1 flex flex-col justify-center">
					<h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
					<p className="text-gray-300 mb-6">We'd love to hear from you! Fill out the form and we'll get back to you soon.</p>
					<ul className="mb-6 space-y-2">
						<li className="flex items-center gap-2 text-gray-200">
							<svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4" /></svg>
							<span>contact@evently.com</span>
						</li>
						<li className="flex items-center gap-2 text-gray-200">
							<svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 8v4m0-4V4" /></svg>
							<span>+1 (555) 123-4567</span>
						</li>
						<li className="flex items-center gap-2 text-gray-200">
							<svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5" /></svg>
							<span>123 Evently St, City, Country</span>
						</li>
					</ul>
				</div>
				<form className="flex-1 space-y-6">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
						<input type="text" id="name" name="name" required className="mt-1 block w-full rounded-lg border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400" placeholder="Your name" />
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
						<input type="email" id="email" name="email" required className="mt-1 block w-full rounded-lg border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400" placeholder="you@email.com" />
					</div>
					<div>
						<label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
						<textarea id="message" name="message" rows="4" required className="mt-1 block w-full rounded-lg border-gray-700 bg-gray-900 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400" placeholder="Type your message..." />
					</div>
					<button type="submit" className="w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">Send Message</button>
				</form>
			</div>
		</div>
	);
}
