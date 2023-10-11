# Konami Code Lab

## Learning Goals

- Practice using event listeners

## Practice Using Event Listeners

In `konami_code.js`, you'll notice that there's very little code in the file.
If you examine what's there, you should see:

```js
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // your code here
}
```

This array contains the famous [Konami Code][] as keyboard event values. The
Konami Code is a well-known button combination in the video game community that
unlocks special features. The up-up-down-down-left-right-left-right-B-A key
combination has become a common [Easter Egg][] for web sites to have hidden
features behind this code, and now you get to implement it!

In `index.html`, you'll see that the JavaScript file is already being loaded in
for you:

```html
<script src="konami_code.js"></script>
```

You will need to:

- Attach an event listener to `document.body` and check for `'keydown'`
  events.
- If the user enters this special code, pressing all ten of the keys in the
  correct order, `alert()` a congratulatory message.
- If they press a key out of sequence or a key that isn't part of the Konami
  code, don't `alert()` anything and simply keep listening for all ten
  `keydown`s in the correct order.

_Remember to call `init()` when you're testing code in the browser to attach
the event listener and set everything up!_

Here's a short example to help you get started:

```js
// Key codes for A, B, and C keys.
const alphabet = [65, 66, 67];

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
```

Have fun!

## Hints

Be aware that we're looking at both `e.detail` and `e.which`. In modern
browsers, `e.which` is usually enough; however, it's not universally supported,
it's technically deprecated, and it sometimes exhibits finicky behavior in the
test suite. To be safe, you might want to check `e.detail` or `e.location`. Or,
to be safest, read the latest in the [`keydown` reference on MDN][keydown].
This would be a good chance to use `console.log()` to check out the value of
`e.detail`, `e.which`, and `e.location`.

Also note that we're calling `parseInt` on the key value. This is because the
event handler might pass us the string representation of the number, which
wouldn't work so well with our comparisons.

JavaScript [key codes][] in case you want to put together your own custom key sequence!

## Conclusion

This exercise is fairly typical of the kinds of challenges front-end
programmers get asked during interviews (although they have to write it on a
whiteboard). It has all the essential bits of front-end developer skill:
elements, events, listening, keeping track of state, clearing it out, etc. It's
a real challenge!

## Resources

- [Konami Code](https://en.wikipedia.org/wiki/Konami_Code)
- [MDN — keydown][keydown]

[Konami Code]: https://en.wikipedia.org/wiki/Konami_Code
[Easter Egg]: https://en.wikipedia.org/wiki/Easter_egg_(media)
[key codes]: http://keycode.info/
[keydown]: https://developer.mozilla.org/en-US/docs/Web/Events/keydown
