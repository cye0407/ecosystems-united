Platform: Substack essay (new farm-resilience publication) · Source: /articles/regenerative-agriculture-economics
Goal: transform the spiking SEO article into a first-person essay; the J-curve / yield-dip honesty is the hook.

---

# The most important number in my model is negative

The regenerative agriculture literature contains some genuinely spectacular numbers. American Farmland Trust case studies of four farms found an average return on investment of 176%, with individual farms ranging from 35% to 343%. An analysis of Kansas wheat farmers suggests that at steady state, regenerative systems can run 70–120% more profitable than conventional ones. Broader studies talk about 15–25% ROI within three to five years of transition.

I've read these studies. I've cited some of them in guides I've written. And when I sat down to build a free ROI calculator for regenerative transitions, I used almost none of those numbers.

Instead, the first coefficient I hard-coded was a loss: in year one of a transition, my model docks 8% of your gross margin. Year two, 4%. It doesn't reach zero until year three.

I want to explain why I built it that way, because I think the reasoning matters more than the tool.

## The brochure and the transition are different products

Here's the pattern I kept hitting in the research. The dazzling numbers — the 176%, the 70–120% — are mostly *steady-state* or *post-transition* findings. They describe farms that made it through. The transition itself is a different story, and the honest sources are consistent about its shape: two to three years where yields wobble while soil biology reorganises, input savings that start small and build slowly, and real money out the door up front. USDA-SARE puts the average break-even for cover crops, the most common entry practice, at about three years.

That shape has a name: the J-curve. Down before up. Every serious regen researcher knows it. Almost no regen marketing shows it.

When you build a calculator, you have to pick which of these two products you're modelling — the brochure or the transition. A calculator is used by someone at the *start* of the curve, deciding whether to begin. Showing that person steady-state economics is answering a question they didn't ask. So I modelled the dip.

## The actual numbers, since you'll want to roast them

Transparency or nothing, so here's what's under the hood of my model. Every figure is an adjustable assumption — a starting point you're meant to argue with, not a forecast:

- **Yield dip:** 8% of gross margin in year one, 4% in year two, gone by year three. For no-till specifically, the research I trust says budget for roughly a 5% trim in the first year or two before recovery.
- **Input savings ramp:** 5% of input spend in year one, then 12%, 20%, 26%, and 30% by year five — held flat after that. That brackets the commonly cited "15–40% input reduction within 3–5 years" from the conservative side.
- **Upfront cost:** €120 per hectare, calibrated to a two-practice transition (say, cover crops plus reduced tillage). More practices, more upfront.
- **Ongoing costs:** cover crop seed and establishment at €55/ha, every year you keep the cover in — it never becomes free.
- **System effect:** the savings ramp scales with how many practices you stack, from a 0.875 multiplier for one practice alone up to 1.25 for four together. The research is fairly emphatic that these practices compound as a system and underperform bolted on in isolation.
- **Subsidies:** not assumed. Ever. Eco-scheme payments for cover crops commonly land somewhere in the €50–130/ha range in Europe, but the rates vary so much by country and scheme that my model refuses to auto-fill them. You enter your own rate or the model shows you the economics without it.

A standing disclaimer, and a genuine ask: **if you don't agree with these coefficients, tell me what you'd use instead — and why.** Field numbers beat published averages, and the model changes when better numbers show up.

Run sensible inputs through that and payback typically lands around year three or four. Sometimes later. And here's the part a marketer would cut: sometimes *never*. If your input spend is already low — if you're already running a lean operation — there's less fat for regenerative practices to trim, and the savings ramp has less to ramp on. The model will show you that. I consider it a feature.

## Why conservative beats compelling

There's an obvious objection: aren't I underselling it? If the steady-state studies are even half right, my model is leaving upside on the table.

Maybe. But think about who uses a free farm-economics calculator and what happens next. This isn't a toy — the person on the other end might restructure a rotation, take the number to their bank, or commit a field for three years based partly on what my tool told them. A model that overpromises gets used once, produces a disappointment with a two-year lag, and quietly poisons trust in the whole category. A model that underpromises and then gets beaten by reality creates a farmer who tells the neighbours.

There's also a selfish reason. I publish my coefficients precisely so that people with actual field experience can tell me where they're wrong — it's the fastest error-correction mechanism I have. That only works if the starting numbers are visibly honest. Nobody bothers correcting a sales pitch; they just dismiss it.

## The overpromise is the threat, not the sceptics

Here's my uncomfortable opinion, as someone who writes in this space: sceptics don't kill regenerative agriculture. Broken promises do.

The dangerous sentence is "it pays for itself." It's said with good intentions, and at steady state it may even be true — but the farmer hearing it is standing at the *start* of the transition, where the honest answer is "it costs you money for two to three years first." Promise the first sentence, deliver the second, and you've created the most persuasive sceptic there is: a neighbour who tried it and got burned. The steady-state numbers might be genuinely excellent — the Kansas data and the AFT farms suggest the long game is very real — but the people who never got shown the dip don't stick around to reach steady state. They exit at the bottom of a J-curve nobody drew for them, and they tell everyone why.

Selling the dip sounds like bad marketing. I think it's the only marketing that survives contact with year two. "This will cost you money for two to three years, here's roughly how much, here's when it typically turns, and here's how funding can soften the front end" is a pitch a farmer can plan around — and a bank can lend against. "Trust the process" is not.

## The test

So that's the standard I'd offer for evaluating any regenerative claim, including mine: does it survive conservative modelling? If a transition only pencils out with the sunniest yield study, an assumed subsidy, and carbon income at prices nobody's actually paying — it doesn't pencil out. If it still works with an 8% year-one dip, a savings ramp that takes five years to mature, and zero assumed funding, then you've found something robust enough to bet a field on.

The interesting thing about regenerative economics is that, for a lot of operations, it passes that test. It just passes it slowly, dipping first, the way real things do.

*The full model — every coefficient, adjustable — is free to use. If your numbers from the field disagree with mine, that's not a problem, that's the point. Tell me.*
