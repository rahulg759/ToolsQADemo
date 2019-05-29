$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Interactions.feature");
formatter.feature({
  "line": 1,
  "name": "This is interaction testcase",
  "description": "",
  "id": "this-is-interaction-testcase",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 13555298544,
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
  "duration": 17153702,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User is click on the Sortable menu",
  "description": "",
  "id": "this-is-interaction-testcase;user-is-click-on-the-sortable-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user is already on homepage as \"Home\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "when user click on \"Sortable\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user navigate to the page as \"Sortable\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on the \"item1\" of \"Sortable\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user move the current item under \"item2\"",
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
  "duration": 86135442,
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
  "duration": 4990607079,
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
  "duration": 106060769,
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
  "duration": 40103287438,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"selectable\"]/li[1]\"}\n  (Session info: chrome\u003d74.0.3729.169)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-OJ7IS97K\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\RAHULG~1\\AppData\\Local\\Temp\\scoped_dir4796_13627}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d74.0.3729.169, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bd22c21b576e830d8193a43406eaca61\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"selectable\"]/li[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat step.StepDef.user_click_on_the_of(StepDef.java:91)\r\n\tat ✽.And user click on the \"item1\" of \"Sortable\"(src/test/resources/features/Interactions.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "item2",
      "offset": 34
    }
  ],
  "location": "StepDef.user_move_the_current_item_under(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 22874901369,
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
  "duration": 13610662,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User is click on the Sizable menu",
  "description": "",
  "id": "this-is-interaction-testcase;user-is-click-on-the-sizable-menu",
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
  "name": "user click on the \"item1\" of \"Selectable\"",
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
  "duration": 90515316,
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
  "duration": 4359876733,
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
  "duration": 67177794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item1",
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
  "duration": 142579444,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 86291318,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validate to the home title \"ToolsQA – Demo Website to Practice Automation – Demo Website to Practice Automation\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 12312812569,
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
  "duration": 11775428,
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
  "duration": 82231159,
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
  "duration": 5895525860,
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
  "duration": 91022,
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
  "duration": 139760600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_close_the_browser()"
});
formatter.result({
  "duration": 89996490,
  "status": "passed"
});
});