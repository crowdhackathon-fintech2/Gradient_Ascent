package org.gradientascent.controller;

import org.gradientascent.service.WatsonService;
import org.json.JSONException;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.watson.developer_cloud.tone_analyzer.v3.model.ToneAnalysis;

@RestController
@RequestMapping("/api/watson")
public class WatsonController {

	private WatsonService watsonService;
	
	public WatsonController(WatsonService watsonService) {
		this.watsonService = watsonService;
	}

	@GetMapping(value = "/news/{company}", produces = MediaType.APPLICATION_JSON_VALUE)
	public WatsonResponse discoveryNews(@PathVariable String company) throws JSONException {
		return watsonService.getCompanySentimentQuery(company);
	}
	
	@GetMapping(value = "/tone/{text}") 
	public ToneAnalysis getToneAnalysis(@PathVariable String text) {
		return watsonService.analyzeTone(text);
	}
	
}
