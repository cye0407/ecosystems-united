Platform: Substack essay (new farm-resilience publication) · Source: /articles/cover-crops-roi
Goal: transform the spiking SEO article into a first-person builder essay; honest-numbers hook; grow subs.

---

# "Cover crops pay for themselves" is doing a lot of work

I write guides on farm sustainability economics and build free calculators. I'm not a farmer, and I won't pretend to be one. What I do all day is take claims that circulate in agriculture — in university extension PDFs, in glossy regen reports, in other people's marketing — and try to turn them into numbers a person could actually plan with.

Which is how I found out that "cover crops pay for themselves" is one of those sentences that's true and useless at the same time.

Here's the thing about writing an article versus building a calculator. In an article, you can write "cover crops pay for themselves" and move on. Nobody stops you. In a calculator, you can't. The tool has to say *when* they pay for themselves, *for whom*, and *what happens in the meantime* — and every one of those answers is a number you have to type in and be prepared to defend.

I've now typed those numbers in. Let me show you what the honest version looks like.

## The cost is not what people think it is

The first surprise isn't the size of the cost. It's the shape.

Cover crops get talked about like an investment — a one-time outlay you make and then harvest benefits from forever. That's the wrong shape. Seed plus one establishment pass runs somewhere around €55 per hectare, and you pay it *every year you keep the cover in*. US surveys put the all-in figure at $45–70 per acre in the early years — seed, planting, termination — with seed costs drifting down as farmers get smarter about sourcing (median seed cost has fallen to $16–20/acre in recent survey rounds, from around $25 before).

So cover crops aren't a purchase. They're a recurring line in the operating budget, like fuel or crop insurance. When I built the cost side of my calculator, that's how I modelled it: an annual charge, not a one-off. It sounds like a pedantic distinction. It isn't. A farmer who budgets €55/ha once and then meets the same bill again next autumn — and the autumn after that — feels lied to. And the practice gets abandoned not because it failed agronomically but because it was sold with the wrong shape.

## The returns, ranked by how much I trust them

The benefits side of the cover-crop literature is a buffet, and not everything on the buffet is equally fresh. When I had to pick which returns go into a model, I ranked them by defensibility.

**First, fertiliser.** This is the boring one and the best one. Legume covers fix nitrogen — hairy vetch can fix 90–160 lbs of N per acre; crimson clover up to around 130. That's real money at current fertiliser prices, it shows up on an invoice you can point at, and it's the return I'd tell anyone to anchor their maths on.

**Second, yield.** Multi-farm studies show cover crops associated with about 4.5 bu/acre higher average corn yields and ~2.8% higher soybean yields, sometimes even in year one. At $4.88/bu corn that's about $22/acre. Real, but noisier than fertiliser — weather eats small yield effects for breakfast, and one bad spring can make the whole line invisible.

**Third, everything else.** Erosion prevented, water infiltrated, fields you can drive on two days earlier after rain. I believe these benefits exist. Farmers who've run covers for a decade swear by them — there's a documented Iowa operation that took soil organic matter from 2.8% to over 4%, and a Michigan farm that measured a 4x infiltration improvement after one season of radish. But "one inch of topsoil takes 500 years to form" is a fact, not a cash flow. I couldn't put a defensible euro figure on avoided erosion for a specific farm in a specific year, so in my model these benefits are context, not coefficients.

Notice what that ranking does: it flips the usual sales pitch. The marketing leads with soil health and climate resilience — the poetic stuff — and mentions fertiliser savings in passing. The defensible maths runs exactly the other way.

## The curve nobody sells

Now the part that made me want to write this essay.

USDA-SARE research — thousands of farms, multiple survey years — puts the average break-even for cover crops at about three years. Year one is usually a net cost. Year two is approaching break-even. Year three is where it typically turns, and the years after that are where the compounding actually happens.

Three years is not a scandal. Liming your soil works on the same kind of timeline and nobody calls lime a scam. But almost nobody *leads* with the three years. The industry sells year-five returns in year-one language, and then acts surprised when farmers who tried covers for one season and saw a net cost conclude the whole thing is hype.

I want to say this plainly: the farmer who quits cover crops in year two is not being short-sighted. In most cases they're responding rationally to a curve they were never shown. If you'd been promised "pays for itself" and the first eighteen months quietly cost you money, walking away is what a sensible person does. The failure is upstream, in the pitch.

## What I'd actually say to someone starting

If a friend with land asked me — and I'd preface it, as always, with *I build the spreadsheets, you know your fields* — it would be this:

Start on one field, not the whole farm. Use a simple mix rather than a single species: one deep rooter to break compaction (radish), one nitrogen fixer to earn the money back (clover or vetch), one biomass builder to hold the soil (rye or oats). Keep the rest of the farm as your control, because in three years you'll want to compare against something other than your memory. Budget the €55/ha as an annual cost from day one. And write down your fertiliser bills now, because the single most persuasive number you will ever produce is your own input spend, falling.

None of that guarantees anything. Your soil, your weather, and your management will move the numbers — sometimes a lot. That's precisely why I build the tools the way I do: every figure is an assumption you can see and change, never a forecast I'm asking you to trust.

## Honesty is the feature

There's a version of my calculator that would be much better marketing. It would default the carbon income on, assume the subsidy, take the sunniest yield study, and show every visitor a beautiful green number. It would also be useless, because the first agronomist who stress-tested it would — correctly — never trust anything I published again.

So the tool shows the cost every year, the payback in the realistic window, and the fuzzy benefits clearly labelled as fuzzy. If cover crops are as good as the long-run evidence suggests — and I think they are — they can survive being modelled honestly.

That's my test for any practice, and for anyone selling you one: does the pitch survive its own spreadsheet? Cover crops do. It just takes three years, and someone willing to say so.

*I publish the assumptions behind everything I build. If you think a number above is wrong, I genuinely want to hear it — the models get better every time someone with field experience corrects me.*
