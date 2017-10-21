package org.gradientascent.controller;

public class WatsonResponse {

    private Integer positives;
    private Integer negatives;
    private Integer sum;
    private Integer neutral;
    private Integer positivePercent;
    private Integer negativePercent;
    private Integer neutralPercent;

    public WatsonResponse(Integer positives, Integer negatives, Integer sum, Integer neutral, Integer posPercent, Integer negPercent, Integer neutralPercent) {
        this.positives = positives;
        this.negatives = negatives;
        this.sum = sum;
        this.neutral = neutral;
        this.positivePercent = posPercent;
        this.negativePercent = negPercent;
        this.neutralPercent = neutralPercent;
    }

    public Integer getPositives(){
        return this.positives;
    }

    public void setPositives(Integer positives){
        this.positives = positives;
    }

    public Integer getNegatives(){
        return this.negatives;
    }

    public void setNegatives(Integer negatives){
        this.negatives = negatives;
    }

    public Integer getSum(){
        return this.sum;
    }

    public void setSum(Integer sum){
        this.sum = sum;
    }

    public Integer getPositivePercent(){
        return this.positivePercent;
    }

    public void setPositivePercent(Integer positivePercent){
        this.positivePercent = positivePercent;
    }

    public Integer getNegativePercent(){
        return this.negativePercent;
    }

    public void setNegativePercent(Integer negativePercent){
        this.negativePercent = negativePercent;
    }


    public Integer getNeutralPercent() {
        return neutralPercent;
    }

    public void setNeutralPercent(Integer neutralPercent) {
        this.neutralPercent = neutralPercent;
    }

    public Integer getNeutral() {
        return neutral;
    }

    public void setNeutral(Integer neutral) {
        this.neutral = neutral;
    }
}
