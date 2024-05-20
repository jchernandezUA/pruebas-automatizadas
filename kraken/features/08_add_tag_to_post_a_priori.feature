Feature: Add tag to post

@user1 @web
Scenario: Como usuario inicio sesión, agrego un post y le agrego un tag al post
  Given I login as admin in Ghost "add_tag_post" "01"
  When I add a new post with title "<title>" "add_tag_post" "02"
  And I wait for 2 seconds
  When I return to dashboard "add_tag_post" "03"
  When I open the recent post "add_tag_post" "04"
  When I open the post settings "add_tag_post" "05"
  When I add a new tag named "<tag>" "add_tag_post" "06"
  Then I verify the post tag "<tag>" "add_tag_post" "07"
  Then I clean the post with name "<title>"

  Examples:
  |title|tag_fail|tag|
  |Closer You Get, The|data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANvSURBVDjLVZNbbFN1HMe/p+d0be3p6Lr7unWMbuCQbR3FQWAEyPASkYe5mHhJTIhhPPngDAQTEGOMIZBpFiKoIWiIhAdgYxI14cFEo1M6O+Zmx1ob2MbYhbEb6zn/y7n8fcCZ7ZP88nv7JN+HjySEwDKfDX6oMpO3Uc5fpJw0UM5AGY0Ryn+U+dZP/OI116evB3WsQFoWtA+c2MUM/vVmf2OFrLhhSBYKPPn4Z3wInYnL54LSF4PcMA9zbh043xr+eZXg9F/Hm0POys5cbwke8Fn0Z4YgCwe2q/W49MdXcx6zucEn7Y01VKqBxMhjjE5mXrlypLYLAByn+o8HKKcXC9QQ+jIp/LLwOxaMRVR6yjE9dR+aRo55RdN76wvcgcIcN6qKVRDCLz5/tCcAAA6dkbaof5eaJuMY0pPQTYp8OQCVOnF94Gp/UD5zixKjtbLMi+EJikC2C1WlPpXqpO0/gbZPdrowmBkGNxmyHSpqs59GLPUbyBJ9x2BKR2SdT+aGjfFZjtQUQ1GuF5TQfU8EhG5kkgkHJETUTWjK2YGpu6OIp+MXQt5vSghh0Rp/EsFHpwC6iLFJBpeigFFSAQCKRnRS6M7LavRtwfTEfZzra59jGu84Mb//bHIxrvy6Zu3dAq37mdLwDtTP/oSbCy+BcQWcUBkAFF0n93rv9ERu/N01wwg7eWSy9ErTnPctoSeSO/X4buf+7XklZVuQXVyPGtcHSPvq8OBhITgj6ScTNPJt98C1Q+1j4fqb6Zpg04x7yCgv+9iS5cBCnRXelns7z5fnh/X4O5TXv4md6g8YSY3BYOR7AFC60pELQicnhU7OGOHyLCNcDtuyoNwexFIV3g7VviqD9iF2qRvbDr6PPNIL76JJTSO/AwAcIqMp9lLmDbY1msWrKkCSw7A1At2vwxWKvOzL0WGze4CwYWV6UbG7DYdqYrPXmzspADicn5+dsZe0A9KtOJAYhrOoGBbJYG6TCX8oAlsfgLAJoi0bYPMJuN0prNvcEjQZf3dVC0uNe54TlH7Jw2srFqslOJueRdF6D6xMDEJwxK/dQbSlGpK8BvC8gD/PH3sobHuPtLLG+eo61WL88Ghr9tGNBy9nyY4RCHMegFjRnwOyZwOmE/1I3fjo6irBMj2no4+EZT8lbAFh2ytO/P9h2xBCxP8FbMDM8CUkkoMAAAAASUVORK5CYII=|YBHM|