# Wiki

This project will provide a real-time collaborative wiki based on [Markdown][],
and [Operational Transformation][] like the [ShareJS wiki example][].

## TODO

- use browser editor (ACE, CodeMirror, etc) instead of text area
- add secure login

## DONE

- make ShareJS collaboration work
- enable persistent "pages" via nosql database

## Installation and setup

Run the install dependencies script. You may need to use sudo.

    ./install_dependencies.sh

Start [redis][].

    redis-server

Start the wiki server.

    node server

## Links and References

[ShareJS wiki example][]  
[Markdown][]  
[Operational Transformation][]  
[ShareJS][]  
[Showdown][]  
[redis][]  

[ShareJS wiki example]: http://sharejs.org/wiki/Main
[Markdown]: http://daringfireball.net/projects/markdown/syntax
[Operational Transformation]: http://en.wikipedia.org/wiki/Operational_transformation
[ShareJS]: http://sharejs.org
[Showdown]: https://github.com/coreyti/showdown
[redis]: http://redis.io
