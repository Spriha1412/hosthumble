import Logo from '@/components/Logo'
import Link from 'next/link'

const footerSections = [
    {
        title: 'Hosting',
        links: [
            { label: 'Web Hosting', href: '#' },
            { label: 'WordPress Hosting', href: '#' },
            { label: 'Hosting for WooCommerce', href: '#' },
            { label: 'Reseller Hosting', href: '#' },
            { label: 'Hosting for Agencies', href: '#' },
            { label: 'Windows Hosting', href: '#' },
            { label: 'Shared Hosting', href: '#' },
            { label: 'Node.js Hosting', href: '#' },
        ],
    },
    {
        title: 'Domains',
        links: [
            { label: 'Domains', href: '#' },
            { label: 'Free Domain', href: '#' },
            { label: 'Cheap Domains', href: '#' },
            { label: 'Domain Transfer', href: '#' },
            { label: 'SSL Certificates', href: '#' },
        ],
    },
    {
        title: 'Servers',
        links: [
            { label: 'VPS Hosting', href: '#' },
            { label: 'Windows VPS', href: '#' },
            { label: 'Managed VPS', href: '#' },
            { label: 'n8n VPS', href: '#' },
            { label: 'OpenClaw VPS', href: '#' },
            { label: 'cPanel VPS', href: '#' },
            { label: 'Dedicated Server', href: '#' },
            { label: 'GPU Server', href: '#' },
            { label: 'Bare Metal Server', href: '#' },
        ],
    },
    {
        title: 'Application',
        links: [
            { label: 'Odoo Hosting', href: '#' },
            { label: 'Ghost Hosting', href: '#' },
            { label: 'Supabase Hosting', href: '#' },
            { label: 'Nextcloud Hosting', href: '#' },
        ],
    },
    {
        title: 'Cloud',
        links: [
            { label: 'Cloud Hosting', href: '#' },
            { label: 'Managed AWS', href: '#' },
            { label: 'Cloud VPS', href: '#' },
            { label: 'GPU Cloud', href: '#' },
            { label: 'Google Workspace', href: '#' },
        ],
    },
    {
        title: 'Tools & Ecosystem',
        links: [
            { label: 'AI Website Builder', href: '#' },
            { label: 'AI Business Name Generator', href: '#' },
            { label: 'Smart Web Tools', href: '#' },
            { label: 'Refer & Earn', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '#' },
            { label: 'Customer Reviews', href: '#' },
            { label: 'Success Stories', href: '#' },
            { label: 'Brand Assets', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Knowledge Base', href: '#' },
            { label: 'Video Tutorials', href: '#' },
            { label: 'Contact Us', href: '#' },
            { label: 'Sitemap', href: '#' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'SLA', href: '#' },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="border-t py-16 md:py-24" id="about">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-12">
                    {/* Left Brand Column */}
                    <div className="space-y-4 lg:col-span-4">
                        <Link href="/" aria-label="go home" className="block size-fit">
                            <span className="text-xl font-bold">HostHumble</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                            Founded in 2020, HostHumble is a web hosting provider that helps businesses, developers, and startups host their websites reliably globally.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X/Twitter"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" />
                                </svg>
                            </Link>
                            <Link
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                                </svg>
                            </Link>
                            {/* <Link
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.287-.01-1.047-.015-2.055-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.805 1.304 3.49.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.465-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.624-5.48 5.921.43.372.815 1.104.815 2.222 0 1.606-.014 2.903-.014 3.293 0 .322.216.699.825.58C20.565 21.795 24 17.296 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </Link> */}
                        </div>
                    </div>

                    {/* Right Link Columns Grid */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
                        {footerSections.map((section, idx) => (
                            <div key={idx} className="space-y-3">
                                <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
                                <ul className="space-y-2 text-xs">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link
                                                href={link.href}
                                                className="text-muted-foreground hover:text-foreground transition-colors">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="my-8 border-border" />

                <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
                    <span>© {new Date().getFullYear()} HostHumble. All rights reserved.</span>
                    <span>Designed for high performance.</span>
                </div>
            </div>
        </footer>
    )
}