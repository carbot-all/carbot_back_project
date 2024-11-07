# Java 17 베이스 이미지 사용
FROM eclipse-temurin:17

# 애플리케이션 디렉터리 생성
RUN mkdir /opt/app

# JAR 파일 복사 (정확한 경로와 이름으로 수정)
COPY build/libs/your-project-name.jar /opt/app/docker-app.jar

# 애플리케이션 실행 명령어
CMD ["java", "-jar", "/opt/app/docker-app.jar"]

# 포트 노출
EXPOSE 8001
