Feature: This is interaction testcase 

Background: 
	Given User navigates to the homepage 
	When User validate to the home title "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation" 
	

	
Scenario: User is click on the Spinner menu 
	Given user is already on homepage as "Home" 
	When when user click on "Spinner" 
	Then user navigate to the page as "Spinner" 
	And user click on the "ui-button-icon ui-icon ui-icon-triangle-1-n" of "Spinner" 
	And user click on the "ui-button-icon ui-icon ui-icon-triangle-1-s" of "Spinner" 
	And user click on the "disable" of "Spinner"
	And user close the browser