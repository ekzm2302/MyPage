import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Intro = () => {
    const transition = { duration: 2, type: 'spring' };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Welcome To</span>
                    <span>Park Chan Jae</span>
                    <span>
                        FrontEnd Developer
                        <br />
                        BackEnd Developer 포트폴리오 입니다.
                    </span>
                </div>

                <button
                    onClick={() =>
                        window.open(
                            'https://www.notion.so/Park-Chan-Jae-f49f571eb9e845b299f1455b0b222e45?pvs=4',
                            '_blank'
                        )
                    }
                    className="button i-button"
                >
                    프로젝트
                </button>
                <div className="i-icons">
                    <a href="https://github.com/ekzm2302" target="_blank">
                        <img src={Github} alt="" />
                    </a>
                    <a
                        href="https://www.notion.so/Park-Chan-Jae-f49f571eb9e845b299f1455b0b222e45?pvs=4"
                        target="_blank"
                    >
                        <img src={LinkedIn} alt="" />
                    </a>
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassesimoji}
                    alt=""
                />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: '-11%', left: '70%' }}
                    className="floating-div"
                >
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
                </motion.div>
                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    style={{ top: '16rem', left: '1rem' }}
                    className="floating-div"
                >
                    <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
                </motion.div>
                {/* blur div */}
                <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
                <div
                    className="blur"
                    style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;
