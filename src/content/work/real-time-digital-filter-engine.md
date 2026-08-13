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

A real-time digital filter engine written in C that implements the difference equation directly,
supporting both **FIR and IIR** responses with circular buffers for constant-time sample
processing.

## Highlights

- Runs on a **Cortex-M4**, validated across **Butterworth** and **Parks–McClellan** filter
  designs.
- Circular-buffer state management keeps per-sample work bounded and predictable for real-time
  use.

<!-- TODO(gavin): expand — hidden from the live page until you fill it in.
     Add the deeper notes — the buffer/coefficient design, how you validated against
     MATLAB-designed filters, measured throughput on the M4, and a frequency-response plot.
     Link the repo if it's public. -->

