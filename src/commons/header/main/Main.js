import 'scss/main.scss';

import netflixIcon from 'images/icon_netflix.png';
import watchaIcon from 'images/icon_watcha.png';
import wavveIcon from 'images/icon_wavve.png';
import laftelIcon from 'images/icon_laftel.png';
import tvingIcon from 'images/icon_tving.png';
import disneyIcon from 'images/icon_disney.png';

export const Main =() => {
  return(
    <div>
      <main className="mainBanner">
        <figure className='mainBannerImg'></figure>
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

      </main>
    </div>
  )
}