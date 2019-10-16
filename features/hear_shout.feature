Feature: Hear Shout

  Shouts have a range of approximately 1000m

  #Background: 
  #  Given Lucy is at 0, 0

  Scenario Outline: Only hear in range shouts

    Given Lucy is at 0, 0
    And Sean is at <Sean-location>
    When Sean shouts
    Then Lucy should hear <what-lucy-hear>

    Examples:
      | Description                     | Sean-location | what-lucy-hear |
      | In range shout is heard         | 0, 900        | Sean           |
      | Out of range shout is not heard | 800, 800      | nothing        |

  #Scenario: Multiple Shouters
  #  Given Lucy is at 0, 0
  #  And Sean is at 0, 500
  #  And Oscar is at 1100, 0
  #  When Sean shouts
  #  And Oscar shouts
  #  Then Lucy should not hear Oscar
  #  But Lucy should hear Sean */

  Scenario: Multiple Shouters

    Given People are located at
      | name  | x    | y   |
      | Lucy  | 0    | 0   |
      | Sean  | 0    | 500 |
      | Oscar | 1100 | 0   |
    When Sean shouts
    And Oscar shouts
    Then Lucy should not hear Oscar
    But Lucy should hear Sean   







  Scenario: shouter should not hear himself
    Given Lucy is at 0, 0
    When Lucy shouts
    Then Lucy should hear nothing