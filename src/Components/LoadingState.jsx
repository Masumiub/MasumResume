import React from 'react';
import Lottie from 'lottie-react';
import loadingLottie from '../assets/Animation - loading.json'

const LoadingState = () => {
    return (
        <div>
            <div className="flex flex-col mx-auto justify-center h-screen">
            <div className="mx-auto"><Lottie className="w-[200px] md:w-[300px] lg:w-[400px] mx-auto" animationData={loadingLottie} loop={true} ></Lottie></div>
        </div>
        </div>
    );
};

export default LoadingState;