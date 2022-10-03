FROM openjdk:11-jdk
ARG JAR_FILE=gorda-0.0-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]
