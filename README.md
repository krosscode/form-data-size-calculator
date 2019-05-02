# Form data size calculator

This script calculates the size of a forms data. The primary purpose is to make sure that a forms data is smaller than for example PHP's `post_max_size` or Apache's `LimitRequestBody`.

It works by generating a string that emulates php://input as closely as possible.

## Usage

**HTML**

```html
<form id="form">
	<input name="input-1" type="text">
</form>
```

**JS**

```javascript
var form = document.getElementById('form');
var formDataSize = calculateFormDataSize(form);
```

## Support

This does not work with `enctype="multipart/form-data"` as I couldn't find a way to replicate the raw post data when it is active.

Currently these input types are supported:

- button
- checkbox
- color
- date
- datetime-local
- email
- file
- hidden
- month
- number
- password
- radio
- range
- search
- select
- submit
- tel
- text
- textarea
- time
- url
- week
