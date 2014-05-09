Burds
===================

A simple wallpaper tuning utility on Ubuntu inspired by [Muzei Live Wallpaper](https://play.google.com/store/apps/details?id=net.nurik.roman.muzei). Burds gives wallpapers a blurred and dimmed look, sometimes an additional noisy look.

## Prerequisites
+ Running [Ubuntu](http://www.ubuntu.com/global)
+ Having [GraphicsMagick](http://www.graphicsmagick.org/) installed

## How to use

### Installation
1. Download or clone source files into a directory, such as `~/.burds`
2. Add the directory path to PATH environment variable or make a link of the file, named burds, into a directory which is already in PATH environment varible.

### Tuning
Open terminal, and issue one of the following commands.

1. Tune current wallpaper:
``` sh
$ burds
```

2. Tune specified picture and set as wallpaper:
``` sh
$ burds "~/Pictures/Wallpapers/burds.jpg"
```

### Arguments
The following arguments are used to make custom tuning:

#### -b|--blur &lt;radius&gt;
radius: [0, 100], default is 20.  
<pre>
radius:
        (default)
     0-----20-------------------------------100
     ^                                       ^
 (no blur)                             (more blurry)
</pre>

``` sh
$ burds -b 30
$ burds --blur 30
```

<!-- Setting blur with radius of 0 will not make blur effect.  
The larger the radius value, the more blurry the result image looks. -->

#### -d|--dim &lt;level&gt;
level: [0, 200], default is 90.  
<pre>
level:
                 (default)
     0--------------90--100-----------------200
     ^                   ^                   ^
 (darker)            (original)          (lighter)
</pre>

``` sh
$ burds -d 80
$ burds --dim 80
```

<!-- Setting dim with level of 100 will make no lightness changes.  
To darken, take a value less than 100. The minimum is 0.  
To brighten, take a value greater than 100. The maximum is 200. -->

#### -s|--saturation &lt;level&gt;
level: [0, 200], default is 50.
<pre>
level:
            (default)
     0---------50-------100-----------------200
     ^                   ^                   ^
  (lower)            (original)           (higher)
</pre>

``` sh
$ burds -s 30
$ burds --saturation 30
```

<!-- Setting saturation with level of 100 will make no saturation changes.  
To obtain lower saturation, take a value less than 100. The minimum is 0.  
To obtain higher saturation, take a value greater than 100. The maximum is 200. -->

#### -n|--noise &lt;amount&gt;
amount: [0, 100], default is 10.
<pre>
amount:
      (default)
     0---10---------------------------------100
     ^                                       ^
 (no noise)                             (more noise)
</pre>

``` sh
$ burds -n 20
$ burds --noise 20
```

<!-- Setting noise with level of 0 will not add noise.  
The larger the amount value, the more noise will be added. -->

## Known issues
1. Multi-wallpaper bug