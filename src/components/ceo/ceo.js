import React from 'react';
import './ceo.css';

function ceo() {
  return(
    <div class="card-container">
      <div class="card u-clearfix">
        <div className="card-media">
          <img src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt=""/>
          <span class="card-author subtle">Afdhal Khan <br/>ceo giggers malaysia</span>
        </div>
        <div class="card-body">
          <h2 class="card-title">Hey Yooo!!!!</h2>
          <span class="card-description subtle">미안해 미안해 하지마 내가 초라해지잖아 빨간 예쁜 입술로 어서 나를 죽이고 가 나는 괜찮아 마지막으로 나를 바라봐줘 아무렇지 않은 듯 웃어줘 네가 보고 싶을 때 기억할 수 있게 나의 머릿속에 네 얼굴 그릴 수 있게
          </span>
      {/* <div class="card-read">Read</div>
      <span class="card-tag card-circle subtle">C</span> */}
        </div>
      </div>
      <hr/>
      {/* <div class="card-shadow"></div> */}
    </div>
  );
}

export default ceo;