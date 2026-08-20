---
title: 'Stratos Pro V3'
summary: 'A custom ESP32 PCB with an integrated OLED display that improved system efficiency ~15% through power-rail and component-selection changes.'
date: 2025-01-01
context: 'internship'
company: 'MOVD'
tech: ['KiCad', 'ESP32', 'PCB Design', 'Power Regulation', 'Oscilloscope', 'Logic Analyzer']
featured: true
onResume: true
status: 'shipped'
order: 2
cover: '/images/stratos-pro-v3/cover.svg'
---

> Work from my embedded systems internship at MOVD, described at a general level, with no
> proprietary details.

## Overview

Stratos Pro V3 is a custom ESP32-based board with an integrated OLED display. I worked on it across
multiple KiCad revisions, taking spins from schematic and layout through assembly and bring-up. The
V3 effort focused on tightening the power design and the manufacturability of the board while
keeping the same ESP32-plus-OLED feature set.

## What I designed

I laid out the board in KiCad, integrating the ESP32, its power regulation, the IO, and the OLED
display onto one PCB. A few priorities drove the layout:

- **Power regulation** sized for the ESP32's load, including its bursty RF current draw, so the
  rails stay stable when the radio is active.
- **The display interface** (a serial bus such as I2C or SPI) routed cleanly to the OLED.
- **Test points** on the key rails and signals, so the board could actually be brought up and
  debugged rather than treated as a black box.

## Efficiency and rail consolidation

The headline result was **cutting system power by about 15%**, and it came from two directions:

- **Power-rail changes.** Rethinking how the rails were generated and distributed. Consolidating
  rails removes redundant regulators and their quiescent losses and lets the remaining converters
  run closer to their efficient operating points.
- **Component selection.** Choosing regulators and supporting parts with better efficiency and lower
  standby current for the same function.

Consolidating the rails also **cut the part count**, which is a manufacturability and cost win on
top of the efficiency gain: fewer regulators, fewer passives, and a simpler board to bring up.

## Bring-up and validation

I ran bring-up and functional validation on the prototype assemblies:

- **Power first.** Check each rail's voltage and ripple on an oscilloscope before anything else
  powers on, and confirm the power-up sequencing is sane.
- **Digital validation.** Use a logic analyzer to verify the serial traffic to the OLED and the
  other buses are behaving, so a dead display gets traced to the actual cause (bus, address, power,
  or firmware) instead of guesswork.
- **Failure isolation.** When a board misbehaved, I isolated the fault to a specific stage and
  root-caused it, resolving hardware defects before the revision was released.

## What I took away

Owning multiple revisions of the same board taught me how much of good hardware is designing for the
bench: the rails you can probe, the test points you place, and the bring-up plan you think through
before the boards ever arrive.
