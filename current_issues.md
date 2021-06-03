# ConcreteCMS UI Test Suite

## List of current issues found

When editing a content block, clicking cancel deletes the empty area block - concrete5/concrete5#9453
Hover on image blocks doesnt work unless you constrain the image? - concrete5/concrete5#9454
When selecting a page from the sitemap, for example adding page link to image block, the page will scroll to the top possibly putting the dialog for the image block below the fold - concrete5/concrete5#9456
deleting a block before deleting from clipboard breaks the clipboard entry, unable to remove broken entries - concrete5/concrete5#9455
searching the page selector is confusing on multi-lingual/multi-site sites, no advanced options
image/file selector table view - you have to click on the radio button to select unlike grid view
inputs on block view having no type/incorrect type
dashboard favourite menu - needs to be one panel/component
dashboard favorites and dashboard both have active class on a link after selecting
dashboard panel - lets cache that for the current page - we dont need to keep re-opening the dashboard do we? opening the
dashboard content should be using padding not margin for bottom (ccm-dashboard-content) 98px
blocks without edit mode are unknown (on dashboard this is worse ) Only way to know is to delete the block and get the popup
customizing the dashboard is not the good vs editing a page
draft list block could probably use some multi-select/delete/publish w/e
profile picture page needs interface work or moved somewhere else, why is this a small vue component taking up a whole page? save + edit etc needs tobe integrated with the new dashboard or something
profile picture needs confirmation on select
private message styling needs to be consistant - maybe consolidated that all into 1 page rather than the table view, load via AJAX request
user add (allow admins to add folders on the home folder icon)
user add (allow users to click on the name to select a home folder)
the toolbar in the dashboard is different from the main site...
faq block in firefox is pre-filled
file manager hover is a pointer but clicking does nothing, only the name takes to details concrete5/concrete5#9508
file manager search doesnt reset when clicking x (8.x behaviour) concrete5/concrete5#9508
file manager multi-select doesnt work shift+select etc concrete5/concrete5#9508
file manager doesn't refresh on deleting of files or folders (so users are unsure if it was really deleted) concrete5/concrete5#9508
file manager import dialog - remote files contains a textarea and a hidden text field? why? concrete5/concrete5#9508
file manager import dialog - create new folder doesnt create a new folder just hides/shows a textbox to enter a name - its position is decideed by the upload files box ? why concrete5/concrete5#9508
file manager upload doesnt have a notification concrete5/concrete5#9508
file manager upload has changed behaviour, however this leads to unable to upload a valid file next to an invalid file (v8 behaviour is to upload only the valid file and throw error) concrete5/concrete5#9508
