import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Config/Context';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    // Function to handle Enter key press
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && input.trim() !== '') {
            onSent();
        }
    };

    return (
        <div className="container">
            <div className="main">
                <div className="nav">
                    <p>Sparkle Bot</p>
                    <img src={assets.user_icon} alt="" />
                </div>
                <div className="main-container">
                    {!showResult ? (
                        <div className="greet">
                            <p><span>Arignar Anna Government Arts College</span></p>
                            <p>How can I help you today?</p>
                        </div>
                    ) : (
                        <div className='result'>
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            {loading ? (
                                <div className="result-data">
                                    <img src={assets.gemini_icon} alt="" />
                                    <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                </div>
                            ) : (
                                <div className="result-data">
                                    <img src={assets.gemini_icon} alt="" />
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input 
                            onChange={(event) => setInput(event.target.value)} 
                            onKeyDown={handleKeyDown} // Detect Enter key press
                            value={input} 
                            type="text" 
                            placeholder='Enter a prompt here' 
                        />
                        <div>
                            {/* <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" /> */}
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
