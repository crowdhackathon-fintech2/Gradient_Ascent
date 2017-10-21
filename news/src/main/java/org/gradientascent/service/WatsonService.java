package org.gradientascent.service;

import java.util.Base64;

import org.gradientascent.config.DiscoveryProperties;
import org.gradientascent.controller.WatsonResponse;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ibm.watson.developer_cloud.tone_analyzer.v3.ToneAnalyzer;
import com.ibm.watson.developer_cloud.tone_analyzer.v3.model.ToneAnalysis;
import com.ibm.watson.developer_cloud.tone_analyzer.v3.model.ToneOptions;
import com.ibm.watson.developer_cloud.tone_analyzer.v3.model.ToneOptions.Tone;

/**
 * Service for calls to IBM Watson Services
 * @author Petros Siatos
 *
 */
@Service
public class WatsonService {

	private DiscoveryProperties discoveryProperties;
	private ToneAnalyzer toneAnalyzer;
	private RestTemplate restTemplate;
	
	public WatsonService(DiscoveryProperties discoveryProperties, ToneAnalyzer toneAnalyzer, RestTemplate reTemplate) {
		this.discoveryProperties = discoveryProperties;
		this.toneAnalyzer = toneAnalyzer;
		this.restTemplate = reTemplate;
	}

	/**
	 * Returns the sums/percentages of positive/negative/neutral sentiments, after the analysis of IBM Watson Discovery News
	 * on the documents that contain the given company.
	 * @param company
	 * @return
	 * @throws JSONException
	 */
	public WatsonResponse getCompanySentimentQuery(String company) throws JSONException {
		
		String usernameAndPass = discoveryProperties.getUsername() + ":" + discoveryProperties.getPassword();
		String encodedUsernameAndPass = Base64.getEncoder().encodeToString(usernameAndPass.getBytes());
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization", "Basic " + encodedUsernameAndPass);
		
		HttpEntity<Void> entity = new HttpEntity<>(headers);
		
		ResponseEntity<String> response = restTemplate.exchange(
				discoveryProperties.getUrl() 
				+ "/v1/"
				+ "/environments/system/collections/news/query"
				+ "?version=" + discoveryProperties.getVersion()
				+ "&aggregation=filter(enriched_title.entities.type::Company).term(enriched_title.entities.text).term(enriched_text.sentiment.document.label)&filter="
						+ company,
				HttpMethod.GET, entity, String.class);


	    Integer positives = 0;
	    Integer negatives = 0;
	    Integer neutral = 0;
	    Integer neutralPercent = 0;
	    Integer sum = 0;
	    Integer posPercent = 0;
	    Integer negPercent = 0;

        JSONArray aggs = new JSONObject(response.getBody()).getJSONArray("aggregations");

        for (int i = 0; i < aggs.length(); i++) {
            JSONObject a = (JSONObject) aggs.get(i);
            JSONArray aggs2 = a.getJSONArray("aggregations");
            for (int j = 0; j < aggs2.length(); j++) {
                JSONObject b = (JSONObject) aggs2.get(j);
                JSONArray res1 = b.getJSONArray("results");
                for (int k = 0; k < res1.length(); k++) {
                    JSONObject c = (JSONObject) res1.get(k);
                    sum += c.getInt("matching_results");
                    JSONArray aggs3 = c.getJSONArray("aggregations");
                    for (int h = 0; h < aggs3.length(); h++) {
                        JSONObject d = (JSONObject) aggs3.get(h);
                        JSONArray res2 = d.getJSONArray("results");
                        for (int p = 0; p < res2.length(); p++) {
                            JSONObject res = (JSONObject) res2.get(p);
                            if (res.getString("key").equals("positive")) {
                                positives += res.getInt("matching_results");
                            }
                            if (res.getString("key").equals("negative")) {
                                negatives += res.getInt("matching_results");
                            }
                        }
                    }
                }
            }
        }

        posPercent = positives * 100 / sum;
        negPercent = negatives * 100 / sum;
        neutralPercent = 100 - posPercent - negPercent;
        neutral = sum - positives - negatives;
        return new WatsonResponse(positives, negatives, sum, neutral, posPercent, negPercent, neutralPercent);
    }
	
	/**
	 * Analyzes the emotion tone of the given text with the IBM Watson Tone Analyzer Service
	 * @param text
	 * @return
	 */
	public ToneAnalysis analyzeTone(String text) {
		ToneOptions toneOptions = new ToneOptions.Builder()
				.addTone(Tone.EMOTION)
				.sentences(false)
				.text(text).build();
		
		return toneAnalyzer.tone(toneOptions).execute();
	}
	
}
