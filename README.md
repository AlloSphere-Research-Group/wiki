# Wiki

This project will provide a real-time collaborative wiki based on [Markdown][],
and [Operational Transformation][] like the [ShareJS wiki example][].

## TODO

- use browser editor (ACE, CodeMirror, etc) instead of text area
- make editor side-by-side with rendered page (rather than up/down)
- add some markdown-friendly css to make stuff look nice
- create a better template page with a header and a footer
- add some way to upload resources (i.e. images, pdfs, zips, etc); drag and drop?
- add login/authentication system ([passport][]?)
- investigate storing page versions
- investigate storing author information (based on login/authentication)

## DONE

- make [ShareJS][] collaboration work
- enable persistent pages via [redis][] database

## Installation and setup

Run the install dependencies script. You may need to use sudo.

    ./install_dependencies.sh

Start [redis][]. This may create a file called _appendonly.aof_ that holds the
contents of the wiki.

    redis-server --appendonly yes

Now, start the wiki server.

    node server

## Links and References

[ShareJS wiki example][]  
[Markdown][]  
[Operational Transformation][]  
[ShareJS][]  
[Showdown][]  
[redis][]  
[passport][]  

[ShareJS wiki example]: http://sharejs.org/wiki/Main
[Markdown]: http://daringfireball.net/projects/markdown/syntax
[Operational Transformation]: http://en.wikipedia.org/wiki/Operational_transformation
[ShareJS]: http://sharejs.org
[Showdown]: https://github.com/coreyti/showdown
[redis]: http://redis.io
[passport]: http://passportjs.org
