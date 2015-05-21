# MDCAT
-------

very simple blog app.(sorry for my poor english)

## Static Markdown Blog App

compared to jekyll,

* static
* written in markdown
* specific page
* code highlight
* you can customize the style

differences

* no need for build( no need for installing ruby or something else),edit and upload ,so simple!
* mdcat doesn't support some advanced feature 

## Conventions and usage

	pages // the folder to put specific pages
	posts // the folder to put posts
	img // the folder to put images
	posts.json // the list of posts,you need to add post's name(without `.md`) after you write a new post
	site.json // the config of site,including the list of pages,you need to add the page name here to post a new page

when you write a post(no title inside),you must name the file at this format:

	{title}@YYMMDDhhmm.md

example:

	This is my title@1409251524.md

put you post in the `posts` folder,and add a line to post.json

```javascript
{ 
	"posts":[
		"This is my title@1409251524", // add this line
		"daux.io@0504211531",
		"markdown-js@1211011414",
		"this is a test@1405212203"
	]
}
```

then synchronize with your server.

## Library used

* angularjs
* marked.js
* moment.js



----

Here's [a sample site](http://hikarivanish.github.io/mdcat) which use MDCAT.