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

    @deviceTypeAlarms
    Scenario: Alarms should be sorted by Device Type of alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Device Type"
    Then I click "Inactive"
    Then I click "Device Type"

    @alarmCode
    Scenario: Alarms should be sorted by Alarm Code of alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Code"
    Then I click "Inactive"
    Then I click "Code"

   
    @receiverOfAlarms
    Scenario: Alarms should be sorted by Receivers of alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Receiver"
    Then I click "Inactive"
    Then I click "Receiver"

    @alarmShownDashboard
    Scenario:Alarms is only shown on dashboard for a farm that pays for it
    Given Open page, login & choose farm
    When I wait 3000
    Then "Services" is visible
    
    @alarmDetailsDisplayed
    Scenario: Alarm details should be displayed in the Alarm Notification received by the user
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

    @userAbleToRoute
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
    Then user verified alarm dashboard and alarm details
    
    @userInactiveState
    Scenario: User shouldn’t be able to activate an alarm which is in Inactive state
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then "Active" is visible
    Then I click "Inactive"
    Then I went to inactive details
    Then Activate isnt visible on inactive details
    Then I click "Back"  

    @seeAllDevicesConnected
    Scenario: A&N -  User should be able to see all the devices connected to the farm for configuring the alarms
    Given Open page, login & choose farm
    When I wait 3000
    Then I click "Go to Service"
    Then I click "Settings"
    Then "Alert Configuration" is visible
    Then Verify all the devices that are connected to the farm are listed in the Device Schedule