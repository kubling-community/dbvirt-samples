package com.kubling.sample.hibernate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.kubling.*")
@EntityScan("com.kubling.*")
@EnableAutoConfiguration
@EnableConfigurationProperties
public class RunApp {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(RunApp.class);
        app.run(args);
    }
}
