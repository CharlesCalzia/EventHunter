# EventHunter
Find global tech events all in one place! Instead of having to spend hours searching through numerous sites, find them easily accessible all in one place. Never miss a tech event again!

## Inspiration
Almost a year ago I tried searching around for a list of awesome tech events. I could not find anything that was: 1. up to date, 2. had a tonne of events and 3. easily accessible. So I thought that I should create a software to solve this problem - create an updated list of upcoming tech events all in one place. Before, my main source of tech events was Twitter, where I would occasionally hear someone showing off their NextJS conference ticket. But if I build a software to display a database of upcoming tech events it would save me (and others) a huge amount of time and would encourage us to attend more tech events! I've been sleeping on this idea for almost a year and have never got round to actually building it, but this weekend I finally did!

I discovered FlutterFlow a few months ago and have never used it until this weekend, where I learnt about it and built our app using it. It makes building an app slightly simpler (although it is admittedly more complex than I expected).

## What it does
Simply put, we are a database of up to date tech events. The app displays a list of upcoming tech events from our database. You can create an account and will be able to save events.

## How we built it
The database uses Google Firestore but to add the events to the database we created a custom Apps Script to take the list of events in a Google sheet and write them to the Firestore database. We then built the mobile app using FlutterFlow + Flutter and the website in Wordpress (which we had to use since we were very pressed on time).

## Challenges we ran into
Permissions when writing to the Firestore database, connecting the database with FlutterFlow, learning how to use FlutterFlow, time management...

## Accomplishments that we're proud of and what we learned
We learned a huge amount about programming, how frustrating it can be at times and how much longer everything takes than you expect.

This is my Edward's (my brother) first hackathon, so we are incredibly proud of all that we've accomplished and learnt. We had an awesome time!

Time management is also critical and time is something we were very very stressed about and hindered us from adding additional features.

## What's next for EventHunter
We would like to add new features: sort and search the events, follow other people and what events they attend and potentially even register for events using our app! We've got so many more ideas of features we can add to the app and are excited to continue working on this project!

## Built With:
* Appscript
* Firebase
* Firestore
* Flutterflow
* GCP
* Google Sheets
* Wordpress


### Find more information here: https://devpost.com/software/eventhunter-dvpcb6
