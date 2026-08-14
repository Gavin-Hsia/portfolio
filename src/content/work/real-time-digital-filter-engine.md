---
title: 'Real-Time Digital Filter Engine'
summary: 'A difference-equation filter engine in C supporting FIR and IIR responses with circular buffers, validated on a Cortex-M4 across Butterworth and Parks–McClellan designs.'
date: 2026-03-01
context: 'personal'
tech: ['C', 'ARM Cortex-M4', 'DSP', 'MATLAB']
featured: false
status: 'shipped'
order: 3
# repo: 'https://github.com/Gavin-Hsia/...'  # TODO(gavin): add if public
cover: '/images/real-time-digital-filter-engine/cover.svg'
---

## What it is

A real-time digital filter engine written in C. It implements a filter's difference equation
directly, so the same engine runs both **FIR and IIR** responses just by swapping the coefficients,
and it uses **circular buffers** so each output sample costs a fixed, bounded amount of work no
matter how long it has been running. I built it to run on an **ARM Cortex-M4** and validated it
against filters designed in **MATLAB**.

## The difference equation, directly

A digital filter is a difference equation: each output sample is a weighted sum of recent input
samples (the feedforward, FIR part) and recent output samples (the feedback, IIR part).
Implementing that equation directly keeps the engine small and general:

- **FIR** uses only the input terms, so it is always stable and gives linear phase when the
  coefficients are symmetric.
- **IIR** adds the feedback terms, which buy a much sharper response from far fewer coefficients, at
  the cost of having to watch stability.

Since both are the same equation with different coefficient sets, one code path covers both.

## Circular buffers for constant-time processing

The filter needs a short history of past samples, a delay line. A naive version shifts the whole
history every sample, which gets more expensive as the filter grows. Instead I used **circular
buffers**: a fixed block of memory with a moving index, so adding a new sample and dropping the
oldest is O(1). Per-sample work stays constant and predictable, which is exactly what real time
demands, since every sample has to finish inside the sample period.

## Designing in MATLAB, validating on hardware

I designed the actual filters in **MATLAB** and brought their coefficients into the engine, then
confirmed the engine reproduced the intended response:

- **Butterworth (IIR)** for a maximally flat passband.
- **Parks-McClellan / equiripple (FIR)** for a sharp transition with bounded, controlled ripple.

Designing against a known-good MATLAB reference and running on the **Cortex-M4** meant any deviation
pointed at an implementation bug rather than a design question, which made the engine straightforward
to trust.

## What I took away

Building around the difference equation and circular buffers made this a general tool instead of a
one-off filter: to get a new response, I design it in MATLAB and drop in the coefficients, and the
real-time behavior comes for free.

<!-- Note to Gavin: add real specifics when you have them (sample rate, measured per-sample cycles on
     the M4, fixed vs floating point, a response plot comparing engine vs MATLAB) and the repo link.
     Images go in public/images/real-time-digital-filter-engine/. -->

