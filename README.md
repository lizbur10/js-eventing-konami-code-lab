# Konami Code Lab

## Learning Goals

- Practice using event listeners

## Practice Using Event Listeners in JS

In `konami_code.js`, you'll notice that there's very little code in the file.
If you examine what's there, you should see:

```js
const code = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

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
// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;

  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("Hurray!");
      index = 0; // Reset the sequence
    }
  } else {
    index = 0; // Reset the sequence
  }
}
```

Have fun!

## Hints

Be aware that we're only looking at the [`e.key`][key property] value. In modern
browsers, the `e.key` method will return the value of the key pressed by the user.
You can read the latest methods for getting keyboard codes at
[`keydown` reference on MDN][keydown].

This would be a good chance to use
`console.log()` to check out the value of `e.key`.

JavaScript [key codes][] in case you want to put together your own custom key sequence!

## Conclusion

This exercise is fairly typical of the kinds of challenges front-end
programmers get asked during interviews (although they may have to write it on a
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
[key property]: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
