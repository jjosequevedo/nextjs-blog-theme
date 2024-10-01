const Header = () => {

    return (
        <header className="flex items-center justify-between py-2 border-b">
            <a href="#" className="px-2 lg:px-0 uppercase font-bold text-purple-800">
                LOGO
            </a>
            <ul className="inline-flex items-center">
                <li className="px-2 md:px-4">
                    <a href="#" className="text-purple-600 font-semibold hover:text-purple-500"> Home </a>
                </li>
                <li className="px-2 md:px-4">
                    <a href="#" className="text-gray-500 font-semibold hover:text-purple-500"> About </a>
                </li>
                <li className="px-2 md:px-4">
                    <a href="#" className="text-gray-500 font-semibold hover:text-purple-500"> Press </a>
                </li>
                <li className="px-2 md:px-4">
                    <a href="#" className="text-gray-500 font-semibold hover:text-purple-500"> Contact </a>
                </li>
                <li className="px-2 md:px-4 hidden md:block">
                    <a href="#" className="text-gray-500 font-semibold hover:text-purple-500"> Login </a>
                </li>
                <li className="px-2 md:px-4 hidden md:block">
                    <a href="#" className="text-gray-500 font-semibold hover:text-purple-500"> Register </a>
                </li>
            </ul>

        </header>
    );
};

export default Header;
