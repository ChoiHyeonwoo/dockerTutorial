#npm이 들어있는 베이스 이미지를 작성
#alpine은 npm이 들어있지않음
FROM node:10

# WORKDIR을 표기하지 않은 경우 '/' 경로에 파일이 복사된다.
WORKDIR /usr/src/app

# npm install시 불필요한 파일들을 받지 않기 위해 package.json파일을 copy 먼저 하고 
# npm install을 진행 함.
# 소스가 변경 되도 해당 캐시를 그대로 사용하기 위함
COPY package.json ./

#npm: node.js를 사용하게 만들어주는 패키지
#package.json의 dependencies를 참조하여 자동 설치.
#npm registy에서 다운로드하여 해당 Application에 모듈을 설치 함.
RUN npm install

#프로젝트 안에 package.json을 도커 컨테이너 안으로 복사한다.
#프로젝트 안에 모든 파일을 도커 컨테이너 안으로 복사한다.
COPY ./ ./

#node서버를 작성 (엔트리파일을 'node' 명령어로 실행.)
CMD ["node", "server.js"]