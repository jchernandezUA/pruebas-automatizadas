Feature: Add tag to post

@user1 @web
Scenario: Como usuario inicio sesión, agrego un post y le agrego un tag al post
  Given I login as admin in Ghost "add_page" "01"
  When I open pages "add_page" "02"
  And I wait for 2 seconds
  When I add a new page with title "<title>" "add_page" "03"
  And I wait for 2 seconds
  Then I verify the published message "add_page" "04"
  Then I delete the page "<title>"


  Examples:
  |long_title|title|
  |data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGWSURBVDjLpZG9S5thFMXPG2NUxE8oxFAtKFnyLwiCHaxOnToodmoVh0qJFBVcRXQLuOhWLLQoWtsIfkCzmNLioA52EYz64mBKFAJKCXnuuU8HWykaS3i92z3Dj/O717HW4j7juxm8+TZQMvS1f9QzgNRZUnuKBTj/KkSTfbGG8tBrVYWbdUEqKMzQcFuEGzRc+tD76aQgILrZNx6sCI01V7XAcQBahaoiJzlkf2WRzv5E6jT1mUamlvvXv99SIDVAEgqFKEESYgU+x4fyQBnCwTAiDyNPjZGRzlh7Y0GFgbXn08HKhlck4Z65ECFC1SE0PXiEUn8AqsRe6gcO3IPol+Fk7NYRZ7reDbrn7tvjjLs392zRed+97Bymj2KJncTJZe4SF/kL1FbXwhh5cucXxMhLMTL/d//4YjVq8rK0f7wPv68UdTX1kLx0FlT43zyebLUdbR2gKuKrcWxN7DoA4C/23yYvMBSoVYjhdV40QIxAlLCWECNeAAT1TwPx2ICWoCroTYFXCqqglwYUIr6wAlKh1Ov8N9v2/gMRLRuAAAAAAElFTkSuQmCC|Splendor|
  |data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHlSURBVDjLpVPLShxBFD3T3WOUUUGYByhkI+50o6Bmo3ErAVG3Qvb5giyThets8gmC+DYQzEaGBMUnBhQRJAEXQuZJ8Mlodz28t6rbGY2b4IXqU1XcOvfc01UxrTWeEx5/ptbOssQzILVylVKQChCMkucagrA6JKTQtK+uJyc6Gg2B0npwvLfJ+Z/KH2Z+J+4VEJs5nFh4B3BLUhCrBILAzv1bmvvAbWD2rt9nCSRqCCIfCFtTdFjYoUVIwgQ0BJEc5UxmIGoJuGkTMeBPiQ4qq4R8MEpkhJSSyZhMPyQA/4XP33L6qhLoKGbW8wZnNwoG5zftennLYum8ot9+2uWpVRBQBTISc5tFsBmu62BxqwjPBb7sFNFQ52DlZwnxOOFeAe3pevihB07UArvguTGMv0rDo92x/jQoHyO9aZM43J2y2GNbEEJVCVgBt80Hv+5RJdLFFR0nZpAjwqXtQmh3LQGxcT9xkvymJ/WwIiEridajfVZB4oVXJeBbx+FSxdX98oOK2YMyAoV/lER/zrP9COsB0Q11JfH9sIzXnUn8IBwkfBzHp+dUrOYtGA+ohc6Xjcj9raA904CT/BXaWupM8lOhwssXXiR98XH6V7NPRHzDeEjyJTCPRzxJcHZ5kzdX77nP+Q6ZHT+VaotBJwAAAABJRU5ErkJggg==|Little Girl (La pivellina)|
  
  #https://api.mockaroo.com/api/2b2e19d0?count=5&key=86bc46c0