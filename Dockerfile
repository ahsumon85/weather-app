# Use the official OpenJDK 21 image as the base image
FROM eclipse-temurin:21-jdk

# Set the working directory in the container
WORKDIR /app

# Copy the application JAR file to the container
COPY target/weather-app-1.0.jar /app/weather-app-1.0.jar

# Expose the port your application runs on
EXPOSE 8080

# Run the Java application
ENTRYPOINT ["java", "-jar", "weather-app-1.0.jar"]

