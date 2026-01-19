import './globals.css'

export const metadata = {
    title: 'IEEE LINK Camp 2025 | Kerala Section',
    description: 'IEEE Kerala Section LINK Camp 2025 - A leadership and networking event for passionate volunteers and emerging leaders. Join us in Kochi on January 24-25, 2026.',
    keywords: 'IEEE, LINK Camp, Kerala Section, Leadership, Volunteering, Technology',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    )
}
