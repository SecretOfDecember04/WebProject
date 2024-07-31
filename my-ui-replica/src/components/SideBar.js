import Link from 'next/link';
import { FaHome, FaFileAlt, FaLock, FaShareAlt, FaTrash, FaPalette, FaBell, FaCog } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="bg-gray-900 text-white h-full w-64 p-4 flex flex-col">
            <div className="text-2xl font-bold mb-6">Untitled UI</div>
            <nav className="flex-1">
                <ul>
                    <li className="mb-4">
                        <Link href="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <FaHome />
                            <span className="ml-2">Home</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/all-files" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <FaFileAlt />
                            <span className="ml-2">All Files</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/private-files" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <FaLock />
                            <span className="ml-2">Private Files</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/shared-with-me" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <FaShareAlt />
                            <span className="ml-2">Shared With Me</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/deleted-files" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <FaTrash />
                            <span className="ml-2">Deleted Files</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/design" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <FaPalette />
                            <span className="ml-2">Design</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/notifications" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <FaBell />
                            <span className="ml-2">Notifications</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/settings" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <FaCog />
                            <span className="ml-2">Settings</span>
                        </Link>
                    </li>
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
