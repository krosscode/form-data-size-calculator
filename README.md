# Form data size calculator

This script calculates the size of a forms data. The primary purpose is to make sure that a forms data is smaller than for example PHP's `post_max_size` or Apache's `LimitRequestBody`.

It works by generating a string that emulates php://input as closely as possible.

## Installation

```html
<!-- Form data size calculator -->
<script src="https://raw.githubusercontent.com/krosscode/form-data-size-calculator/master/form-data-size-calculator.js"></script>
```

## Usage

**HTML**

```html
<form id="form" method="post">
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
