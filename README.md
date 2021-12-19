# Recap Tasks

## Mindset - from Joseph

Hello all, I hope you’ve had a great week.

This coming week, we’ll be looking at decision making in teams. In my experience, this can be one of the biggest elements to crack in order to truly tap into a team’s potential. When you are in projects and you are ‘creating’, you are often moving forward into the unknown where you won’t have all the data (and even if you did the data for any decision is ultimately infinite…). So how do you make decisions in uncertainty?

You won’t be surprised to hear there is no easy answer, but what will make the difference is being open as a team about ‘how’ you are making the decision (and wherever possible to agree that process up front). I cover a few different approaches and tools in the video module to get you thinking about some of the underlying mindset dynamics in decision making which we’ll unpack a bit more in the live session. I’d also like you to consider what you feel is the role of consensus in decision making (have a look at these two articles containing differing viewpoints to get you started).

- [Module](https://vimeo.com/657833544/0b6e11981c)
- [Article 1](https://medium.com/@al.pittampalli/consensus-7048e614a452)
- [Article 2](https://blog.abacus.com/power-of-consensus-decision-making-engineering/)
- [Worksheet](./mindset/Decision%20Making%20Activity.docx)

I’m with you in person next week, so I look forward to seeing you all then.

## Feedback

Feedback is a vital part of continual improvement and the hero's journey of growth you're on on this course. As part of this, please click [here](https://forms.gle/BJWLNvSgKsp9rkbF8) to fill out the peer review form for your partner this week. If you've had more than one partner, please fill it out for each person you've worked with.

## Tasks

### Part 1 - 🎵🎵 Get your server running... Head out on the highway... 🎵🎵

👉 1. Go to `app.js`, and follow the steps in the comments at the bottom to get your server set up with basic REST routes.

### Part 2 - Postgres

👉 2a. Install the [node-postgres package](https://node-postgres.com/), and set up your pool in `db/index.js` using your local Postgres credentials. Export your `query`. Remember to check the [example project structure](https://node-postgres.com/guides/project-structure) and [connecting](https://node-postgres.com/features/connecting) pages of the docs if you get stuck!

👉 2b. Create and populate your table:

- **Create your table:** In `/scripts/createTable.js`, write a SQL statement to create a table for the cats data. Import and use your `query` in a function to send your SQL statement to your database. Run this file and check for your table on the database on Heroku.
- **Populate your table:** In `/scripts/populateTable.js`, you'll notice that you have an array of cats as sample data. Write a SQL query to populate the table you made in your `createTable` script with this cats data. Use your `query` to send this SQL query to your database too. Run this file and check that your table is populated on Heroku.

### Part 3 - Put it all together

👉 3. Hook your server up to the cats data in your local Postgres database rather than the array inside of `app.js`.

### Bonus

Once your API is working and hooked up to your database, see if you can see all your cat details on your front end, and then you can use any remaining time to refine and refactor.
