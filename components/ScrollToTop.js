import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTop({ className }) {
    const [displayScrollBox, setDisplayScrollBOx] = useState('hidden');

    const addClassName = className ? className : '';

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let yPosition = window.pageYOffset;
            if (yPosition > 1000) {
                setDisplayScrollBOx('block');
            } else {
                setDisplayScrollBOx('hidden');
            }
        });
    }, []);

    return (
        <>
            <a
                href="#home"
                className={`${displayScrollBox} bg-black-500 border border-white-700 text-white-500 text-sm rounded-md px-2 py-1 transition-all flex items-center z-[90] ${addClassName}`}
            >
                <FiArrowUp size={20} />
            </a>
        </>
    );
}
