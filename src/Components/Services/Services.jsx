import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Services = () => {
    const transition = { duration: 1, type: 'spring' };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="services" id="Services">
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>services</span>
                <span>
                    디자인으로는 Figma를 배웠으며, Web/App을 주로 개발하고 있습니다.
                    <br />
                    Skill은 Html, Css, JavaScript, React, Java, Spring, Spring boot
                    <br />
                    OracleDB, MySql을 사용하고 있습니다.
                </span>
                <a href="https://www.notion.so/Park-Chan-Jae-f49f571eb9e845b299f1455b0b222e45?pvs=4" target="_blank">
                    <button className="button s-button">프로젝트 보기</button>
                </a>
                <div className="blur s-blurl" style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* right side */}
            <div className="cards">
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25%' }}
                    transition={transition}
                    style={{ left: '14rem' }}
                >
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={'Figma를 다룰수있고, 앞으로 더 포토샵을 배워볼 생각입니다.'}
                    />
                </motion.div>

                {/* second card */}
                <motion.div
                    initial={{ left: '-11rem', top: '12rem' }}
                    whileInView={{ left: '-4rem' }}
                    transition={transition}
                    style={{ top: '12rem', left: '-4rem' }}
                >
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Html, Css, JavaScript, React, Java, Spring, Spring boot, Mysql, OracleDB, Mysql'}
                    />
                </motion.div>

                {/* 3rd */}
                <motion.div
                    initial={{ top: '19rem', left: '25rem' }}
                    whileInView={{ left: '12rem' }}
                    transition={transition}
                    style={{ top: '19rem', left: '12rem' }}
                >
                    <Card
                        emoji={Humble}
                        heading={'Web / App'}
                        detail={'앞으로도 꾸준한 업데이트와 더 많은 노력을 하겠습니다.'}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
            </div>
        </div>
    );
};

export default Services;
