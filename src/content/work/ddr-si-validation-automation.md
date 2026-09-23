---
title: 'DDR Signal Integrity Validation Automation'
summary: 'An unattended Python pipeline that automates DDR eye-diagram capture across every direction, channel, and lane on a multi-channel ASIC platform, turning a 256-capture manual process into a single hands-off run, plus a web viewer for the results.'
date: 2026-04-01
context: 'internship'
company: 'Hewlett Packard Enterprise'
tech: ['Python', 'Asyncio', 'Serial Console', 'Linux Kernel Debugging', 'PCIe', 'DDR', 'Signal Integrity', 'Streamlit', 'Plotly']
featured: false
onResume: false
status: 'shipped'
order: 1.6
# repo / demo omitted, internal work
cover: '/images/ddr-si-validation-automation/cover.svg'
---

> Work from my hardware internship on the networking R&D team, described at a general level, with no
> proprietary tool names, board codenames, driver modules, or internal details.

## Context

On a multi-channel ASIC-based platform, I owned the automation of **DDR memory signal integrity
validation**. Verifying DDR margins means capturing an **eye diagram** for every combination of
read/write direction, memory channel, and data lane, and on the board I was working with that came to
**256 individual captures**. It had been done by hand, one capture at a time, clicking through an
internal GUI. That does not scale, and every manual step is a chance for operator error.

## What I built

I designed and implemented a **fully automated capture pipeline** that loops through every
direction, channel, and lane, issues the correct low-level commands over a **serial console
session**, waits for each capture to finish, and reboots the target between runs, all with no manual
intervention. A multi-hour manual process became a **single unattended run**.

The interesting part was not the loop. It was everything that broke once a machine was driving real
hardware fast and repeatedly, and had to recover on its own.

## Engineering challenges I solved

**Asynchronous control flow bugs.** The original completion-detection logic never actually awaited
the coroutine that parsed console output, so the automation silently failed to synchronize between
steps. I traced it to an incorrectly bound lambda and rewrote it as a proper async function so each
step genuinely waits on the one before it.

**A race condition in device reset timing.** The target had an effectively zero-second window to
interrupt its autoboot sequence, and a fixed delay before sending the interrupt was missing that
window intermittently. Instead of guessing at a delay, I detected the boot-imminent string in real
time and fired the interrupt the instant it appeared. That fix then surfaced a follow-on issue,
leftover buffer residue from the early interrupt, which I handled as its own step.

**Root-causing corrupted data.** Some captures came back with impossible timing values, the kind of
numbers you get from an **unsigned integer underflow**. I traced it back several layers to a **clock
frequency register that was never being initialized**, the result of a command-concatenation bug.
Rather than just patch the symptom, I established a single diagnostic check, reading that register
back, to confirm a capture was valid before trusting any of its data.

**A kernel panic during device reset.** The reset that had to run between captures was intermittently
crashing the board with a **kernel panic**. I did root-cause analysis on the crash dumps and traced
it to a **NULL pointer dereference in a delayed workqueue callback** inside a vendor-supplied FPGA
driver: the driver was scheduling work against a **PCIe endpoint that disappears during the reset**.
I evaluated several mitigation paths (module unbinding, selective PCIe function removal, shutting
down the owning daemon) and documented why each was insufficient at the shell level, then escalated
with a complete root-cause writeup pointing at the real fix needed in the driver or the reset
sequence.

## Data visualization tooling

I also built a **web-based viewer** with **Streamlit and Plotly** that parses the raw capture logs
and renders the eye diagrams interactively. It includes an **overlay view** that compares every lane
on a channel at once, so an outlier lane jumps out immediately, and support for **merging captures**
that were split across multiple log files.

## Skills demonstrated

Embedded systems debugging, asynchronous serial-console automation in Python, Linux kernel crash
analysis, PCIe and driver-level root-causing, DDR signal integrity fundamentals (eye diagrams,
timing and voltage margin, JEDEC mask concepts), and building internal tooling for hardware
validation workflows.

## What I want to build on

I want to go deeper on the hardware side of signal integrity itself: **simulation-based margin
prediction**, and correlating measured eyes back to **PCB trace geometry and stackup**, rather than
only the software automation layer around existing measurement tools.
