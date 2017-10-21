package org.gradientascent.config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.ibm.watson.developer_cloud.tone_analyzer.v3.ToneAnalyzer;


@Configuration
@EnableConfigurationProperties({DiscoveryProperties.class, ToneAnalyzerProperties.class})
public class WatsonConfig {

	@Autowired
	private ToneAnalyzerProperties watsonProperties;
	
	@Bean
	public ToneAnalyzer toneAnalyzer() {
		ToneAnalyzer toneAnalyzer = new ToneAnalyzer(watsonProperties.getVersion());
		toneAnalyzer.setUsernameAndPassword(watsonProperties.getUsername(), watsonProperties.getPassword());
		toneAnalyzer.setEndPoint(watsonProperties.getUrl());
		
		Map<String, String> headers = new HashMap<String, String>();
//		headers.put("X-Watson-Learning-Opt-Out", "true");
		headers.put("Content-Type", "text/plain;charset=utf-8");
		toneAnalyzer.setDefaultHeaders(headers);
		
		return toneAnalyzer; 
	}
	
}
