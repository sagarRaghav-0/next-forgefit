'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Icons
import { FaCarrot, FaDumbbell } from 'react-icons/fa';
import { FiBarChart2, FiEye, FiHome, FiSettings } from 'react-icons/fi';
import { RiMedalLine } from 'react-icons/ri';

const SideBar = () => {
    const pathname = usePathname();

    // const [isMobile, setIsMobile] = useState(false);
    const [workOuts, setWorkOuts] = useState('');
    const [settings, setSettings] = useState('');
    const [progress, setProgress] = useState('');
    const [nutritions, setNutritions] = useState('');
    const [leaderBoard, setLeaderBoard] = useState('');
    const [dashboard, setDashBoard] = useState('');
    const [vision, setVision] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width > 746) {
                setWorkOuts('Workouts');
                setSettings('Settings');
                setProgress('Progress');
                setNutritions('Nutrition');
                setLeaderBoard('Leaderboard');
                setDashBoard('Dashboard');
                setVision('vision');


            }
            else {
                setWorkOuts('');
                setSettings('');
                setProgress('');
                setNutritions('');
                setLeaderBoard('');
                setDashBoard('');
                setVision('');
            }

        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const linkClasses = (path: string) =>
        `flex items-center gap-3 px-6 py-4 ${pathname === path
            ? 'bg-gray-100 border-r-4 border-gray-700 text-gray-800 font-medium'
            : 'hover:bg-gray-50 text-gray-700'
        }`;

    return (
        <div className="w-fit h-screen border-r border-gray-200 bg-white">
            <div className="flex flex-col">
                <Link href="/dashboard" className={linkClasses('/dashboard')}>
                    <FiHome className="text-xl" />
                    <span>{dashboard}</span>
                </Link>

                <Link href="/dashboard/workouts" className={linkClasses('/dashboard/workouts')}>
                    <FaDumbbell className="text-xl" />
                    <span>{workOuts}</span>
                </Link>

                <Link href="/dashboard/progress" className={linkClasses('/dashboard/progress')}>
                    <FiBarChart2 className="text-xl" />
                    <span>{progress}</span>
                </Link>

                <Link href="/dashboard/nutritions" className={linkClasses('/dashboard/nutritions')}>
                    <FaCarrot className="text-xl" />
                    <span>{nutritions}</span>
                </Link>

                <Link href="/dashboard/leaderboard" className={linkClasses('/dashboard/leaderboard')}>
                    <RiMedalLine className="text-xl" />
                    <span>{leaderBoard}</span>
                </Link>

                <Link href="/dashboard/settings" className={linkClasses('/dashboard/settings')}>
                    <FiSettings className="text-xl" />
                    <span>{settings}</span>
                </Link>
                <Link href="/dashboard/vision" className={linkClasses('/dashboard/vision')}>
                    <FiEye className="text-xl" />
                    <span>{vision}</span>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
