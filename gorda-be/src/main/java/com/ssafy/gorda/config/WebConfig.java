package com.ssafy.gorda.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedMethods("*")
                .allowedOrigins("http://j7a307.p.ssafy.io:3000",
                        "http://j7a307.p.ssafy.io",
                        "http://j7a307.p.ssafy.io:80",
                        "http://localhost:3000"
                        )

        ;
    }
}