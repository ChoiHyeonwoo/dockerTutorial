# builder stage
FROM node:alpine as builder 
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build
# run stage
FROM nginx
#builder stage에서 생성된 빌드파일을 nginx에서 실행될 수 있는 파일로 복사
COPY --from=builder /usr/src/app/build /usr/share/nginx/html