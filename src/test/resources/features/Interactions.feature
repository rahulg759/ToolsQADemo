Feature: This is interaction testcase 

Background: 
	Given User navigates to the homepage 
	When User validate to the home title "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation" 
	
Scenario: User is click on the Sortable menu 
	Given user is already on homepage as "Home" 
	When when user click on "Sortable" 
	Then user navigate to the page as "Sortable" 
	And user click on the "item1" of "Sortable" 
	And user move the current item under "item2" 
	And user close the browser 
	
Scenario: User is click on the Sizable menu 
	Given user is already on homepage as "Home" 
	When when user click on "Selectable" 
	Then user navigate to the page as "Selectable" 
	And user click on the "item1" of "Selectable" 
	And user close the browser 
	
Scenario: User is click on the Resizable menu 
	Given user is already on homepage as "Home" 
	When when user click on "Resizable" 
	Then user navigate to the page as "Resizable" 
	And user click on the "item1" of "Resizable" 
	And user close the browser 
	
Scenario: User is click on the Resizable menu 
	Given user is already on homepage as "Home" 
	When when user click on "Droppable" 
	Then user navigate to the page as "Droppable" 
	And user click on the "item1" of "Droppable" 
	And user close the browser 
	
Scenario: User is click on the Resizable menu 
	Given user is already on homepage as "Home" 
	When when user click on "Draggable" 
	Then user navigate to the page as "Draggable" 
	And user click on the "item1" of "Draggable" 
	And user close the browser