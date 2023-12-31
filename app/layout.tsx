import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Healthcues.org - Your Guide to Healthy Living',
	description:
		'Healthcues.org, provides information about diseases, symptoms, and treatments. You can find the most common symptoms of diseases and information about their treatments.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className='bg-orange-200' lang='en'>
			<head></head>
			<body className={inter.className}>
				<div className='bg-orange-200 text-gray-800 h-full'>
					<Providers>{children}</Providers>
				</div>
			</body>
		</html>
	);
}
