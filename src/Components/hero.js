/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import head1 from '../images/head.png';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="container">
        <ul className="social-btns">
          <li><a target='_blank' href="https://twitter.com/SmolKongzNFT"><span className="twitter-icon"></span></a></li>
          <li><a target='_blank' href="https://www.twitch.tv/smolkongz"><span className="twitch-icon"></span></a></li>
          <li><a target='_blank' href="https://www.discord.gg/smolkongz"><span className="discord-icon"></span></a></li>
{/* to add another buttom make sure edit the one below and make sure to edit in join.js too */}
          {/* <li><a target='_blank' href="https://www.discord.gg/smolkongz"><span className="discord-icon"></span></a></li> */}
        </ul>
        <div className="hero-content">
          <h1>Smol Kongz Reborn</h1>
          <p>Welcome to Kongonia</p>
          <div className="mint-box">
            <img src={head1} alt="head" />
            <p>Smol Kongz Reborn</p>
            <button className='mint-btn'>Coming Soon</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero