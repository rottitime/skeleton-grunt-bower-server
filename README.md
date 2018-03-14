# Setup with Grunt Bower and a local web Server

This is a instance setup of excellent web development tools for frontend sites. 

The package contains excellent tools to let you focus on coding straight away. As you can see...

* Grunt – A task runner built in Javascript
* Bower – A package manager tool. Allowing you to install and manage packages along with dependencies. As a bonus, you will also get the following useful tools bundled with Bower.
* Font-Awesome – Using a huge library of font icons instead of images across your site is the most optimised.
* jQuery
* featherlight - light popup
* slick-carousel – Most sites have carousels in one form or another. Slick carousel is extremely light, responsive and considers accessibility.
* Sass – Keep your css organised, clean and small.
Live-reload – Automatically reload your browser while you code. Sounds simple but saves so much time overall
* Javascript concat and minify/uglify – Grunt will concatenate your Javascript files and minify them to give the best performance and a low file size
grunt-contrib-connect – A local web server instantly displaying the site you make as you develop
* Css minify/uglify – Grabs the css file and compresses it to get the best performance and a low file size

## Prerequisites

You  will need the below tools to be able to use this:

* [NodeJs](https://nodejs.org/en/download/) - Easy Installation of grunt packages
* [Ruby Installer](https://www.ruby-lang.org/en/downloads/) - Before you start using Sass you will need to install Ruby
* [Sass](https://sass-lang.com/install) - Once Ruby is installed, you can install Sass using Ruby Gems
```
gem install sass
```

## Installing

Assuming you have the Prerequisites. 

Navigate to where you have cloned the plugin.

If you don't already have Grunt setup on your computer, then run the below line in the command line (ms-dos/terminal)
```
npm install -g grunt-cli
```
Lastly,
```
npm install
```

## Running the build

Within command line, ensure you are in the root directory of this project
```
grunt local
```

This will do all the hard work. The website will open up in http://localhost:7910/. 
Place any code within the www/ directory

## Deployment

Once you are happy with your code, you can run a further command to compress your site even further:
```
grunt prod
```

This will produce a compressed css and js file within the www/inc/ folders. 

You can now upload your site to your favourite hosting providers :)





