d-showdown
==================

Example Showdown Derby component.  

# Usage
[Example usage](http://github.com/codeparty/derby-examples/tree/master/codemirror)

## In your template
```
<Head:>
  <view name="d-showdown:includes"></view>
<Body:>
  <view name="d-showdown" text={{_page.text}} html={{_page.markdown}} options="{{ {  } }}"></view>
```

## Your data
```
model.set("_page.text", "__Hello World__");
```
See the [derby-examples](http://github.com/codeparty/derby-examples/tree/master/codemirror)
repo for an example using real-time data subscriptions to power multi-player markdown editing.
