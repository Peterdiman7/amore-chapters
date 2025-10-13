#!/bin/bash

PROJECT_ROOT=/home/devalex/amore-chapters.com/amore-chapters
LOG_FILE="$HOME/backend.log"

# Go to project root to ensure .env is loaded
cd $PROJECT_ROOT || exit

while true; do
  echo "[$(date)] Starting Amore Chapters backend..." >> "$LOG_FILE" 2>&1
  /usr/bin/node $PROJECT_ROOT/src/services/server.js >> "$LOG_FILE" 2>&1
  echo "[$(date)] Backend crashed or stopped. Restarting in 5 seconds..." >> "$LOG_FILE" 2>&1
  sleep 5
done
