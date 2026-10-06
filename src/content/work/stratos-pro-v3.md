---
title: 'Stratos Pro V3'
summary: 'A ground-up redesign of a custom ESP32 board: upgrading to a newer ESP32 with Bluetooth and wireless connectivity, rerouting the layout around it, consolidating the power rails for ~15% better efficiency, and designing, fabricating, and hand-assembling a companion dev board to bring up firmware.'
date: 2025-01-01
context: 'internship'
company: 'MOVD'
tech: ['KiCad', 'ESP32', 'PCB Design', 'Bluetooth', 'Wireless Protocols', 'Power Regulation', 'Firmware Bring-Up', 'SMT Assembly', 'Oscilloscope', 'Logic Analyzer']
featured: true
onResume: true
status: 'shipped'
order: 2
cover: '/images/stratos-pro-v3/cover.svg'
---

> Work from my embedded systems internship at MOVD, described at a general level, with no
> proprietary details.

## Overview

Stratos Pro V3 is a custom ESP32-based board with an integrated OLED display. I owned the V3
redesign, working across multiple KiCad revisions and taking spins from schematic and layout through
assembly and bring-up. V3 was more than a refresh: the centerpiece was **upgrading the device's
microcontroller to a newer ESP32** and building the board, the power design, and the bring-up tooling
around that new part.

## Upgrading the microcontroller

The core of the redesign was moving to a **newer ESP32 model**, which unlocked **Bluetooth and
wireless connectivity** the previous design did not have. That upgrade touched the whole board:

- **Rerouting around the new part.** A different MCU means a different footprint, pinout, and set of
  support requirements, so I rerouted the layout to suit it rather than forcing the old placement to
  fit.
- **Adding wireless functionality.** Bringing up the radio meant designing for it deliberately:
  giving the RF section clean power and grounding, and routing with the antenna/RF path in mind so
  the wireless link actually performs.
- **Working with wireless protocols.** On top of the hardware, I worked with the **wireless
  protocols** the new ESP32 enabled (Bluetooth and Wi-Fi), so the added connectivity was something
  the board could really use, not just a part that was present.

## Power and rail consolidation

Alongside the MCU upgrade I reworked the power design, **cutting system power by about 15%**, from two
directions:

- **Power-rail changes.** Rethinking how the rails were generated and distributed. Consolidating
  rails removes redundant regulators and their quiescent losses and lets the remaining converters run
  closer to their efficient operating points. It also had to account for the **bursty RF current
  draw** of the now-wireless MCU, so the rails stay stable when the radio is active.
- **Component selection.** Choosing regulators and supporting parts with better efficiency and lower
  standby current for the same function.

Consolidating the rails also **cut the part count**, a manufacturability and cost win on top of the
efficiency gain: fewer regulators, fewer passives, and a simpler board to bring up.

## Designing and building a dev board

To actually get firmware onto the new design and bring it to life, I **designed a companion dev
board** for programming and booting firmware onto the target. I took that board the whole way: I
**laid it out, had it fabricated, and assembled it in house**, hand-populating the design rather than
sending it out. Building the programming and bring-up hardware myself meant I understood every
connection firmware had to come up over, and gave me a known-good platform to flash and debug against
instead of fighting unknowns on both the hardware and firmware sides at once.

## Bring-up and validation

I ran bring-up and functional validation on the prototype assemblies:

- **Power first.** Check each rail's voltage and ripple on an oscilloscope before anything else powers
  on, and confirm the power-up sequencing is sane.
- **Digital validation.** Use a logic analyzer to verify the serial traffic to the OLED and the other
  buses are behaving, so a dead display gets traced to the actual cause (bus, address, power, or
  firmware) instead of guesswork.
- **Failure isolation.** When a board misbehaved, I isolated the fault to a specific stage and
  root-caused it, resolving hardware defects before the revision was released.

## What I took away

Owning a full redesign, new MCU, new wireless capability, a reworked power tree, and the dev board to
boot it all, taught me how much of good hardware is designing for the bench: the rails you can probe,
the test points you place, the programming hardware you build, and the bring-up plan you think through
before the boards ever arrive.
