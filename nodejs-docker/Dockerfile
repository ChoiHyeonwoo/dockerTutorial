#npm이 들어있는 베이스 이미지를 작성
#alpine은 npm이 들어있지않음
FROM node:10

#프로젝트 안에 package.json을 도커 컨테이너 안으로 복사한다.
#COPY package*.json ./
#프로젝트 안에 모든 파일을 도커 컨테이너 안으로 복사한다.
COPY ./ ./

#npm: node.js를 사용하게 만들어주는 패키지
#package.json의 dependencies를 참조하여 자동 설치.
#npm registy에서 다운로드하여 해당 Application에 모듈을 설치 함.
RUN npm install

#node서버를 작성 (엔트리파일을 'node' 명령어로 실행.)
CMD ["node", "server.js"]