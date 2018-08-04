class Response < ApplicationRecord
  has_many :question_responses

  validates :first_name, presence: true
  validates :last_name, presence: true

  delegate :count, to: :question_responses, prefix: true

  def display_name
    "#{first_name} #{last_name}"
  end

  def completed?
    question_responses_count == Question.count
  end

  # finds the raw score set of responses based on the creative_quality
  def raw_score (creative_quality)
    raw_score = 0
    self.question_responses
    .select{|el| raw_score += el.question_choice.score if el.question_choice.creative_quality.name === creative_quality}
    raw_score
  end
  
  # finds the max score set of responses based on the creative_quality
  def max_score(creative_quality)
    max_score = 0
    self.question_responses
    .select{|el| max_score += el.question.question_choices.max{|el| el.score}.score if el.question_choice.creative_quality.name === creative_quality}
    max_score
  end


end
