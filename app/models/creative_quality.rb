
class CreativeQuality < ApplicationRecord
  has_many :question_choices

  validates :name, :description, :color, presence: true
  
  #finds the cumulative raw score
  def raw_score
    raw_score = 0
    Response.all.each do |response|
    response.question_responses
    .select{|el| raw_score += el.question_choice.score if el.question_choice.creative_quality.name === self.name}
    end
    raw_score
  end

 #finds the cummulative max score
  def max_score
    max_score = 0
    Response.all.each do |response|
    response.question_responses
    .select{|el| max_score += el.question.question_choices.max{|el| el.score}.score if el.question_choice.creative_quality.name === self.name}
    end
    max_score
  end

end
