# Discord Bot
> Discord Bot using javascript.

## Install

```
npm install
# or
yarn
```

## Usage

Copy and rename the `.env_example` to `.env` and fill out the values:

```
DISCORD_TOKEN=
DISCORD_PREFIX=
```
### If you wan't to test the music. Remember that you must install [FFMPEG](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg) in your machine

## Push on Heroku
* Add and commit on your heroku app
* Type ```heroku buildpacks:add https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git``` to add FFMPEG buildpack in heroku
* In Settings tab, add config var ```DISCORD_PREFIX``` and ```DISCORD_TOKEN```
* Open heroku console and type ```node .``` or you can use the **Procfile** worker in **Resource** tab
