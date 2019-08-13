const placeholder = `# Welcome to my Markdown Previewer!

## This is one of my very first projects using React xD
### This is designed to take text written on the left and render it on the right.

It can interpret text as **bold**... 
Or _italic_.
Or... even **_both!_**
It can also ~~strike-through~~.
  
It will create line breaks when you press enter.

It turns code, \`<like this>\`, into this 

\`\`\`
// It can also handle multiple lines at once

const exampleFn = (fun, games) => {
  if (fun && games) {
    return \`You lost an eye\`;
  } else return \`It's all fun and games until someone loses an eye!\`
}
\`\`\`

I really enjoyed making this project and I hope you enjoyed checking it out. There are still more features I want to add like a toolbar from [SimpleMDE](https://simplemde.com/), but I haven't gotten around to it just yet.

If you are interested in the source code: [click here!](https://github.com/mnichols08/freecodecamp-markdownpreview)

It will also interpret a few more things I am supposed to type about to pass the tests such as :
> Block Quotes!

And even Tables!

Eagle Talon | Plymouth Laser | Mitsubishi Eclipse
------------ | ------------- | ------------- 
1990 - 1999 | 1990 - 1994 | 1990 - 2018
My fav. | Meh. | Great Car as well

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. But the list goes on...
1. Without changing the number
1. It counts by itself!

- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
* Plus it's cool to watch the react logo spin like a dj spinning records.

![React Logo](./logo512.png)

This is all for now. Thanks again for checking this out!

`

export default placeholder;