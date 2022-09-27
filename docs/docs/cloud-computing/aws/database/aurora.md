---
title: Aurora
description: Aurora
keywords:
  - Aurora
sidebar_position: 4
---

## Global Database

With [Global Database](https://aws.amazon.com/rds/aurora/global-database/), a single Aurora database can span multiple AWS regions to enable fast local reads and quick disaster recovery between regions. 

The difference between **Aurora Global DB** and **Cross-region Read Replicas** is that Global DB is **physical replication(hardware)** where Read replicas are **logical replication**.

With an Aurora global database, you can choose from two different approaches to failover:
- Managed planned failover
- Unplanned failover