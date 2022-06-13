Feature: Alarms
    This is the tests for the Alarms Micro Frontend for dev environments.

    @typeAlarms
    Scenario: Alarms should be sorted by Type of Alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Type"
    Then I click "Inactive"
    Then I click on Alarm Type

    @timeStampAlarms
    Scenario: Alarms should be sorted by Time Stamp of alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Time Stamp"
    Then I click "Inactive"
    Then I click "Time Stamp"

    @deviceNameAlarms
    Scenario: Alarms should be sorted by Device Name of alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Device Name"
    Then I click "Inactive"
    Then I click "Device Name"