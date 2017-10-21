package org.gradientascent.controller;

import java.util.List;

import org.gradientascent.service.TwitterService;
import org.springframework.social.twitter.api.Tweet;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.watson.developer_cloud.tone_analyzer.v3.model.ToneAnalysis;

import io.vavr.Tuple2;

@RestController
@RequestMapping("/api/twitter")
public class TwitterController {

	private TwitterService twitterService;

	public TwitterController(TwitterService twitterService) {
		this.twitterService = twitterService;
	}

	@GetMapping("/search/{company}")
	public List<Tweet> search(@PathVariable String company) {
		return twitterService.searchByCompany(company);
	}
	
	@GetMapping(value = "/search/{company}/tone") 
	public Tuple2<List<Tweet>, ToneAnalysis> getToneAnalysisForTweets(@PathVariable String company) {
		return twitterService.getTweetsWithToneAnalysis(company);
	}
}
