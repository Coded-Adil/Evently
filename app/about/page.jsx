import React from "react";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 flex items-center justify-center py-12 px-4">
			<div className="max-w-4xl w-full bg-gray-950/80 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 border border-gray-800">
				<div className="flex-1 flex flex-col justify-center">
					<h2 className="text-4xl font-bold text-white mb-4">About Evently</h2>
					<p className="text-gray-300 mb-6 text-lg">Evently is your modern solution for discovering, planning, and managing events. Our mission is to make event experiences seamless and memorable for everyone.</p>
					<ul className="space-y-4 mb-8">
						<li className="flex items-center gap-3 text-gray-200">
							<svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
							<span>Discover trending events in your city</span>
						</li>
						<li className="flex items-center gap-3 text-gray-200">
							<svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
							<span>Plan and organize with ease</span>
						</li>
						<li className="flex items-center gap-3 text-gray-200">
							<svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5" /></svg>
							<span>Connect with people and communities</span>
						</li>
					</ul>
				</div>
				<div className="flex-1 flex flex-col gap-6 justify-center items-center">
					<div className="w-full flex justify-center">
						<img src="https://i.ibb.co.com/ccgC33ZN/pexels-bertellifotografia-2467506.jpg" alt="Evently Team" className="rounded-xl shadow-lg border border-gray-800 object-cover w-72 h-44" />
					</div>
					<div className="w-full flex justify-center">
						<img src="https://i.ibb.co.com/ZRsj73VJ/pexels-bence-szemerey-337043-7081159.jpg" alt="Our Events" className="rounded-xl shadow-lg border border-gray-800 object-cover w-72 h-44" />
					</div>
				</div>
			</div>
		</div>
	);
}
