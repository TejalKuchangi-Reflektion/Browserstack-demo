Feature: IVS feature of Dream Products on mobile view
As a user of Dream Products website
I want to search for a keyword
So that I can view search suggestions for the same

    @mobile
    Scenario: Searching for socks
        Given I open the Dream Products website
        And I click on the search icon
        And I click on the reflektion serach bar
        When I enter the keyword "socks" into the search bar
        Then I see the reflektion search container
        When I click on the suggetsion "sock"
        Then I am navigated to the search page of "sock"

