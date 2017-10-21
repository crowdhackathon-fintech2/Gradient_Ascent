package org.gradientascent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.vavr.jackson.datatype.VavrModule;

@SpringBootApplication
public class GradientAscentApplication {

	public static void main(String[] args) {
		SpringApplication.run(GradientAscentApplication.class, args);
	}
	
	@Bean
	public ObjectMapper objectMapper() {
		ObjectMapper om = new ObjectMapper();
		om.registerModule(new VavrModule());
		return om;
	}
	
	@Bean 
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
}
