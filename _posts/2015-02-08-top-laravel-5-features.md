---
layout: post
title:  "Top Laravel 5 Features"
date:   2015-02-08 15:00:00
categories: programming
---
<div class="image-center">
  <img src="http://i.imgur.com/8GSwtnO.png" class="img-responsive text-center" alt="Laravel Logo" title="Laravel Logo"/>
</div>

Over the weekend, I started a brand new project using Laravel, the MVC-framework for PHP based projects. For those who haven't checked it out already, last week on the 4th of February, they have finally released the fifth iteration of Laravel. Just like with the release of Laravel 4, it brought some big new features and some architecture changes to your Laravel based project, therefore a few days of maintenance may be required to get your project using the Laravel 5 codebase. Read on for a rundown of a few new changes and features which I have found to be extremely useful.

### New project structure
The first thing you'll probably notice with a fresh install of Laravel 5 is that the project structure is slightly different. This is because there is now a /resource/ folder which is new to Laravel 5 which keeps all of your assets such as .less source files, language strings, and views separate to your /app/ folder. Previously, I used to keep views separate in Laravel 4 using workbench packages but the workbench functionality is now been deprecated in Laravel 5.

### Laravel Elixir
Probably my favourite service to arrive in Laravel 5 is the '<a href="http://laravel.com/docs/5.0/elixir">Laravel Elixir</a>' which is used to compile all your .less, .sass or CoffeeScripts. As well as combining the output stylesheets. It has other useful features such as allowing you to trigger unit tests and much more!

### Starter Boilerplate
When I first ran the Laravel Installer, I started to look at the new project directory structure. First I discovered the traditional 'Welcome View' from previous Laravel releases, but also Bootstrap-templated views for showing off Laravel's user authentication functionality. Personally, I find this not just a great way to show new Laravel users how the framework works, but also a great starting point for even experienced Laravel users.

### File Generation
The Artisan command has a set of new functionality which is useful for quickly creating new classes and controllers. Not only does it feature new file generation commands, you can see a full list of the commands on offer using the following artisan command below:

{% highlight text %}
  php artisan list
{% endhighlight %}

### Application Namespace

A small but useful change in Laravel 5 is that you now have the ability to give your Application a namespace! Simply run the following artisan command from your terminal while in your project directory:

{% highlight text %}
  php artisan app:name <APPLICATION NAME GOES HERE>
{% endhighlight %}

So there is my top 5 features from Laravel 5. Agree? Disagree? Make sure you <a href="http://twitter.com/ojdon">send me a message on Twitter</a> to tell me what you think of the Laravel 5 release.
