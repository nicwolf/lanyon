---
layout: post
title: Artificial Intelligence and Music Composition
category: Writing
tags: [Music, Machine Learning]
---

*08/02/2017:*

*I originally wrote this piece for the [Trial & Error Collective][trial-and-error-link], it is reproduced here with permission (and a handful of grammatical edits).*

[Google released their first musical single this week][google-song] --- a 90-second long piano melody composed entirely by a computer. Give it a listen and the first impression you'll (probably) have is that it is bad. Like, painfully bad.

<!--break-->

The software behind this song is a recently open-sourced music and art generation toolkit developed by the [Google Brain team called Project Magenta][google-magenta] --- "a research project to advance the state of the art in machine intelligence for music and art generation... [and] an attempt to build a community of artists, coders and machine learning researchers". Anyone can download, use, and contribute to the development of Project Magenta. You can pass the software a database of music and it will listen to it and learn how to write music from it.

When I say that computer programs are 'listening', 'learning' and 'writing', I don't mean to imply that they are conscious or self-aware. Instead I'm using some familiar actions as analogues for understanding the complex things these programs are doing. 'Listening' really means processing some kind of input, 'learning' really means recognizing and remembering patterns and 'writing' really means creating some kind of output. Recent research in artificial intelligence has pushed the boundaries of what we can do with computers and this practice of understanding by analogy is useful in a world where they are increasingly capable of doing 'human' things.

The field of artificial intelligence is a body of work that spans a broad range of subjects like mathematics and statistics; cognitive science and psychology; and engineering. It has been developed and refined by thousands of people over hundreds of years and a comprehensive history of artificial intelligence would fill volumes. Instead of a broad overview, in the next few paragraphs I will attempt to give a thorough introduction to one small subset of the technology that has recently become popular and is behind Google's recent musical efforts --- something called neural networks.

In terms of elegance, modern computing technology still pales in comparison to the human brain --- nature has a way of creating extremely well designed structures. The desire to replicate the brain's structures and functions has been a driving force in the development of computers since they were first conceived. 'Neural networks' are digital networks of interconnected 'neurons' --- each 'neuron' represents a mathematical function that takes some input, alters it, and then passes it along to other 'neurons'. This simple approach has applications in everything from medical diagnosis to image recognition.

A fun and intuitive way of getting a grasp on how neural networks work is by watching one learn. Here I borrow an [example from Andrej Karpathy][karpathy-rnn], who built a neural network that teaches itself how to write English. When it was first run, the computer program had no prior knowledge of grammar. It had no concept of nouns or verbs. It didn't even know that a group of letters is a word. Its only resource for learning English was (a translation of) Leo Tolstoy's War and Peace. It scanned the book letter-by-letter looking for patterns. At first it found simple patterns --- the comma is usually followed by a space, for example. Eventually it found more complex patterns --- the quotation mark is followed eventually, but not immediately, by another quotation mark; the letter 't' is often followed by the letter 'h' is often followed by the letter 'e'. In this way the computer program gradually builds its knowledge about the English language. The program needs to scan the book many times before it has a good grasp of English grammar. Every time it finished reading the book, it was asked to write a sentence based on what it had learned. Here are the sentences it wrote after reading the book 100, 300, 500, 700, 1200 and 2000 times:

**100 Passes**
> tyntd-iafhatawiaoihrdemot  lytdws  e ,tfti, astai f ogoh eoase rrranbyne 'nhthnee e plia tklrgd t o idoe ns,smtt   h ne etie h,hregtrs nigtike,aoaenns lng

**300 passes**
> "Tmont thithey" fomesscerliund Keushey. Thom here sheulke, anmerenith ol sivh I lalterthend Bleipile shuwy fil on aseterlome coaniogennc Phe lism thond hon at. MeiDimorotion in ther thize."

**500 passes**
> we counter. He stutn co des. His stanted out one ofler that concossions and was to gearang reay Jotrets and with fre colt otf paitt thin wall. Which das stimn

**700 passes**
> Aftair fall unsuch that the hall for Prince Velzonski's that me of her hearly, and behs to so arwage fiving were to it beloge, pavu say falling misfort how, and Gogition is so overelical and ofter.

**1200 passes**
> "Kite vouch!" he repeated by her door. "But I would be done and quarts, feeling, then, son is people...."

**2000 passes**
> "Why do what that day," replied Natasha, and wishing to himself the fact the princess, Princess Mary was easier, fed in had oftened him. Pierre aking his soul came to the packs and drove up his father-in-law women.

So it's still a bit of gibberish. But impressive when you consider how much you could learn about a foreign language in the same 30 seconds. The neural network behind Google's piano melody learned about music in a similar way. From listening to music, it began to recognize patterns like repetition between phrases and regular spacing of notes (i.e. tempo). It also learned about higher-level structures like verse-bridge-conclusion and dissonance resolution. Give it another listen. It's not very good music. In fact I think it's bad music. But when you think about how 1) this computer program taught itself, with no human intervention, about basic musical patterns and how 2) this technology is still in its infancy and there are many talented people --- artists in their own right --- working on developing it, I think it's promising music.  It will be interesting to see where things go from here.

## References

[Google's Project Magenta][google-magenta]

[Andrej Karpathy. *The Unreasonable Effectiveness of Recurrent Neural Networks*.][karpathy-rnn]

[karpathy-rnn]: http://karpathy.github.io/2015/05/21/rnn-effectiveness/
[google-song]: https://cdn2.vox-cdn.com/uploads/chorus_asset/file/6577761/Google_-_Magenta_music_sample.0.mp3
[google-magenta]: https://magenta.tensorflow.org/
[trial-and-error-link]: http://www.trialanderrorcollective.com/culture--random-beats/artificial-intelligence-and-music-composition
