"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaFileAlt, FaLock, FaShareAlt, FaTrash, FaPalette, FaBell, FaCog } from 'react-icons/fa';

const SideBar = () => {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home', icon: FaHome },
        { href: '/all-files', label: 'All Files', icon: FaFileAlt },
        { href: '/private-files', label: 'Private Files', icon: FaLock },
        { href: '/shared-with-me', label: 'Shared With Me', icon: FaShareAlt },
        { href: '/deleted-files', label: 'Deleted Files', icon: FaTrash },
        { href: '/design', label: 'Design', icon: FaPalette },
        { href: '/notifications', label: 'Notifications', icon: FaBell },
        { href: '/settings', label: 'Settings', icon: FaCog },
    ];

    return (
        <div className="bg-gray-900 text-white h-full w-64 p-4 flex flex-col">
            <div className="text-2xl font-bold mb-6">Untitled UI</div>
            <nav className="flex-1">
                <ul>
                    {links.map(({ href, label, icon: Icon }) => (
                        <li key={href} className="mb-4">
                            <Link href={href} className={`flex items-center p-2 rounded ${pathname === href ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                                <Icon />
                                <span className="ml-2">{label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-auto">
                <div className="text-sm text-gray-400 mt-6">
                    <div>Storage</div>
                    <div className="bg-gray-800 h-2 rounded mt-1">
                        <div className="bg-blue-500 h-full rounded" style={{ width: '92%' }}></div>
                    </div>
                    <div className="mt-1">9.2 GB of 10 GB used</div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
