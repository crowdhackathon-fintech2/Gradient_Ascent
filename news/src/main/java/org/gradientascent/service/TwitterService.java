package org.gradientascent.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.social.twitter.api.SearchResults;
import org.springframework.social.twitter.api.Tweet;
import org.springframework.social.twitter.api.Twitter;
import org.springframework.stereotype.Service;

import com.ibm.watson.developer_cloud.tone_analyzer.v3.model.ToneAnalysis;

import io.vavr.Tuple;
import io.vavr.Tuple2;

/**
 * Service that uses the Twitter API
 * @author Petros Siatos
 *
 */
@Service
public class TwitterService {

	private static final String TWITTER_HASHTAG = "#";
	
	private Twitter twitter;
	private WatsonService watsonService;

	public TwitterService(Twitter twitter, WatsonService watsonService) {
		this.twitter = twitter;
		this.watsonService = watsonService;
	}
	
	/**
	 * Returns recent tweets that contain the given company name.
	 * @param company
	 * @return
	 */
	public List<Tweet> searchByCompany(String company) {
		SearchResults result = twitter.searchOperations().search(TWITTER_HASHTAG + company);
		return result.getTweets();
	}
	
	/**
	 * Returns recent tweets that contain the given company name
	 * along with their {@link ToneAnalysis} by IBM Watson Tone Analyzer Service
	 * @param company
	 * @return
	 */
	public Tuple2<List<Tweet>, ToneAnalysis> getTweetsWithToneAnalysis(String company) {
		List<Tweet> tweets = searchByCompany(company);
		
		String tweetsText = tweets.stream()
				.map(Tweet::getText)
				.collect(Collectors.joining());
		
		return Tuple.of(tweets, watsonService.analyzeTone(tweetsText));
	}
}
