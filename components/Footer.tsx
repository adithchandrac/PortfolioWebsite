import ChromaGrid from '@/blocks/Components/ChromaGrid/ChromaGrid';

const items = [
	{
		image: '/logo.png',
		title: 'Adith Chandrasekaran',
		subtitle: 'Senior CS Student & PM',
		handle: '@adithchandrac',
		borderColor: '#4F46E5',
		gradient: 'linear-gradient(145deg, #4F46E5, #000)',
		url: 'https://github.com/adithchandrac',
	},
	// ...add more team or highlight items as needed...
];

export default function Footer() {
	return (
		<footer className="relative py-12">
			<div className="absolute inset-0 -z-10">
				<ChromaGrid
					items={items}
					radius={300}
					damping={0.45}
					fadeOut={0.6}
					ease="power3.out"
				/>
			</div>
			<div className="container mx-auto text-center text-sm text-gray-400">
				© 2025 Adith Chandrasekaran ·{' '}
				<a href="#top" className="ml-2">
					Back to top ↑
				</a>
			</div>
		</footer>
	);
}
