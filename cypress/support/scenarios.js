// Feature: Image Registration

//   Scenario: Submitting an image with invalid inputs 1
//     Given I am on the image registration page ok
//     When I enter "" in the title field ok
//     Then I enter "" in the URL field ok 
//     Then I click the submit button ok
//     Then I should see "Please type a title for the image" message above the title field ok
//     And I should see "Please type a valid URL" message above the imageUrl field ok
//     And I should see an exclamation icon in the title and URL fields ok 

//   Scenario: Submitting an image with valid inputs using enter key 2
//     Given I am on the image registration page ok
//     When I enter "Alien BR" in the title field ok
//     Then I should see a check icon in the title field  ok
//     When I enter "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg" in the URL field ok
//     Then I should see a check icon in the imageUrl field ok
//     Then I can hit enter to submit the form ok
//     And the list of registered images should be updated with the new item ok
//     And the new item should be stored in the localStorage ok
//     Then The inputs should be cleared ok
//   Scenario: Refreshing the page after submitting an image clicking in the submit button 4 ok
//     Given I am on the image registration page ok
//     Then I have submitted an image by clicking the submit button ok
//     When I refresh the page ok
//     Then I should still see the submitted image in the list of registered images ok