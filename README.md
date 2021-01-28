# sermon-front
* 참고
  - 학습용도로 트위터를 참고했습니다.
  
# 실행 
`yarn start`

# 기능
* 로그인, 회원가입
  - SimpleActionModal 컨텍스트를 통해서 간단한 액션 폼 재사용
* 고민 입력, 답변 입력
  - 고민을 공유할 수 있음 
  - 글쓴이는 자신이 쓴 글 수정 가능
  - 답변을 채택하면 속한 답변이나 질문은 삭제 불가능
  - 좋아요 기능
* 해쉬태그
  - 글 입력시 해쉬태그 입력 및 해쉬 태그 검색 제공
* 로그인 세션 유지
  - jwt 토큰 사용, 토큰은 local storage에 저장 및 새로고침시 로딩
* 더 보기 기능
  - 글 리스트 맨 밑에 더 보기 버튼을 눌러서 더 많은 글을 로딩해올 수 있음

# 스크린샷
<div>
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103070-b75f0580-6183-11eb-8400-cbfc47306b04.PNG">
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103074-b8903280-6183-11eb-8095-3949d67b26a4.PNG">
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103077-b9c15f80-6183-11eb-94c8-c90fdb278c60.PNG">
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103079-baf28c80-6183-11eb-93ba-b7df891aa3a9.PNG">
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103082-bb8b2300-6183-11eb-930d-ce9c12507b3b.PNG">
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103085-bcbc5000-6183-11eb-94f1-1883801b101a.PNG">
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103088-bded7d00-6183-11eb-908f-bfdf0519ecc5.PNG">
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103091-bfb74080-6183-11eb-9290-6ae4e39e1e7f.PNG">
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103097-c1810400-6183-11eb-8c73-20e431d50e09.PNG">
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103103-c34ac780-6183-11eb-985d-05582ae600a6.PNG">
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103108-c5148b00-6183-11eb-859b-7d27b3560a61.PNG">
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103122-c80f7b80-6183-11eb-8d53-62ffaa453d34.PNG">
<img width="900" src="https://user-images.githubusercontent.com/49367014/106103129-c9d93f00-6183-11eb-8779-aa83a02c4146.PNG">
</div>
