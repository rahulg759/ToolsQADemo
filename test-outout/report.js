$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Interactions.feature");
formatter.feature({
  "line": 2,
  "name": "This is interaction testcase",
  "description": "",
  "id": "this-is-interaction-testcase",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@interactions"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 39566333526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation",
      "offset": 33
    }
  ],
  "location": "StepDef.user_validate_to_the_home_title(String)"
});
formatter.result({
  "duration": 23955891,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User is click on the Sortable menu",
  "description": "",
  "id": "this-is-interaction-testcase;user-is-click-on-the-sortable-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "when user click on \"Sortable\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user navigate to the page as \"Sortable\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click on the \"item1\" of \"Sortable\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 32
    }
  ],
  "location": "StepDef.user_is_already_on_homepage_as(String)"
});
formatter.result({
  "duration": 1868864396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sortable",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 13566640726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sortable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 81234989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item1",
      "offset": 19
    },
    {
      "val": "Sortable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 177651466537,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 727855166,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 10130142893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation",
      "offset": 33
    }
  ],
  "location": "StepDef.user_validate_to_the_home_title(String)"
});
formatter.result({
  "duration": 14177837,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User is click on the Selectable menu",
  "description": "",
  "id": "this-is-interaction-testcase;user-is-click-on-the-selectable-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "when user click on \"Selectable\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user navigate to the page as \"Selectable\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on the \"Item4\" of \"Selectable\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 32
    }
  ],
  "location": "StepDef.user_is_already_on_homepage_as(String)"
});
formatter.result({
  "duration": 87134361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selectable",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 5541460018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selectable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 87137774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item4",
      "offset": 19
    },
    {
      "val": "Selectable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 148876957,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 1230809972,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 7718909964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation",
      "offset": 33
    }
  ],
  "location": "StepDef.user_validate_to_the_home_title(String)"
});
formatter.result({
  "duration": 12433056,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User is click on the Resizable menu",
  "description": "",
  "id": "this-is-interaction-testcase;user-is-click-on-the-resizable-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "when user click on \"Resizable\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user navigate to the page as \"Resizable\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user click on the \"item1\" of \"Resizable\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 32
    }
  ],
  "location": "StepDef.user_is_already_on_homepage_as(String)"
});
formatter.result({
  "duration": 86290131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resizable",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 3218998710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resizable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 152462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item1",
      "offset": 19
    },
    {
      "val": "Resizable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 40075226389,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".ui-resizable-handle.ui-resizable-se.ui-icon.ui-icon-gripsmall-diagonal-se\"}\n  (Session info: chrome\u003d75.0.3770.80)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-OJ7IS97K\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\RAHULG~1\\AppData\\Local\\Temp\\scoped_dir26340_7789}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d75.0.3770.80, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: afeba14c4449e53b47a844890e6e4d91\n*** Element info: {Using\u003dcss selector, value\u003d.ui-resizable-handle.ui-resizable-se.ui-icon.ui-icon-gripsmall-diagonal-se}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat step.StepDef.user_click_on_the_of(StepDef.java:155)\r\n\tat ✽.And user click on the \"item1\" of \"Resizable\"(Interactions.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 9739958266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation",
      "offset": 33
    }
  ],
  "location": "StepDef.user_validate_to_the_home_title(String)"
});
formatter.result({
  "duration": 15027756,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User is click on the Resizable menu",
  "description": "",
  "id": "this-is-interaction-testcase;user-is-click-on-the-resizable-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "when user click on \"Droppable\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user navigate to the page as \"Droppable\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user click on the \"item1\" of \"Droppable\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 32
    }
  ],
  "location": "StepDef.user_is_already_on_homepage_as(String)"
});
formatter.result({
  "duration": 95512950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Droppable",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 2679965571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Droppable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 67698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item1",
      "offset": 19
    },
    {
      "val": "Droppable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 5257907833,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 685251682,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 12233059926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation",
      "offset": 33
    }
  ],
  "location": "StepDef.user_validate_to_the_home_title(String)"
});
formatter.result({
  "duration": 13516220,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User is click on the Resizable menu",
  "description": "",
  "id": "this-is-interaction-testcase;user-is-click-on-the-resizable-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "when user click on \"Draggable\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user navigate to the page as \"Draggable\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user click on the \"item1\" of \"Draggable\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 32
    }
  ],
  "location": "StepDef.user_is_already_on_homepage_as(String)"
});
formatter.result({
  "duration": 78225000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Draggable",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 4624283911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Draggable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 84195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item1",
      "offset": 19
    },
    {
      "val": "Draggable",
      "offset": 30
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 146086559,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 702176681,
  "status": "passed"
});
formatter.uri("Widgets.feature");
formatter.feature({
  "line": 2,
  "name": "This is widgets testcase",
  "description": "",
  "id": "this-is-widgets-testcase",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@widgets"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 7678935883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation",
      "offset": 33
    }
  ],
  "location": "StepDef.user_validate_to_the_home_title(String)"
});
formatter.result({
  "duration": 11076827,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User is click on the Tooltip and Double click menu",
  "description": "",
  "id": "this-is-widgets-testcase;user-is-click-on-the-tooltip-and-double-click-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "when user click on \"Tooltip and Double click\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user navigate to the page as \"Tooltip and Double click\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click on the \"Hello, Double-click me\" of \"Tooltip and Double click\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on the \"Right-click inside this box to see the context menu!\" of \"Tooltip and Double click\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click on the \"Age : Hover over me to see tooltip\" of \"Tooltip and Double click\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 32
    }
  ],
  "location": "StepDef.user_is_already_on_homepage_as(String)"
});
formatter.result({
  "duration": 93619689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tooltip and Double click",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 714754235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tooltip and Double click",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 121742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello, Double-click me",
      "offset": 19
    },
    {
      "val": "Tooltip and Double click",
      "offset": 47
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 20228611787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Right-click inside this box to see the context menu!",
      "offset": 19
    },
    {
      "val": "Tooltip and Double click",
      "offset": 77
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 525646627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Age : Hover over me to see tooltip",
      "offset": 19
    },
    {
      "val": "Tooltip and Double click",
      "offset": 59
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 232892672,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 726136554,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 8721881269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation",
      "offset": 33
    }
  ],
  "location": "StepDef.user_validate_to_the_home_title(String)"
});
formatter.result({
  "duration": 16417550,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User is click on the Tooltip menu",
  "description": "",
  "id": "this-is-widgets-testcase;user-is-click-on-the-tooltip-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "when user click on \"Tooltip\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user navigate to the page as \"Tooltip\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user click on the \"We ask for your age only for statistical purposes.\" of \"Tooltip\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 32
    }
  ],
  "location": "StepDef.user_is_already_on_homepage_as(String)"
});
formatter.result({
  "duration": 94877502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tooltip",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 4081724232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tooltip",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 79076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We ask for your age only for statistical purposes.",
      "offset": 19
    },
    {
      "val": "Tooltip",
      "offset": 75
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 166756551,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 705777745,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 10721711170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation",
      "offset": 33
    }
  ],
  "location": "StepDef.user_validate_to_the_home_title(String)"
});
formatter.result({
  "duration": 13391633,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User is click on the Tabs menu",
  "description": "",
  "id": "this-is-widgets-testcase;user-is-click-on-the-tabs-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "when user click on \"Tabs\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user navigate to the page as \"Tabs\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user click on the \"Nunc tincidunt\" of \"Tabs\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user click on the \"Proin dolor\" of \"Tabs\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user click on the \"Aenean lacinia\" of \"Tabs\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 32
    }
  ],
  "location": "StepDef.user_is_already_on_homepage_as(String)"
});
formatter.result({
  "duration": 98682796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tabs",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 4307933604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tabs",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 123449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nunc tincidunt",
      "offset": 19
    },
    {
      "val": "Tabs",
      "offset": 39
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 5248605939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Proin dolor",
      "offset": 19
    },
    {
      "val": "Tabs",
      "offset": 36
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 5275897792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aenean lacinia",
      "offset": 19
    },
    {
      "val": "Tabs",
      "offset": 39
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 40157038230,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"tabs\"]/ul/li[31]\"}\n  (Session info: chrome\u003d75.0.3770.80)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-OJ7IS97K\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\RAHULG~1\\AppData\\Local\\Temp\\scoped_dir25980_6635}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d75.0.3770.80, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 35647d30de6b8f9a3d80fc6e98a56fb5\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"tabs\"]/ul/li[31]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat step.StepDef.user_click_on_the_of(StepDef.java:207)\r\n\tat ✽.And user click on the \"Aenean lacinia\" of \"Tabs\"(Widgets.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 8582408605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation",
      "offset": 33
    }
  ],
  "location": "StepDef.user_validate_to_the_home_title(String)"
});
formatter.result({
  "duration": 19046383,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User is click on the Spinner menu",
  "description": "",
  "id": "this-is-widgets-testcase;user-is-click-on-the-spinner-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "when user click on \"Spinner\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user navigate to the page as \"Spinner\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user click on the \"ui-button-icon ui-icon ui-icon-triangle-1-n\" of \"Spinner\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user click on the \"ui-button-icon ui-icon ui-icon-triangle-1-s\" of \"Spinner\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user click on the \"disable\" of \"Spinner\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 32
    }
  ],
  "location": "StepDef.user_is_already_on_homepage_as(String)"
});
formatter.result({
  "duration": 78927008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spinner",
      "offset": 20
    }
  ],
  "location": "StepDef.when_user_click_on(String)"
});
formatter.result({
  "duration": 3147652710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spinner",
      "offset": 30
    }
  ],
  "location": "StepDef.user_navigate_to_the_page_as(String)"
});
formatter.result({
  "duration": 78506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ui-button-icon ui-icon ui-icon-triangle-1-n",
      "offset": 19
    },
    {
      "val": "Spinner",
      "offset": 68
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 4287018991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ui-button-icon ui-icon ui-icon-triangle-1-s",
      "offset": 19
    },
    {
      "val": "Spinner",
      "offset": 68
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 246842954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "disable",
      "offset": 19
    },
    {
      "val": "Spinner",
      "offset": 32
    }
  ],
  "location": "StepDef.user_click_on_the_of(String,String)"
});
formatter.result({
  "duration": 300778694,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 1540083877,
  "status": "passed"
});
});