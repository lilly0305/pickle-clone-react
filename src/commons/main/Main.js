import 'scss/main.scss';

import netflixIcon from 'images/icon_netflix.png';
import watchaIcon from 'images/icon_watcha.png';
import wavveIcon from 'images/icon_wavve.png';
import laftelIcon from 'images/icon_laftel.png';
import tvingIcon from 'images/icon_tving.png';
import disneyIcon from 'images/icon_disney.png';
import bannerImg from 'images/banner-image.jpg';
import { MainSection1 } from './MainSection1';

export const Main =() => {
  return(
    <div>
      <main className="mainBanner">
        <figure className='mainBannerImg'>
          <img src={bannerImg} alt="배너 이미지" />
        </figure>
        <div className='mainBannerText'>
          <ul>
            <li><img src={netflixIcon} alt="넷플릭스 아이콘" /></li>
            <li><img src={watchaIcon} alt="왓챠 아이콘" /></li>
            <li><img src={wavveIcon} alt="웨이브 아이콘" /></li>
            <li><img src={laftelIcon} alt="라프텔 아이콘" /></li>
            <li><img src={tvingIcon} alt="티빙 아이콘" /></li>
            <li><img src={disneyIcon} alt="디즈니 아이콘" /></li>
          </ul>

          <header>
            <p>커피 한 잔 값으로</p>
            <p>OTT를 더 저렴하게</p>
          </header>

          <p>넷플릭스, 디즈니+, 티빙 … 매달 나가는 구독료 부담스럽다면?</p>
          <p>🔗<strong>안전한 계정 공유</strong>로 더 저렴하게!</p>

          <button className='linkButton'>서비스 시작하기</button>
        </div>

        <svg className='arrowDown' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
      </main>

      <MainSection1/>
    </div>
  )
}