Payroll-Login
=============

Personal Javascript project

Background
==========

At work, we have a company ID that we need to use as part of the login at our payroll website. It's a crazy, random string of numbers and upper/lower case letters. It's something that I'm not going to commit to memory and it would be a pain to have to type it in everyday to punch in and out.

In my first attempt to help speed along the entering of this ID, I created a blank web page that has the ID on it. I made that page my home page. So, to punch in/out, I launch Firefox, select/copy the ID from the home page, click the bookmark to the payroll site and paste it in. It works, but now I want to build on it.

Project
=======

At the core, the purpose of this project is simply to get the company ID on the clipboard so I can paste it into the login page. I decided to have a little fun with it along the way.

I'm going to use Javascript to get the date and time. Then, based on the day of the week and time of day, I'll be greeted with a random message. The page background color and image will also change based on the time of day. There will be a button to "Copy to clipboard" the company ID.


Challenges
==========

1. I'm not sure if there is a way for Javascript to highlight/select text on a page so that it can be copied.
2. Copy to clipboard feature

Findings
========

Javascript doesn't have access to the clipboard so I used a plugin called [ZeroClipboard](https://github.com/zeroclipboard/zeroclipboard "ZeroClipboard"). This plugin does not require the text to be selected before copying it.

The finished product can be found at [http://payroll-login.thadseaver.com](http://payroll-login.thadseaver.com)