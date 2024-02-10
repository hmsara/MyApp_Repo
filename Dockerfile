FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /spring-boot-ems
EXPOSE 8089
COPY pom.xml .
COPY src ./src
RUN mvn clean install
#for the running stage
FROM openjdk:17
WORKDIR /spring-boot-ems
COPY --from=build /spring-boot-ems/target/achat-1.0.jar .
EXPOSE 8089
CMD java -jar achat-1.0.jar 