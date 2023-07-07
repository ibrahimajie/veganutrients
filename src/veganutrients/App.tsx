import React, { useState } from 'react';
import Water from './components/1.water';
import Carbohydrate from './components/2.carbohydrate';
import Protein from './components/3.protein';
import Minerals from './components/4.minerals';
import Vitamin from './components/5.vitamin';
import Fiber from './components/6.fiber';
import Fat from './components/7.fat';
import './styles.css';

export default function App() {

    const [isShown, setIsShown] = useState('');

    console.log(isShown);

    return (
        <>
            <div className="container">
                <p className="triangle" onClick={() => setIsShown('7')}>
                    <b className="text">F</b>
                </p>

                <p className="trapezoid5" onClick={() => setIsShown('6')}>
                    <b className="text">F</b>
                </p>

                <p className="trapezoid4" onClick={() => setIsShown('5')}>
                    <b className="text">V</b>
                </p>

                <p className="trapezoid3" onClick={() => setIsShown('4')}>
                    <b className="text">M</b>
                </p>

                <p className="trapezoid2" onClick={() => setIsShown('3')}>
                    <b className="text">P</b>
                </p>

                <p className="trapezoid1" onClick={() => setIsShown('2')}>
                    <b className="text">C</b>
                </p>

                <p className="rectangle" onClick={() => setIsShown('1')}>
                    <b className="text">W</b>
                </p>
            </div>

            <div className="container">
            {isShown === '1' ? 'WATER' :
                    isShown === '2' ? 'CARBOHYDRATE' :
                        isShown === '3' ? 'PROTEIN' :
                            isShown === '4' ? 'MINERALS' :
                                isShown === '5' ? 'VITAMIN' :
                                    isShown === '6' ? 'FIBER' :
                                        isShown === '7' ? 'FAT' :
                                            ''}
            </div>

            <div className="flex-container">
                {isShown === '1' ? <Water /> :
                    isShown === '2' ? <Carbohydrate /> :
                        isShown === '3' ? <Protein /> :
                            isShown === '4' ? <Minerals /> :
                                isShown === '5' ? <Vitamin /> :
                                    isShown === '6' ? <Fiber /> :
                                        isShown === '7' ? <Fat /> :
                                            ''}
            </div>
        </>
    )
}