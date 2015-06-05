---
layout: post
title:  "Introducing... CSS3 Social Banners"
description: CSS3 Social Banners is a free and open source project, for other web designers and developers to use. The social banners are completely mobile-first responsive CSS based.
date:   2014-11-16 23:00:00
categories: projects
---
<div class="text-center"> <img src="{{ site.url }}/assets/blog/20141116/logo.png" /> </div>
<br />
Tonight, I have developed and released a small CSS library of CSS3 based Social Banners. It aims to be minimal and inspired by modern web design trends such as the Flat UI. The library includes several social platforms such as Facebook, Twitter, GitHub and Reddit. The CSS library is free and open source and the GitHub repository can be found [here](https://github.com/ojdon/css3-social-banners).

It responsive as it uses the full width of the HTML element it is nested in. Therefore, it is recommended to use a CSS grid system such as the one that is found in the [Bootstrap 3](http://getbootstrap.com/css/#grid) framework. With the first release of the CSS3 Social Banners it currently features the following social platforms:

- Apple App Store
- Behance
- Blogger
- Delicious
- Deviantart
- Disqus
- Dribbble
- Facebook
- Feedly
- Flickr
- Github
- Google Play
- Google Plus
- Grooveshark
- Instagram
- Kickstarter
- LastFM
- LinkedIn
- Pinterest
- Reddit
- Snapchat
- Soundcloud
- Spotify
- Stackoverflow
- Stripe
- Stumbleupon
- Twitch
- Twitter
- Tumblr
- Wordpress
- Youtube

In order to use the CSS3 Social Banners, you will need to include the stylesheet in the <head> tags of your webpage:

{% highlight html %}
  <link rel="stylesheet" href="social-icons.css">
{% endhighlight %}

And then you need to just add the Social Banner you wish to use:

{% highlight html %}
  <div class="social-icon twitter">Follow me on Twitter</div>
{% endhighlight %}

Simple as that!

Make sure to check out the [demo page](http://htmlpreview.github.io/?https://raw.githubusercontent.com/ojdon/css3-social-banners/master/demo.html) to see the social banners in action!

If you wish for a Social Banner to be created for you then please provide me with the social platform that you desire and their brand colour by either raising an issue on the GitHub repository or by sending me a tweet via [my Twitter](http://twitter.com/ojdon) profile.

Source: [https://github.com/ojdon/css3-social-banners](https://github.com/ojdon/css3-social-banners)
