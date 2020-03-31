---
layout: post
title: Welcome to Jekyll
date: 2020-03-30 20:10
categories: journal
tags: jekyll
---

Jekyll is a static site generator. You give it text written in your favorite markup language and it uses layouts to create a static website. You can tweak how you want the site URLs to look, what data gets displayed on the site, and more.

### InstructionsPermalink

1. Install a full Ruby development environment.

2. Install Jekyll and bundler gems.

```ruby
gem install jekyll bundler
```

3. Create a new Jekyll site at `./myblog`.

```ruby
jekyll new myblog
```

4. Change into your new directory.

```shell
cd myblog
```

5. Build the site and make it available on a local server.

```ruby
bundle exec jekyll serve
```

6. Browse to http://localhost:4000

If you encounter any errors during this process, see the troubleshooting page. Also, make sure you’ve installed the development headers and other prerequisites as mentioned on the requirements page.