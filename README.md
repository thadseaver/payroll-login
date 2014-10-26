payroll-login
=============

Personal javascript project

Background
==========

At work, we have a company ID that we need to use as part of the login at our payroll website. It's a crazy, randomly chosen string of numbers and upper/lower case letters. It's something that I'm not going to commit to memory and it would be a pain to have to type it in everday to punch in and out.

To help speed along the entering of this ID, I created a blank web page that has the ID on it. I made that page my home page. To punch in/out, I launch Firefox, copy the ID from the home page, click the bookmark to the payroll site and paste the it in. It works, but now I want to build on it.

Project
=======

The purpose of this project is to get the ID on the clipboard.

I'm going to use Javascript to get the date and time, then, based on the day of the week and time of day, I'll be greeted with a random message. The page background color and image will also change based on the time of day. There will be a button to "Copy to clipboard" the company ID.

Challenges
==========

1. I'm not sure if there is a way in Javascript to highlight/select text on a page.
2. Copy to clipboard feature
