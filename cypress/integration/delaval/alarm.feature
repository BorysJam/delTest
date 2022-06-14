Feature: Alarms
    This is the tests for the Alarms Micro Frontend for dev environments.

    @typeAlarms
    Scenario Outline: Alarms should be sorted by Type of Alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Type"
    Then I click "Inactive"
    Then I click on Alarm Type

    @timeStampAlarms
    Scenario Outline: Alarms should be sorted by Time Stamp of alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Time Stamp"
    Then I click "Inactive"
    Then I click "Time Stamp"

    @deviceNameAlarms
    Scenario Outline: Alarms should be sorted by Device Name of alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Device Name"
    Then I click "Inactive"
    Then I click "Device Name"

    @deviceTypeAlarms
    Scenario Outline: Alarms should be sorted by Device Type of alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Device Type"
    Then I click "Inactive"
    Then I click "Device Type"

    @alarmCode
    Scenario Outline: Alarms should be sorted by Alarm Code of alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Code"
    Then I click "Inactive"
    Then I click "Code"

   
    @receiverOfAlarms
    Scenario Outline: Alarms should be sorted by Receivers of alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Receiver"
    Then I click "Inactive"
    Then I click "Receiver"

    Scenario Outline:Alarms is only shown on dashboard for a farm that pays for it
    Given Open page, login & choose farm
    When I wait 3000
    Then "Services" is visible
    
    Scenario Outline: Alarm details should be displayed in the Alarm Notification received by the user
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then "Type" is visible
    Then "Time Stamp" is visible
    Then "Device Name" is visible
    Then "Device Type" is visible
    Then "Code" is visible
    Then "Receiver" is visible
    Then I check details of alarm
    Then "Back" is visible
    Then "Inactivate" is visible
    Then "Alert Received By" is visible
    Then "Error Code" is visible

    Scenario: User is be able to route alarm dashboard
    Given Open page, login & choose farm
    Then "A&N Internal Dev" is visible
    Then "Errors" is visible
    Then "Warnings" is visible
    Then " Go to Service " is visible
    When I wait 3000
    Then I click "Go to Service"
    Then "Active" is visible
    Then "Inactive" is visible
    # Then user verified alarm dashboard and alarm details
    