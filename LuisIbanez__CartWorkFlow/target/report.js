$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/LAI23/workspace/WesleySharpeCartWorkFlow/src/test/java/automation/popularSession/popularSessionRequirement.feature");
formatter.feature({
  "line": 2,
  "name": "Add to cart, continue shopping, and view cart",
  "description": "User should be able to add items to cart and be able to continue shopping and add more items\r\nhe can click on cart to view all items added",
  "id": "add-to-cart,-continue-shopping,-and-view-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 3666111242,
  "status": "passed"
});
formatter.before({
  "duration": 3001314133,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User should be able to click on products and be able to add to cart and continue shopping",
  "description": "\t\t\tand add more items as desired and be able to view correct number of added items in cart",
  "id": "add-to-cart,-continue-shopping,-and-view-cart;user-should-be-able-to-click-on-products-and-be-able-to-add-to-cart-and-continue-shopping",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User navigates to automationpractice website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User will click on image with the title Faded Short Sleeve T-Shirts",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Add to cart on Faded Short Sleeve T-Shirts pop up page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User will click on Continue shopping after Faded Shirt Sleeve T-Shirt has been added to cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User will click image with the title Printed Chiffllon Dress",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Add to cart on Printed Chiffllon Dress pop up page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User will click on Continue shopping after Printed Chiffllon Dress has been added to cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User will click image with the title Blouse",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Add to cart on Blouse pop up page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User will click on Continue shopping after Blouse has been added to cart",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks on the Cart button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User will be taken to Cart page to verify all his items were added",
  "keyword": "Then "
});
formatter.match({
  "location": "PopularSessionStepDef.user_navigates_to_automationpractice_website()"
});
formatter.result({
  "duration": 2233424147,
  "status": "passed"
});
formatter.match({
  "location": "PopularSessionStepDef.user_will_click_on_image_with_the_title_Faded_Short_Sleeve_T_Shirts()"
});
formatter.result({
  "duration": 115853051,
  "status": "passed"
});
formatter.match({
  "location": "PopularSessionStepDef.user_clicks_on_Add_to_cart_on_Faded_Short_Sleeve_T_Shirts_pop_up_page()"
});
formatter.result({
  "duration": 2182277637,
  "status": "passed"
});
formatter.match({
  "location": "PopularSessionStepDef.user_will_click_on_Continue_shopping_after_Faded_Shirt_Sleeve_T_Shirt_has_been_added_to_cart()"
});
formatter.result({
  "duration": 2072615801,
  "status": "passed"
});
formatter.match({
  "location": "PopularSessionStepDef.user_will_click_image_with_the_title_Printed_Chiffllon_Dress()"
});
formatter.result({
  "duration": 216125947,
  "status": "passed"
});
formatter.match({
  "location": "PopularSessionStepDef.user_clicks_on_Add_to_cart_on_Printed_Chiffllon_Dress_pop_up_page()"
});
formatter.result({
  "duration": 2166852788,
  "status": "passed"
});
formatter.match({
  "location": "PopularSessionStepDef.user_will_click_on_Continue_shopping_after_Printed_Chiffllon_Dress_has_been_added_to_cart()"
});
formatter.result({
  "duration": 4072700566,
  "status": "passed"
});
formatter.match({
  "location": "PopularSessionStepDef.user_will_click_image_with_the_title_Blouse()"
});
formatter.result({
  "duration": 2071053064,
  "status": "passed"
});
formatter.match({
  "location": "PopularSessionStepDef.user_clicks_on_Add_to_cart_on_Blouse_pop_up_page()"
});
formatter.result({
  "duration": 6843565271,
  "status": "passed"
});
formatter.match({
  "location": "PopularSessionStepDef.user_will_click_on_Continue_shopping_after_Blouse_has_been_added_to_cart()"
});
formatter.result({
  "duration": 2068693883,
  "status": "passed"
});
formatter.match({
  "location": "PopularSessionStepDef.user_clicks_on_the_Cart_button()"
});
formatter.result({
  "duration": 205756813,
  "status": "passed"
});
formatter.match({
  "location": "PopularSessionStepDef.user_will_be_taken_to_Cart_page_to_verify_all_his_items_were_added()"
});
formatter.result({
  "duration": 10044620219,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"summary_products_quantity\"}\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPTOP-H5J7E08L\u0027, ip: \u0027192.168.2.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\LAI23\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: 2bd2ac86b92d53846a1e52e781aeee18\n*** Element info: {Using\u003did, value\u003dsummary_products_quantity}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat automation.popularSession.PopularSessionStepDef.user_will_be_taken_to_Cart_page_to_verify_all_his_items_were_added(PopularSessionStepDef.java:141)\r\n\tat ✽.Then User will be taken to Cart page to verify all his items were added(C:/Users/LAI23/workspace/WesleySharpeCartWorkFlow/src/test/java/automation/popularSession/popularSessionRequirement.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 8277781539,
  "status": "passed"
});
formatter.after({
  "duration": 6787903492,
  "status": "passed"
});
});