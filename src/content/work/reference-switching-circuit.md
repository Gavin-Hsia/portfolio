---
title: '10 MHz & 1PPS Reference Switching Circuit'
summary: 'Selected and qualified a replacement analog switch for a 10 MHz / 1PPS reference distribution circuit, then owned the redesign from schematic through bring-up and G.703 validation.'
date: 2026-06-01
context: 'internship'
company: 'Hewlett Packard Enterprise'
tech: ['Cadence Allegro', 'Signal Integrity', 'S-Parameters', 'ITU-T G.703', 'Vector Network Analyzer', 'Crosstalk Analysis']
featured: true
status: 'wip'
order: 1
# repo / demo omitted — internal work
cover: '/images/reference-switching-circuit/cover.svg'
---

## Context

Part of the networking R&D hardware team at Hewlett Packard Enterprise. A 10 MHz and 1PPS
reference distribution circuit was failing its off-isolation requirement, letting reference
signals bleed through in the switch's off state.

## What I did

- **Root-caused the failure.** Measured channel attenuation across the analog switch, current
  buffer, and comparator stages to isolate the fault to an analog switch measuring **23 dB
  off-isolation at 10 MHz** against a **40 dB** datasheet specification — excess channel coupling
  and crosstalk in the off state.
- **Qualified a replacement.** Characterized candidate switches on a vector network analyzer,
  scoring each on off-isolation, feedthrough capacitance, on-resistance, and bandwidth to select
  a compliant part.
- **Owned the redesign through bring-up** — from schematic and isolation-conscious layout to
  fabrication — then validated insertion and return loss against ITU-T G.703.

<!-- TODO(gavin): expand — hidden from the live page until you fill it in.
     Add the deeper write-up here — the measurement setup, an off-isolation-vs-frequency plot,
     the layout decisions that improved isolation, and before/after S-parameter results. Drop
     images into public/images/reference-switching-circuit/ and reference them like:
     ![off-isolation](/images/reference-switching-circuit/plot.png) -->

