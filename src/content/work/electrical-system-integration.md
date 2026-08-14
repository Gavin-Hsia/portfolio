---
title: 'Formula SAE Electrical System Integration'
summary: 'Low-voltage signal routing and power distribution for the vehicle’s temperature and pressure sensing subsystems, with grounding, fuse protection, and connector current ratings analyzed across the car.'
date: 2025-10-01
context: 'personal'
tech: ['Wiring Harness Design', 'Signal Integrity', 'Grounding', 'Power Distribution', 'Connectors']
featured: true
status: 'wip'
order: 4
cover: '/images/electrical-system-integration/cover.svg'
---

## Context

I work on the SCU Formula SAE electrical team, integrating the car's low-voltage sensing and power
distribution. The job is getting clean signals and reliable power where they need to go, in an
environment that is hostile to both: vibration, heat, and electrical noise from the powertrain, on a
car that is built, torn down, and rebuilt over a season.

## Signal routing and power distribution

I built the **low-voltage signal routing and power distribution** for the **temperature and pressure
sensing** subsystems, including the runs to the **driver display module** so the driver sees live
sensor data. Two priorities drive those runs:

- **Keep the sensor signals clean.** Route low-level sensor lines away from noisy power and
  switching, and treat the sensor return paths carefully so noise does not ride in on the ground.
- **Distribute power deliberately.** Feed the sensors and the display from a defined distribution
  scheme rather than ad-hoc taps, so every load is known and protected.

## Grounding strategy

Grounding is where sensor accuracy is won or lost. A sloppy ground scheme creates **ground loops**,
where return currents from higher-current loads shift the reference a sensor is measured against and
show up as noise or offset in the reading. I worked out a **defined grounding strategy** for the
sensing subsystems so their references stay quiet and the measurements stay trustworthy.

## Protection and conductor sizing

Across the car I analyzed **fuse protection, connector current ratings, and conductor sizing**:

- **Fusing** sized to protect the wire, so a fault opens the fuse before it can overheat a
  conductor.
- **Conductor gauge** chosen for the current it carries and the voltage drop it can tolerate over
  the run, with margin for the mechanical abuse of a race car.
- **Connectors** rated for their current and, just as importantly, chosen to **survive vibration and
  dynamic load**, since a connector that backs out mid-session is a DNF.

## Building for the car

Designing and validating **vehicle-grade harnesses** means building for the real environment, not
the bench: strain relief so vibration does not fatigue a joint, routing that keeps harnesses off hot
and moving parts, and terminations that hold up through repeated build-and-teardown cycles.
