---
layout: post
title: Senior Capstone Project
---
*Edited 08/02/20217*

I will be graduating from the University of Arizona in May, 2016 with a Bachelor of Science degree in Information Science and Technology. My degree program places an emphasis on the interdisciplinary applications of information and computer science. I have had the opportunity to take a wide breadth of courses covering topics such as machine learning, music production, and library science. Part of earning my degree is completing an independent project that captures the knowledge I have gained from my education.

The most valuable lesson from my education is that learning can (and should be) creative, collaborative, and fun. I wanted to spend this semester learning about concepts that interest me – machine learning algorithms, probabilistic models, and natural language processing – by making art.

<!--break-->

My interest in digital art was sparked by the multimedia programming language Processing. Processing is a wonderful piece of software that aims to "teach coding in the context of visual art”. I began learning Processing as part of a course and discovered a creative outlet that felt intuitive. My interests narrowed to realtime graphics and generative art and I started eyeing the software application TouchDesigner by Derivative. TouchDesigner is a media production environment that combines the organizational power of a visual, node-based programming language with the flexibility and extensibility of Python and C++. It has a wide breadth of applications but is commonly used for interactive installations, architectural projection mapping, and stage production.

I chose to use my senior project as an opportunity to learn math concepts by creating art driven by algorithms and TouchDesigner. I began in January, 2016 --- this is a report of my progress as of March, 2016.

## Learning TouchDesigner

When I’m learning a new programming or software environment I find it helpful to try to recreate a project that I’ve made in the past in a different environment. I find that this allows me to focus on learning the syntax of the new language and the idiosyncrasies of the software. My first project with any new visual art software is usually visualizing Conway’s Game of Life. The Game of Life is a cellular automaton – a grid of ‘living’ and ‘dead’ cells that interact, reproduce, and die according to certain rules. This is a clip taken from my Touch Designer implementation (the bright cells are ‘living’ and the dark cells are ‘dead’):

<p align="center">
  <img src="https://s3-us-west-2.amazonaws.com/nicwolf-github-io/assets/senior-project/images/game_of_life_animation.gif">
</p>

This is what the TouchDesigner ‘network’ behind my Game of Life animation looks like:

![Image: Game of Life Network](https://s3-us-west-2.amazonaws.com/nicwolf-github-io/assets/senior-project/images/game_of_life_network.png)

Each box in the network is a node with a different purpose – if you’re familiar with object-oriented programming you can think about each of these nodes as a class instance. I’ve been amazed at how powerful this sort of organizational system is. It forces you to break large problems into smaller parts that can be solved by single nodes and it presents a very visually intuitive way of organizing ideas (and relationships between ideas). You can connect nodes so that the output of one node becomes the input for the next (the right half of the network), interact with the nodes in a network (clicking the ‘Init’ button will trigger a Python script that restarts the simulation), and nest networks inside of networks (the node called ‘geo1′ handles rendering and instancing surface geometry in the network nested inside of it). You also get real-time information about the information flowing through every node.

<p align="center">
  <img src="https://s3-us-west-2.amazonaws.com/nicwolf-github-io/assets/senior-project/images/game_of_life_network_animation.gif">
</p>

This makes it easy to debug the problems that will inevitably come up in complicated networks.

The past few images come from my first attempt at implementing the Game of Life simulation. I used Python and NumPy arrays to compute the arithmetic and logical operations for the simulation and used TouchDesigner for rendering the visual representation. Here is a close-up look at a node in my network that contains the Python script that handles most of the math for the simulation.

![Image: Game of Life Code](https://s3-us-west-2.amazonaws.com/nicwolf-github-io/assets/senior-project/images/game_of_life_code.png)

I posted my project on the TouchDesigner user forum and asked for feedback and criticism. I got helpful input from someone who pointed out the scalability issues in my implementation. The algorithm that I chose to use is slow – hardly noticeable when the simulation is only 20 x 20 cells, but dangerously slow when the simulation is scaled above 100 x 100 cells. His recommendation was to try and recreate my project using something built into TouchDesigner called Channel Operators (CHOPs). CHOPs are the way that TouchDesigner implements lists/arrays and are optimized for fast calculation. I’m currently working on implementing the Game of Life simulation in this fashion and am about 80% of the way there. After I finish, my next project will be recreating the simulation using a programming language called OpenGL. OpenGL performs calculations on the GPU and will be much faster than my current implementation, which runs on the CPU. Writing code for execution on a GPU is difficult but will be a useful skill to have.

The feedback I received is an example of the great community and learning resources available for TouchDesigner online. There are videos from dozens of workshops that have been very helpful in teaching me some of the subtler and more complex aspects of the software. One of the most helpful resources I’ve found for learning TouchDesigner is Matthew Ragan’s repository of tutorials and instructional materials from courses he has taught on TouchDesigner at Arizona State University.

## Performance

I spent the month of February working on a collaborative project with Michael Cullan, a friend and musician who publishes under the name Bourbaki. Together, we developed an audio/visual project that we debuted in Flagstaff, AZ in early March.

I’m grateful to have a friend that likes Markov chains as much as I do.

Inspired by a Natural Language Processing course that I’m enrolled in this semester, I wanted to create a probabilistic text generator for our project that used n-gram models to generate random but grammatically correct and meaningful sentences. Using the Python NLTK library to process Auguste Comte’s The Philosophy of Mathematics, I created 2, 3, 4, and 5-gram models of word sequences in the text. These models can be used to generate new sentences in the style of Comte. Generally speaking, the larger the n in n-gram, the more grammatically correct and meaningful the sentences generated by the model will be. Sentences from a 2-gram model border on gibberish while those from a 5-gram model can usually pass as written by a human. The text generator I built gradually moved from using a 2-gram to a 5-gram model over the course of the performance. In the generated text this manifests as a gradual shift from randomness to structure.

<p align="center">
  <img src="https://s3-us-west-2.amazonaws.com/nicwolf-github-io/assets/senior-project/images/text_animation.gif">
</p>

The Python NLTK library also includes an interface for looking up words in WordNet, a ‘large lexical database of English. Nouns, verbs, adjectives and adverbs are grouped into sets of cognitive synonyms (synsets), each expressing a distinct concept. Synsets are interlinked by means of conceptual-semantic and lexical relations… a network of meaningfully related words and concepts’.

One way words are linked in WordNet is with ‘hyponym’ and ‘hypernym’ relationships. We know that a dog is a kind of canine and a canine is a kind of carnivore – in WordNet, ‘carnivore’ is a hypernym of ‘canine’ and ‘canine’ is a hypernym of ‘dog’. Generally speaking, some word, X, is a hypernym of another word, Y, if Y is a type of X. I was interested in exploiting this structure to slowly abstract randomly generated sentences by vertically traversing WordNet and gradually replacing words in the sentence with their immediate hypernyms. ‘Dog’, for example, would become ‘canine’, ‘hat’ would become ‘headdress’, and ‘throat’ would become ‘tubular cavity’ (truly!). I wanted to achieve a progression like:

  1. “The dog ran away with the hat”
  1. “The canine ran away with the hat”
  1. “The canine ran away with the headdress”
  1. “The carnivore ran away with the headdress”

Writing a computer program to do this presents a big problem that isn’t immediately apparent. WordNet lists 8 different definitions (or senses) for ‘dog':

  1. A member of the genus Canis (probably descended from the common wolf) that has been domesticated by man since prehistoric times; occurs in many breeds
  1. A dull unattractive unpleasant girl or woman
  1. Informal term for a man
  1. Someone who is morally reprehensible
  1. A smooth-textured sausage of minced beef or pork usually smoked; often served on a bread roll
  1. A hinged catch that fits into a notch of a ratchet to move a wheel forward or prevent it from moving backward
  1. Metal supports for logs in a fireplace
  1. Go after with the intent to catch

Each of these senses links to a different hypernym! To avoid changing “the dog ran away with the hat” to “the sausage ran away with the hat” (which would happen if the computer thought we meant definition ##5), the computer needs to know which sense of ‘dog’ is meant in the sentence.

This is a task called word-sense disambiguation. When a person reads the sentence, ‘the dog ran away with the hat’, they just know that it’s talking about the canine kind of dog and not the hot-dog kind of dog. This is a very easy task for the human brain (so easy that we hardly ever notice it happening!) but a very difficult task for a computer program. A word-sense disambiguation algorithm included in the WordNet package that I tested was only about 50% accurate.

I like the idea of humans creating in partnership with computers and decided to create an interface to manually disambiguate the words in a randomly-generated sentence. The program operator can press a button on a control panel to begin the disambiguation process.

![Image: Text Disambiguate Start](https://s3-us-west-2.amazonaws.com/nicwolf-github-io/assets/senior-project/images/text_disambiguate_start.png)

In turn, each word in the sentence is wrapped in brackets and the definitions for each sense of the word are displayed on the screen. The operator picks the correct definition, stores it in memory and moves on to the next word.

![Image: Text Disambiguate Next](https://s3-us-west-2.amazonaws.com/nicwolf-github-io/assets/senior-project/images/text_disambiguate_next.png)

After disambiguating the whole sentence, the program resumes control and uses the operator’s input to abstract the sentence word-by-word:

![Image: Text Traverse Start](https://s3-us-west-2.amazonaws.com/nicwolf-github-io/assets/senior-project/images/text_traverse_start.png)

![Image: Text Traverse Done](https://s3-us-west-2.amazonaws.com/nicwolf-github-io/assets/senior-project/images/text_traverse_done.png)

This is still a work in progress – there are a few things I don’t like about how these sentences are abstracted:

  * Nouns are the only part of speech that have hyponyms and hypernyms so the program currently only changes nouns in the sentence. I’d like to extend a similar process to verbs and adjectives but it’s more difficult to group those words in the same kind of hierarchical structure that nouns fit into. How would you abstract words like ‘conceived’ and ‘all’? My main roadblock, right now, is answering that question.
  * All of the nouns in WordNet come from the root hypernym ‘entity’ and so every noun in the sentence eventually ends up being changed to ‘entity’. This results in repetitive sentences. I’m still toying around with ideas for solving this problem – I think that I will either have the program stop changing a word a few hyponyms short of ‘entity’ or have words travel back down the tree after they reach ‘entity’ to a random, new word.

In the background of these images you can see part of the other element that I created for our performance – a plotting environment to display 3-dimensional wave-forms. This can be seen in the demo reel that I made from clips of the material I created for the Bourbaki project.

I wanted to be able to control aspects of the visual media during our performance using an external controller. I discovered some of the limitations of using a hardware MIDI controller during a previous project and decided to build a software controller for this one. One of the nice things about working with a software controller instead of a hardware controller is that you can customize control panels for the specific occasion. I built an interface using TouchOSC on my Android Smartphone that communicates with TouchDesigner over a wireless network. This is an example panel that controls the parameters of a multivariate wave form.

![Image: OSC Wave Controller](https://s3-us-west-2.amazonaws.com/nicwolf-github-io/assets/senior-project/images/osc_wave.png)

Because the geometry that I’m working with is 3-dimensional, it can be viewed from different angles and positions. This panel controls the position of the camera that the geometry is being rendered through.

![Image: OSC Camera Controls](https://s3-us-west-2.amazonaws.com/nicwolf-github-io/assets/senior-project/images/osc_camera_controls.png)

My next step with this project is re-working the material I made for our live show into a music video for one of the tracks on Bourbaki’s recently released EP, Subfield Generator. This will present an opportunity for me to learn how to use the key-frame animator in TouchDesigner and to get a feel for a creative workflow outside of the live performance environment.

## Thanks

I’d like to thank the following people for their feedback, support and encouragement:

* Michael Cullan
* Kat Hermanson
* Matthew Ragan
* Huner Gradenkraut

## References

Marr, D. (2010). Vision: A computational investigation into the human representation and processing of visual information. Cambridge, MA: MIT Press.

Fellbaum, C. (1998). WordNet: An electronic lexical database. Cambridge, Mass: MIT Press.

Ragan, M. (2014). TouchDesigner. Retrieved 2016, from http://matthewragan.com/teaching-resources/touchdesigner/

Bird, Steven, Edward Loper and Ewan Klein (2009), Natural Language Processing with Python. O’Reilly Media Inc.

Comte, A. (1851). The Philosophy of Mathematics. NY: Harper & Brothers. Retrieved from http://www.gutenberg.org/ebooks/39702
