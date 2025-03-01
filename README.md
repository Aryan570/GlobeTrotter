### Life (Globetrotter)
> Built with NextJS & MongoDB

Demo Link : *https://drive.google.com/file/d/1SX23ANiQzsC3CoOzNqt6r_qWZhfuDTJg/view?usp=sharing*

Link to the Deployed Version : *https://globe-trotter-topaz.vercel.app/*

#### Run Locally
```shell
git clone https://github.com/Aryan570/globeTrotter/
cd globeTrotter
yarn install
yarn dev
```
#### About
- You get 10 turns to guess the city throught the clues.
- You&apos;ll get score out of 10.
- In the end of the game , you can challenge your friends to beat your score.
>Invite is valid for only 24 hours, (I don&apos;t want to fill my database : )

#### Why NextJS
>why not ?

See my other respositories, I&apos;m currently building a turn-based game, but I'm building backend in Rust and frontend in Rust.
NextJS provide so much functionality that you don&apos;t have to worry about yourself.
You can move very fast with NextJS.

#### How challenge feature works
When the game completes, you have the option to challenge friends to beat your score. For that you&apos;ll need to choose a username.
> if username is already in DB, choose a different name

A link will be generated for the friend. Link has a simple format actually
**..com/challenge/{username}**
>Is it too simple? It will not matter at all, you can&apos;t do anything wrong with this info.

Once your friend visit the page and play the game. The result of the match will be displayed to your friend.