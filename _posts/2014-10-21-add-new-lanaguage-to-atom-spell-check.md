---
layout: post
title:  "Add new language to Atom spell check"
description: A tutorial on how to add a new language to GitHub's Atom editor spell check such as LaTeX and other new file extensions. 
date:   2014-10-21 13:15:00
categories: tips and tricks
---
I am using LaTeX to produce my final year project research report for my University studies. It's a fantastic and robust way for creating academic reports when compared to producing one using a word processor such as Google Docs or Microsoft Word as it gives you much more flexibility when it comes to displaying formulas and other text that requires complex formatting options.

Personally, I don't use LaTeX specific editors such as Texmaker as I prefer to just produce code, blog posts and other forms of writing in the open-source code editor of my choice, Atom by GitHub. For the moment, I have only installed the LaTeX syntax highlighter from the package repository from the preference tab and I am all set to get writing my report.

### The Problem

However, once I started to write large blocks of text I noticed that the spell checker wasn't checking for any misspellings as I type, even though it was working for plain text files. I then spent a few minutes looking into how to add new file extensions for Atom's spell checker package to check while I work on them.

### The Solution

All you need to do is open up the settings and in the left hand pane scroll down and click the "Spell Check" package. From here the settings should open up for the package. Half way down the settings there is a text field labelled as "Gammars". In this text field you want to append your currently entered Grammars with a comma (Or I'd advise to type out the "Grammars" you see listed before clicking into the field if you have never added a new one before) and add in the following word:

{% highlight text %}
  text.tex.latex
{% endhighlight %}

Additionally if you want to spell check your bibliography then continue to add the following new items after the one you just added previously:

{% highlight text %}
  text.bibtex, meta.entry.braces.bibtex, meta.key-assignment.bibtex, string.quoted.other.braces.bibtex, punctuation.definition.string.end.bibtex
{% endhighlight %}

And then go back to your .tex file and you should see the following whenever you make a spelling mistake:
![Spell checking .tex file]({{ site.url }}/assets/blog/20141021/spellcheck.png)

#How to find the scope name
What you previously added to the Grammars text field to detect LaTeX files was the scope name. In order to add other scope names to the Grammars text field you can find them by opening up the Development Tools by going to:

View > Developer > Toggle Development Tools

From here you will need to press the "Console" tab. Now click back into the file you want to add to the Grammars text field and press "Ctrl-Alt-P", I believe if you are a Windows or Linux user, or if you have a Apple keyboard like myself then press "CMD-Alt-P". You should now see a print out of the Scope name in the console tab from the Developer Tools. Copy the text inside the quotations and append it onto your list in the Grammars text field like you did previously.

![Scope name for Markdown files]({{ site.url }}/assets/blog/20141021/markdown.png)

And you're all done! Hope it helps!

Source: [https://discuss.atom.io/t/how-to-enable-spell-checking-for-another-language/4895/3](https://discuss.atom.io/t/how-to-enable-spell-checking-for-another-language/4895/3)
