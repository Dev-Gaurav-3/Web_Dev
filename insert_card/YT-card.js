function create(title, ch_name, views, date, duration, thumbnail) {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="thumbnail">
          <img src="${thumbnail}" alt="Thumbnail">
          <span class="time">${duration}</span>
        </div>
        <div class="title">
          <h3>${title}</h3>
          <div class="info">${ch_name} • ${views} views • ${date} year ago</div>
        </div>
      `;
      document.querySelector(".cards").appendChild(card);
    }

    document.getElementById("addBtn").addEventListener("click", () => {
      let title = prompt("Enter Title:");
      let ch_name = prompt("Enter Channel name:");
      let views = prompt("Enter Views:");
      let date = prompt("Enter Date (e.g. 2):");
      let duration = prompt("Enter duration (e.g. 12:34):");
      let thumbnail = prompt("Enter Thumbnail link:");

      if (title && ch_name && views && date && duration && thumbnail) {
        create(title, ch_name, views, date, duration, thumbnail);
      }
    });