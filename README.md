# Wiki

This project will provide a real-time collaborative wiki based on [markdown][],
and [Operational Transformation][] like the [ShareJS wiki example][].

## TODO

- make remote document updates trigger local [markdown][] renderering
- add some way to upload resources (i.e. images, pdfs, zips, etc). [dropzone][]? or could just use
- use browser editor ([ACE][], [CodeMirror][], etc) instead of text area

we should make an etherpad-based solution instead if you want these features

- add login/authentication system ([passport][]?)
- investigate storing page versions
- investigate storing author information (based on login/authentication)
- try to use the latest [ShareJS][] version (different API)

## DONE

- make [ShareJS][] collaboration work
- enable persistent pages via [redis][] database
- make editor side-by-side with rendered page (rather than up/down)
- add some markdown-friendly css to make stuff look nice
- create a better template page with a header and a footer

## Installation and use

Run the install dependencies script. You may need to use sudo.

    ./install_dependencies.sh

If you are using ubuntu add the configuration to /etc/default/redis-server:

    ULIMIT=10032

Start [redis][]. This may create a file called _appendonly.aof_ that holds the
contents of the wiki.

    redis-server --appendonly yes

Now, start the wiki server.

    node server

(nodejs server on ubuntu)

Goto your browser and hit this url:

    http://127.0.0.1:8000/wiki/foo

## Useful Links

[http://evanhahn.com/understanding-express]()  
[https://www.npmjs.org/package/connect-basic-auth]()  

## Reference Links

[ShareJS wiki example][]  
[markdown][]  
[Operational Transformation][]  
[ShareJS][]  
[Showdown][]  
[redis][]  
[passport][]  
[ACE][]  
[CodeMirror][]  
[dropzone][]  

[ShareJS wiki example]: http://sharejs.org/wiki/Main
[markdown]: http://daringfireball.net/projects/markdown/syntax
[Operational Transformation]: http://en.wikipedia.org/wiki/Operational_transformation
[ShareJS]: http://sharejs.org
[Showdown]: https://github.com/coreyti/showdown
[redis]: http://redis.io
[passport]: http://passportjs.org
[ACE]: http://ace.c9.io
[CodeMirror]: http://codemirror.net
[dropzone]: http://www.dropzonejs.com
