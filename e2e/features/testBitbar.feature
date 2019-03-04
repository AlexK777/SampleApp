Feature: Bitbar POC

  Scenario: Run test in Bitbar
    Given I have launched the app
    Then I should see some text

    Scenario: Run another test in Bitbar
      Given I have launched the app
      And I click the instructions to change text
      When I reload react native
      Then I should see some text
