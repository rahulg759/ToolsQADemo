Feature: This is interaction testcase 

Background: 
	Given User navigates to the homepage 
	When User validate to the home title "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation" 
	
Scenario: User is click on the Tooltip and Double click menu 
	Given user is already on homepage as "Home" 
	When when user click on "Tooltip and Double click" 
	Then user navigate to the page as "Tooltip and Double click" 
	And user click on the "Hello, Double-click me" of "Tooltip and Double click" 
	And user click on the "Right-click inside this box to see the context menu!" of "Tooltip and Double click" 
	And user click on the "Age : Hover over me to see tooltip" of "Tooltip and Double click" 
	And user close the browser 
	
Scenario: User is click on the Tooltip and Double click menu 
	Given user is already on homepage as "Home" 
	When when user click on "Tooltip" 
	Then user navigate to the page as "Tooltip" 
	And user click on the "We ask for your age only for statistical purposes." of "Tooltip" 
	And user close the browser