# Docfox
[![Build Status](https://api.travis-ci.org/cybrox/docfox.png?branch=master)](http://travis-ci.org/cybrox/docfoxs)  

A dead-simple documentation generator for small C libraries, single-file scripts or small projects. While docfox offers (*will offer*) a sleak and sexy template for displaying and browsing the generated documentation, the core documentation is generated as a simple JSON string, thus can be hooked up to almost any for of output.

## Development status
Docfox is currently a work in progress. You might not want to use it until the first alpha release, unless you really want to tinker around with things.

Pull Requests and suggestions are always welcome.

# Documentation Syntax
Currently, docfox only supports C code for pulling missing information directly from the function definition. However, the documentation itself will likely work for any language that can be documented using the given documentation syntax.
The following list contains all supported documentation styles.

-----
**Funtion documentation blocks**
JavaDoc style
```
/**
 *
 */
```

Qt style
```
/*!
 *
 */
```

-----
**Documentation tags**
Tags can be prefixed with either `@` or `\\`.
If no `\brief` description of a function block is given, the top line will be assumed to be the brief information.
Docfox supports the following documentation tags:
- `\author`
- `\brief`
- `\bug`
- `\category`
- `\class`
- `\date`
- `\overload`
- `\param`
- `\return`
- `\skip`
- `\todo`