protractor-ngroute-bug
======================

PoC for angular/protractor issue #1641

Steps to reproduce:

1. Run the application (`npm install; bower update; grunt serve`)
2. Open your console in the development tools for the new browser window
3. Click on de "error link" link
4. Your console will print "angular ready" before "ajax ready"
