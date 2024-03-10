## About the project

#### Tools used

- React
- Tailwind
- Shadcn/ui

Both **tailwind** and **shadcn/ui** components were used for convenience and time saving

#### Observations

###### What I did and what was left

- Navigation

  - My `previous` and `next` buttons allow switching between already searched for pokemon and the `next` button, gets the next one by ID if you're on the last one

- Search

  - Displays error if didn't find pokemon
  - Doesn't allow searching by partial name
    - At first glance the API didn't look like it supported this natively so I just left it out
  - Displays name and sprite if found
    - I started trying to build an actual pokemon card with the data but it would take too long so I scratched it

- Didn't implement any tests

- Caching
  - This is was probably the most important one but I did leave it for last so I ended up running out of time. I do keep found pokemon in store, the only thing left would be to, before querying the API, check if any of the local pokemon have that name and move the sliding window to that index if so, query otherwise.

###### We'll get 'em next time

- I tried keeping the time spent around the 2-4h duration mentioned, which made it so I couldn't do or fix everything I wanted but was aware of and knew how to.
- Cache-wise, I looked at React's Context which seemed like the proper way of doing this in a _real_ app but my first iteration would always be using the store I already had.
- I'm saving way to much data per pokemon, +90% wasted memory.
- The `previous` button doesn't do the same logic as the `next` but backwards.
- I clearly didn't catch them all since there was a bug where sometimes the url for the image would break but I wasn't sure why so I couldn't reproduce to fix it.

Hopefully this all makes sense and I didn't forget anything.
Excuse the shameless self horn tooting but I know I'm capable of much more given the chance, even more so if inserted in a context with people I can learn from. Regardless, I appreciate the opportunity. **Thank you!**

# Running the app

Install dependencies

##### `npm install`

Start dev server

##### `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
