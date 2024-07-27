import Link from 'next/link';

const SideBar = () => {
    return (
        <div className="bg-gray-900 text-white h-full w-64 p-4 flex flex-col">
            <div className="text-2xl font-bold mb-6">Untitled UI</div>
            <nav className="flex-1">
                <ul>
                    <li className="mb-4">
                        <Link href="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <span className="ml-2">Home</span>
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <span className="ml-2">All Files</span>
                        </Link>
                    </li>
                    {/* Add more navigation items here */}
                </ul>
            </nav>
            <div className="mt-auto">
                <ul>
                    <li className="mb-4">
                        <Link href="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
                            <span className="ml-2">Settings</span>
                        </Link>
                    </li>
                </ul>
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
