Feature: Alarm list

    login & widget test
    @Widget
    Scenario: Login & see widget
    Given Open page, login & choose farm
    When Check widget
    Then check for error & warning

    @AlarmList
    Scenario: Login & open alarm list
    Given Open page, login & choose farm  
    When Click on Services & Alerts

    @AlertDetails
    Scenario: Login & open details of alert
    Given Open page, login & choose farm
    When Click on Services & Alerts
    Then Click on details button

    @ConfigPage
    Scenario: Login & open configuration page
    Given Open page, login & choose farm
    Then Open configuration

    @SortType
    Scenario: Login & sort by type of alarm
    Given Open page, login & choose farm
    When Click on Services & Alerts
    Then Sort by type
    
    @SortDevice
    Scenario: Login & sort by type of alarm
    Given Open page, login & choose farm
    When Click on Services & Alerts
    Then Sort by device

    @SortAlarmCode
    Scenario: Login & sort by alarm code
    Given Open page, login & choose farm
    When Click on Services & Alerts
    Then Sort by alarm code
    
    @assertDetails
    Scenario: Login & assert details
    Given Open page, login & choose farm
    When Click on Services & Alerts
    Then Assert details 


   