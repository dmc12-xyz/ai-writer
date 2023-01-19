import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import {useState} from "react";

const Home = () => {
  const [userInput, setUserInput] = useState('');

  const onUserChangedText = (e) => {
    setUserInput(e.target.value);
  }

  return (
    <div className="root">
      <Head>
        <title>AI Writer</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>short story generator</h1>
          </div>
          <div className="header-subtitle">
            <h2>throw some title and content at it, it will get you a sweet little short tale!</h2>
          </div>

        </div>
        <div className="prompt-container">
          <textarea
            placeholder="start typing here"
            className="prompt-box"
            value={userInput}
            onChange={onUserChangedText}
          />
          <div className="prompt-buttons">
            <a className="generate-button" onClick={null}>
              <div className="generate">
                <p>Generate</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo"/>
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
