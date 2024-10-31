import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const OffersPopup = () => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-5 left-5 z-50">
            <div className="relative bg-black w-[100px] h-[90px] text-white rounded-[50%] px-4 py-2 flex items-center justify-center">
                <span className="text-center">Get 5%<br />off</span>
                <button
                    onClick={handleClose}
                    className="absolute top-[-15px] right-[-30px] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 bg-gray-800 text-white rounded-full focus:outline-none"
                >
                    <AiOutlineClose />
                </button>
            </div>
        </div>
    );
};

export default OffersPopup;
