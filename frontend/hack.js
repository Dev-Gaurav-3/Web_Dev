// hack-sim.js
const lines = [
  "Reading filesystem metadata",
  "Gathering network info",
  "Brute-forcing credentials",
  "Downloading logs",
  "Extracting hidden keys",
  "Finalizing output"
];

const dotInterval = 300; // ms between dot changes
const lineDuration = 2000; // ms each line "animates" before moving on

function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

async function animateLine(text, duration){
  const end = Date.now() + duration;
  let frame = 0;
  // print initial text (no newline yet)
  process.stdout.write(text);
  while(Date.now() < end){
    const dotsCount = (frame % 3) + 1;               // 1,2,3,1,2,3...
    const dots = ".".repeat(dotsCount);
    // write carriage return to overwrite current line
    process.stdout.write("\r" + text + dots + " ".repeat(3 - dotsCount));
    await sleep(dotInterval);
    frame++;
  }
  // finish with three dots and move to next line
  process.stdout.write("\r" + text + "..." + "\n");
}

(async function main(){
  for (const l of lines){
    await animateLine(l, lineDuration);
  }
  console.log("💀 Your computer is hacked 💀");
})();
